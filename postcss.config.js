module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-preset-env'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./resources/**/*.{html,js,vue,blade.php}'],
            safelist: ['jstw-py-2.5'],
        }),
    ],
};