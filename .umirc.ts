import { defineConfig } from "umi";

const name = 'cssinjs-benchmark';

export default defineConfig({
  npmClient: 'pnpm',
  exportStatic: {},
  base: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
});
