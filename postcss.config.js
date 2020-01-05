const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');

const stylelint = require('stylelint');
const mqpacker = require('mqpacker');

module.exports = () => {
    return {
        plugins: [
            stylelint(),
            postcssImport({
                plugins: [stylelint],
            }),
            postcssCustomProperties(),
            autoprefixer({
                flexbox: 'no-2009',
            }),
            cssnano(),
            customMedia(),
            mqpacker({
                sort: true,
            }),
        ],
    };
};
