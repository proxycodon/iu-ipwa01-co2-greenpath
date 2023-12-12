
//eslintrc.js

module.exports = {
    root: true,
    globals: {
        module: 'writable',
        process: 'readonly'
    },
    env: {
        es2021: true,
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:security/recommended'
    ],
    plugins: ['security'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};


