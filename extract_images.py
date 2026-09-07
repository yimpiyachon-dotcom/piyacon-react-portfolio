#!/usr/bin/env python3
"""
extract_images.py — run this ONLY when you are ready to deploy.

Takes the all-in-one portfolio .tsx (images embedded as base64) and splits it
into a lean .tsx plus an images/ folder.

Usage:
    python3 extract_images.py piyachon_wanburi_ux_ui_portfolio.tsx

Produces a ./export/ folder containing:
    piyachon_wanburi_ux_ui_portfolio.tsx   (~260 KB, paths instead of base64)
    images/profile/    profile photo
    images/projects/   project hero images, named by project id
    images/process/    case-study process images, /<project-id>/<step>-<n>.webp
    images/logos/      tool logos for the Stack page

Then copy images/ into your public/ (or static/) directory so the paths
resolve from the web root.

Note: inline SVG logos are intentionally left in the file — they are vectors
only a few hundred bytes each, not worth separate HTTP requests.
"""

import re
import base64
import os
import shutil
import sys

LOGO_NAMES = {
    "anthropic": "claude",
    "maze": "maze",
    "ga": "google-analytics",
    "hotjar": "hotjar",
    "react": "react",
}


def main(src):
    c = open(src, encoding="utf-8").read()
    out_root = "export"
    shutil.rmtree(out_root, ignore_errors=True)
    os.makedirs(out_root, exist_ok=True)

    written = []

    def write_img(b64, path):
        full = os.path.join(out_root, path)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "wb") as f:
            f.write(base64.b64decode(b64))
        written.append(path)

    # 1) profile image
    m = re.search(r'const PROFILE_IMG = "data:image/webp;base64,([A-Za-z0-9+/=]+)";', c)
    if m:
        write_img(m.group(1), "images/profile/piyachon.webp")
        c = c[:m.start()] + 'const PROFILE_IMG = "/images/profile/piyachon.webp";' + c[m.end():]

    # 2) processSteps images -> /images/process/<project>/<step>-<n>.webp
    ps_start = c.find("const processSteps = {")
    ps_end = c.find("\n};", ps_start) + 3
    if ps_start != -1:
        lines = c[ps_start:ps_end].split("\n")
        out, proj, step, n = [], None, None, 0
        for l in lines:
            pm = re.match(r'\s*"([a-z0-9-]+)": \[', l)
            sm = re.search(r'step: "(\d+)"', l)
            im = re.search(r'"data:image/webp;base64,([A-Za-z0-9+/=]+)"', l)
            if pm:
                proj = pm.group(1)
            elif sm:
                step, n = sm.group(1), 0
            elif im and proj and step:
                n += 1
                path = f"images/process/{proj}/{step}-{n}.webp"
                write_img(im.group(1), path)
                indent = l[: len(l) - len(l.lstrip())]
                out.append(f'{indent}"/{path}",')
                continue
            out.append(l)
        c = c[:ps_start] + "\n".join(out) + c[ps_end:]

    # 3) project image fields -> /images/projects/<id>.webp
    lines = c.split("\n")
    cur_id = None
    for i, l in enumerate(lines):
        idm = re.search(r'id: "([a-z0-9-]+)",', l)
        if idm:
            cur_id = idm.group(1)
        im = re.match(r'^(\s*)image: "data:image/webp;base64,([A-Za-z0-9+/=]+)",', l)
        if im and cur_id:
            path = f"images/projects/{cur_id}.webp"
            write_img(im.group(2), path)
            lines[i] = f'{im.group(1)}image: "/{path}",'
    c = "\n".join(lines)

    # 4) remaining inline webp (tool logos)
    for key, name in LOGO_NAMES.items():
        m = re.search(rf'{key}: "data:image/webp;base64,([A-Za-z0-9+/=]+)"', c)
        if m:
            path = f"images/logos/{name}.webp"
            write_img(m.group(1), path)
            c = c[:m.start()] + f'{key}: "/{path}"' + c[m.end():]

    # anything still embedded
    leftovers = re.findall(r"data:image/webp;base64,([A-Za-z0-9+/=]+)", c)
    for i, b in enumerate(leftovers, 1):
        path = f"images/other/{i}.webp"
        write_img(b, path)
        c = c.replace(f"data:image/webp;base64,{b}", f"/{path}", 1)

    dst = os.path.join(out_root, os.path.basename(src))
    with open(dst, "w", encoding="utf-8") as f:
        f.write(c)

    # sanity checks
    for o, cl in [("(", ")"), ("{", "}"), ("[", "]")]:
        assert c.count(o) == c.count(cl), f"bracket mismatch: {o}"

    refs = sorted(set(re.findall(r'"(/images/[^"]+)"', c)))
    missing = [r for r in refs if not os.path.isfile(os.path.join(out_root, r.lstrip("/")))]

    print(f"tsx:        {len(c) // 1024} KB  ->  {dst}")
    print(f"images:     {len(written)} files")
    print(f"referenced: {len(refs)}")
    print(f"missing:    {missing or 'none'}")
    print(f"inline svg: {c.count('data:image/svg')} (left in place on purpose)")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1])
