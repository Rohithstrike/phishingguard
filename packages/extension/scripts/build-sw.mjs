import { build } from 'esbuild'

await build({
  entryPoints: ['src/sw.ts', 'src/content.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['chrome118'],
  logLevel: 'info'
})
