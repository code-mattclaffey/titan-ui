import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssImport from 'postcss-import';
import customMedia from 'postcss-custom-media';
import stylelint from 'stylelint';
import mqpacker from 'mqpacker';
import pxtorem from 'postcss-pxtorem';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
    {
        input: './src/main.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'es',
            },
        ],
        plugins: [
            postcss({
                extract: true,
                minimize: true,
                plugins: [
                    postcssImport({
                        plugins: [stylelint()],
                    }),
                    postcssCustomProperties(),
                    autoprefixer({
                        flexbox: 'no-2009',
                    }),
                    customMedia(),
                    mqpacker({
                        sort: true,
                    }),
                    pxtorem(),
                ],
                extensions: ['.css'],
            }),
            resolve({
                extensions,
            }),
            commonjs(),
            typescript({
                tsconfig: 'tsconfig.prod.json',
            }),
            terser(),
        ],
        external: ['react'],
    },
];
