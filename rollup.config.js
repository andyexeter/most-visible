import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'js/most-visible.bundle.js',
        output: [
            {
                file: 'dist/most-visible.js',
                format: 'iife',
                name: 'mostVisible',
            },
            {
                file: 'dist/most-visible.min.js',
                format: 'iife',
                name: 'mostVisible',
                plugins: [terser()]
            }
        ],
        plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
    }
];
