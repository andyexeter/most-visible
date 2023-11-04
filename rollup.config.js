import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = [
    '.js', '.ts'
];

const plugins = [
    resolve({ extensions }),
    //
    // // Allow bundling cjs modules. Rollup doesn't understand cjs
    // commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
        extensions,
        babelHelpers: 'bundled',
        include: ['js/**/*']
    })
];

export default [
    {
        input: 'js/most-visible.bundle.ts',
        output: [
            {
                file: 'dist/most-visible.js',
                format: 'iife',
                name: 'mostVisible'
            },
            {
                file: 'dist/most-visible.min.js',
                format: 'iife',
                name: 'mostVisible',
                plugins: [terser()]
            }
        ],
        plugins: plugins
    },
    {
        input: 'js/most-visible.ts',
        output: [
            {
                file: 'dist/most-visible.mjs',
                format: 'esm'
            },
            {
                file: 'dist/most-visible.cjs',
                format: 'cjs'
            }
        ],
        plugins: plugins
    }
];
