module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        jquery: true,
        es6: true,
        mocha: true
    },
    extends: ['plugin:vue/essential', '@vue/airbnb', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-dangle': ['error', 'never'],
        'no-empty': [
            2,
            {
                allowEmptyCatch: true
            }
        ],
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'no-multiple-empty-lines': 2,
        'one-var': [
            2,
            {
                uninitialized: 'always',
                initialized: 'never'
            }
        ],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'space-unary-ops': [
            2,
            {
                words: false,
                nonwords: false
            }
        ],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'no-spaced-func': 2,
        'comma-dangle': ['error', 'never'],
        'no-trailing-spaces': 2,
        'no-var': 2,
        camelcase: 0,
        'comma-style': [2, 'last'],
        curly: [2, 'all'],
        'dot-notation': 2,
        'object-shorthand': 2,
        'operator-linebreak': [2, 'after'],
        'arrow-parens': 0,
        semi: [2, 'always'],
        'space-infix-ops': 2,
        'keyword-spacing': [
            2,
            {
                overrides: {
                    else: {
                        before: true
                    },
                    while: {
                        before: true
                    },
                    catch: {
                        before: true
                    }
                }
            }
        ],
        'spaced-comment': [2, 'always'],
        'space-before-blocks': [2, 'always'],
        'array-bracket-spacing': [0, 'always'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ],
        'func-names': ['error', 'never'],
        'max-len': 'off',
        'no-useless-escape': 'off',
        'no-underscore-dangle': 'off',
        'no-throw-literal': 'off',
        'no-param-reassign': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'no-plusplus': 'off',
        'no-bitwise': 'off',
        'no-lonely-if': 'off',
        'consistent-return': 'off',
        'no-shadow': 'off',
        'no-dupe-keys': 'off',
        'no-useless-concat': 'off'
    }
};
