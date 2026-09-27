// Crops the supplied headshot into public/stebin-photo.jpg for the circular hero.
// Input: the pasted screenshot (source PNG). Run: node scripts/prepare-photo.mjs <input> [out]
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const candidates = [
  process.argv[2],
  'C:\\Users\\stebi\\AppData\\Local\\Temp\\freebuff-desktop-pastes\\paste-1790481039997-3996.png',
  'C:\\Users\\stebi\\Downloads\\Stebin_PB_Resume (4).pdf',
].filter(Boolean)

const input = candidates.find((p) => existsSync(p))
if (!input) {
  console.error(
    'No input image found. Pass a path: node scripts/prepare-photo.mjs <path-to-headshot>'
  )
  process.exit(1)
}

const out = process.argv[3] ?? path.resolve('public/stebin-photo.jpg')

// Face sits upper-middle of the 800x800 source; square crop keeps head + shoulders
// with breathing room above (for the circular mask) and desk/hands context below.
const meta = await sharp(input).metadata()
console.log(`source: ${input} (${meta.width}x${meta.height}, ${meta.format})`)

const size = Math.round(Math.min(meta.width, meta.height) * 0.7)
const left = Math.round(meta.width / 2 - size / 2)
const top = Math.round(meta.height * 0.02)

await sharp(input)
  .extract({ left, top, width: size, height: size })
  .resize(800, 800, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(out)

const outMeta = await sharp(out).metadata()
console.log(`wrote ${out} (${outMeta.width}x${outMeta.height})`)
