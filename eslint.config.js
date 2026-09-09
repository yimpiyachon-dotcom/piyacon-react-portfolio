import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'public'] },
  {
    // Scoped to src/ so eslint sees the same tree tsconfig ("include": ["src"])
    // and knip ("project": ["src/**"]) already do. Left as **/*, a stray .tsx
    // export sitting at the repository root is linted as if it were source and
    // fails the deploy — which is exactly what happened with an old merged
    // portfolio copy that an open editor tab kept writing back to disk.
    files: ['src/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Portfolio content is authored as plain data with a per-project shape,
      // so the escape hatches in App.tsx are deliberate.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
