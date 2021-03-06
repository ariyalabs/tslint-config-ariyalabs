/**
 * Copyright (c) 2017 AriyaLabs, LLC. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

module.exports = {
  'rules': {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't listed but commented out (so
    //   they don't override a base ruleset).
    // - Rules that are recommended but contradict Pier 1 Imports
    //   are explicitly set to the Pier 1 Imports value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    // 'no-cond-assign': 2,
    'no-console': 1,
    // 'no-constant-condition': 2,
    // 'no-control-regex': 2,
    // 'no-debugger': 2,
    // 'no-dupe-args': 2,
    // 'no-dupe-keys': 2,
    // 'no-duplicate-case': 2,
    // 'no-empty-character-class': 2,
    // 'no-empty': 2,
    // 'no-ex-assign': 2,
    // 'no-extra-boolean-cast': 2,
    // 'no-extra-parens': 0,
    // 'no-extra-semi': 2,
    // 'no-func-assign': 2,
    // 'no-inner-declarations': 2,
    // 'no-invalid-regexp': 2,
    // 'no-irregular-whitespace': 2,
    // 'no-obj-calls': 2,
    // 'no-prototype-builtins': 0,
    // 'no-regex-spaces': 2,
    // 'no-sparse-arrays': 2,
    // 'no-template-curly-in-string': 0,
    // 'no-unexpected-multiline': 2,
    // 'no-unreachable': 2,
    // 'no-unsafe-finally': 2,
    // 'no-unsafe-negation': 0,
    // 'use-isnan': 2
    // 'valid-jsdoc': [
    //   1, {
    //     requireParamDescription: false,
    //     requireReturnDescription: false,
    //     requireReturn: false,
    //     prefer: { returns: 'return' },
    //   }
    // ],
    // 'valid-typeof': 2

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 0,
    // 'array-callback-return': 0,
    // 'block-scoped-var': 0,
    // 'class-methods-use-this': 0,
    // 'complexity': 0,
    // 'consistent-return': 0
    // 'curly': 0,
    // 'default-case': 0,
    // 'dot-location': 0,
    // 'dot-notation': 0,
    'eqeqeq': 2,
    'guard-for-in': 2,
    // 'no-alert': 0,
    'no-caller': 2,
    // 'no-case-declarations': 2,
    // 'no-div-regex': 0,
    // 'no-else-return': 0,
    // 'no-empty-function': 0,
    // 'no-empty-pattern': 2,
    // 'no-eq-null': 0,
    // 'no-eval': 0,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    // 'no-extra-label': 0,
    // 'no-fallthrough': 2,
    // 'no-floating-decimal': 0,
    // 'no-global-assign': 0,
    'no-implicit-coercion': 2,
    // 'no-implicit-globals': 0,
    // 'no-implied-eval': 0,
    'no-invalid-this': 1,
    // 'no-iterator': 0,
    // 'no-labels': 0,
    // 'no-lone-blocks': 0,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 0,
    // 'no-new-func': 0,
    'no-new-wrappers': 2,
    // 'no-new': 0,
    // 'no-octal-escape': 0,
    // 'no-octal': 2,
    'no-param-reassign': 2,
    // 'no-proto': 0,
    // 'no-redeclare': 2,
    // 'no-return-assign': 0,
    // 'no-script-url': 0,
    // 'no-self-assign': 2,
    // 'no-self-compare': 0,
    // 'no-sequences': 0,
    'no-throw-literal': 2,
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    // 'no-unused-labels': 2,
    // 'no-useless-call': 0,
    // 'no-useless-concat': 0,
    // 'no-useless-escape': 0,
    // 'no-void': 0,
    // 'no-warning-comments': 0,
    'no-with': 2,
    // 'radix': 0,
    // 'vars-on-top': 0,
    // 'wrap-iife': 0,
    // 'yoda': 0,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'script': 0,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 2,
    // 'no-label-var': 0,
    // 'no-restricted-globals': 0,
    // 'no-shadow-restricted-names': 0,
    // 'no-shadow': 0,
    // 'no-undef-init': 0,
    // 'no-undef': 2,
    // 'no-undefined': 0,
    'no-unused-vars': [
      1, {
        'vars': 'local',
        'args': 'none',
        'varsIgnorePattern': 'execute',
      },
    ],
    // 'no-use-before-define': 0,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    // 'global-require': 0,
    // 'handle-callback-err': 0,
    // 'no-mixed-requires': 0,
    // 'no-new-require': 0,
    // 'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    // 'no-restricted-properties': 0,
    // 'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-spacing': [2, 'never'],
    // 'block-spacing': 0,
    'brace-style': 0,
    'camelcase': [2, { properties: 'always' }],
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    // 'consistent-this': 0,
    'eol-last': 2,
    'func-call-spacing': 2,
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    'indent': [
      2,
      2,
      { "SwitchCase": 1 }
    ],
    // 'jsx-quotes': 0,
    'key-spacing': 2,
    'keyword-spacing': 2,
    // 'line-comment-position': 0,
    'linebreak-style': 0,
    // 'lines-around-comment': 0,
    // 'lines-around-directive': 0,
    // 'max-depth': 0,
    'max-len': 0,
    // 'max-lines': 0,
    // 'max-nested-callbacks': 0,
    // 'max-params': 0,
    // 'max-statements-per-line': 0,
    // 'max-statements': 0,
    // 'multiline-ternary': 0,
    'new-cap': [
      2, {
        'newIsCap': true,
        'capIsNew': false,
        'properties': true,
      },
    ],
    // 'new-parens': 0,
    // 'newline-after-var': 0,
    // 'newline-before-return': 0,
    // 'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    // 'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    'no-new-object': 2,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    'no-tabs': 2,
    // 'no-ternary': 0,
    // 'no-trailing-spaces': 0,
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'object-curly-newline': 0,
    'object-curly-spacing': [2, 'always'],
    // 'object-property-newline': 0,
    'one-var-declaration-per-line': [2, 'always'],
    'one-var': "off",
    // 'operator-assignment': 0,
    // 'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent'],
    'quotes': [
      2,
      'single', { allowTemplateLiterals: true },
    ],
    // 'require-jsdoc': [
    //   1, {
    //     require: {
    //       FunctionDeclaration: true,
    //       MethodDefinition: true,
    //       ClassDeclaration: true,
    //     },
    //   }
    // ],
    'semi-spacing': 2,
    'semi': 2,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2, {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'never',
      },
    ],
    // 'space-in-parens': 0,
    // 'space-infix-ops': 0,
    // 'space-unary-ops': 0,
    'spaced-comment': 0,
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    'arrow-parens': [0, 'always'],
    // 'arrow-spacing': 0,
    // 'constructor-super': 2,
    'generator-star-spacing': [2, 'after'],
    // 'no-class-assign': 0,
    // 'no-confusing-arrow': 0,
    // 'no-const-assign': 0,
    // 'no-dupe-class-members': 0,
    // 'no-duplicate-imports': 0,
    'no-new-symbol': 2,
    // 'no-restricted-imports': 0,
    // 'no-this-before-super': 2,
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    // 'no-useless-rename': 0,
    // 'no-var': 0,
    // 'object-shorthand': 0,
    // 'prefer-arrow-callback': 0,
    // 'prefer-const': 0,
    // 'prefer-numeric-literals': 0,
    // 'prefer-reflect': 0,
    // 'prefer-rest-params': 0,
    // 'prefer-spread': 0,
    // 'prefer-template': 0,
    // 'require-yield': 2,
    // 'rest-spread-spacing': 0,
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    // 'template-curly-spacing': 0,
    'yield-star-spacing': [2, 'after'],
  },
  'plugins': [
    'eslint-plugin-react',
    'eslint-plugin-mocha',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jquery': true,
    'mocha': true,
    'node': true,
  },
  'globals': {},
  'parser': 'babel-eslint',
};
