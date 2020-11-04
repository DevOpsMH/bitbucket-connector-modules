import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import run from '@rollup/plugin-run';
import alias from '@rollup/plugin-alias';
import builtins from 'builtin-modules';
import path from 'path'

const projectDir = path.resolve(__dirname);

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [
        typescript(),
        json(),
        commonjs(),
        resolve(),
        run(),
        alias({
            entries: [
                { find: '@src', replacement: path.resolve(projectDir, 'src') }
            ]
        })
    ],
    onwarn: (message) => {
        // to avoid a stupid error that occurs because one of the modules uses 'eval'
        if (/Use of eval is strongly discouraged/.test(message)) return;
        console.error(message);
    },
    external: ['express', ...builtins],
}

