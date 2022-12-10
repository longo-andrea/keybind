import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [Vue()],
	resolve: {
		alias: {
			keybind: resolve(__dirname, '../packages/core/index.ts'),
			'keybind-layout': resolve(
				__dirname,
				'../packages/core/layouts/base.ts',
			),
		},
	},
});
