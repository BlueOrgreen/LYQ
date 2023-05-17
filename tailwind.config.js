/* eslint-disable global-require */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: 'tw-',
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./components/**/*.js', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px',
        },
        extend: {
            fontFamily: {
                // sans: 'var(font-family-base)',
                firacode: 'var(--font-family-firacode)',
                kaiti: 'var(--font-family-kaiti)', // 使用: tw-font-kaiti
            },
            colors: {
                primary: 'var(--primary-color)',
                'link-color': 'var(--link-color)',
                'success-color': 'var(--success-color)',
                'warning-color': 'var(--warning-color)',
                'error-color': 'var(--error-color)',
                'gray-0': 'var(--gray-0)',
                'gray-1': 'var(--gray-1)',
                'gray-2': 'var(--gray-2)',
                'gray-9': 'var(--gray-9)',
                'gray-10': 'var(--gray-10)',
            },
            boxShadow: {
                nysm: '0 0 2px 0 rgb(0 0 0 / 0.05)',
                ny: '0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px - 1px rgb(0 0 0 / 0.1)',
                nymd: '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)',
                nylg: '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)',
                spread: '0 5px 40px rgb(0 0 0 / 0.1)',
            },
            dropShadow: {
                darksm: '0 1px 1px rgb(255 255 255 / 0.09)',
                darkmd: ['0 4px 3px rgb(255 255 255 / 0.12)', '0 2px 2px rgb(255 255 255 / 0.11)'],
                darklg: ['0 10px 8px rgb(255 255 255 / 0.8)', '0 4px 3px rgb(255 255 255 / 0.15)'],
                darkxl: [
                    '0 20px 13px rgb(255 255 255 / 0.06)',
                    '0 8px 5px rgb(255 255 255 / 0.15)',
                ],
                dark2xl: '0 25px 25px rgb(255 255 255 / 0.25)',
                // darkSm: 'drop-shadow(0 1px 1px rgb(255 255 255 / 0.05))',
                // dark: 'drop-shadow(0 1px 2px rgb(255 255 255 / 0.1)) drop-shadow(0 1px 1px rgb(255 255 255 / 0.06))',
                // darkMd: 'drop-shadow(0 4px 3px rgb(255 255 255 / 0.07)) drop-shadow(0 2px 2px rgb(255 255 255 / 0.06))',
                // darkLg: 'drop-shadow(0 10px 8px rgb(255 255 255 / 0.04)) drop-shadow(0 4px 3px rgb(255 255 255 / 0.1))',
                // darkXl: 'drop-shadow(0 20px 13px rgb(255 255 255 / 0.03)) drop-shadow(0 8px 5px rgb(255 255 255 / 0.08))',
                // dark2Xl: ' drop-shadow(0 25px 25px rgb(255 255 255 / 0.15))',
            },
        },
    },
};
