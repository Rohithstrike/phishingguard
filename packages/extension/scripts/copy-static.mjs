import { cp, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'

async function main() {
  if (!existsSync('dist')) await mkdir('dist', { recursive: true })
  await cp('manifest.json', 'dist/manifest.json')
  if (existsSync('icons')) await cp('icons', 'dist/icons', { recursive: true })
  if (existsSync('popup.html')) await cp('popup.html', 'dist/popup.html')
}
main()
