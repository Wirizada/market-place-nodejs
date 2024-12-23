import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: { ...globals.browser, ...globals.node } }},
  pluginJs.configs.recommended,
  {
    rules: {

      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['error', {
        'code': 80,
        'ignoreUrls': true, 
      }],
      'no-magic-numbers': ['warn', {
        'ignoreArrayIndexes': true,
        'ignore': [0, 1],
      }],
    },
  },
];
