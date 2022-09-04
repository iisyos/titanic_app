/* eslint-disable */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
      'consistent-return': 'warn',
      "eqeqeq": ['error', 'always'],
      'no-else-return': [
        'error',
        {
          "allowElseIf": false,
        },
      ],
      'no-fallthrough': 'error',
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-return-await': 'error',
      'no-unused-expressions': 'error',
      'no-useless-concat': 'error',
      'no-warning-comments': ['warn', { terms: ['todo'], location: 'start' }],
      'object-shorthand': 'warn',
      "yoda": 'error',

      // TypeScript ESLint settings
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/ban-types': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      // '@typescript-eslint/prefer-nullish-coalescing': ['warn', { ignoreConditionalTests: false }],
      '@typescript-eslint/prefer-optional-chain': 'warn',
      // '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      // Style options
      "curly": 'error',
      'operator-assignment': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-template': 'error',

      // eslint-plugin-vue
      'vue/attributes-order': 'warn',
      'vue/component-name-in-template-casing': [
        2,
        'kebab-case',
        {
          "registeredComponentsOnly": false,
        },
      ],
      'vue/component-tags-order': [
        'error',
        {
          "order": ['template', 'script', 'style'],
        },
      ],
    },
}
