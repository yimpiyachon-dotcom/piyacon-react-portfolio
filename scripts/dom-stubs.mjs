/** The browser APIs the components touch while rendering, and nothing more. */
let pathname = '/';
export function installDomStubs() {
  globalThis.window = {
    get location() {
      return { pathname };
    },
    history: {
      replaceState: (_state, _title, path) => { pathname = path; },
      pushState: (_state, _title, path) => { pathname = path; },
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    scrollTo: () => {},
    matchMedia: () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }),
  };
  globalThis.document = {
    title: '',
    getElementById: () => null,
    addEventListener: () => {},
    removeEventListener: () => {},
    createElement: () => ({ style: {}, setAttribute() {}, click() {} }),
  };
}
