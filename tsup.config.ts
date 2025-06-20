import {defineConfig, Options} from 'tsup';

export default defineConfig((options): Options[] => {
    const commonOptions: Options = {
        entry: {
            index: 'src/index.ts',
        },
        sourcemap: true,
        target: ["esnext"],
        minify: true,
        ...options,
    };

    return [
        {
            ...commonOptions,
            name: "Modern ESM",
            format: ['esm'],
            target: ["es2019"],
            external: ['react', 'react-dom'],
            outExtension: () => ({js: '.mjs'}),
        },
        {
            ...commonOptions,
            format: 'cjs',
            external: ['react', 'react-dom'],
            outDir: './dist/cjs/',
            outExtension: () => ({js: '.cjs'}),
        },
        {
            ...commonOptions,
            name: "CJS Type Definitions",
            format: ["cjs"],
            dts: {only: true},
        },
    ];
});
