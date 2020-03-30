import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
    {
        input: './src/index.ts',
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
