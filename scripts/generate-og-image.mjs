import sharp from 'sharp';

const W = 1200, H = 630;

// Profile photo — round crop
const photo = await sharp('public/me.webp')
  .resize(260, 260)
  .composite([{
    input: Buffer.from(
      `<svg width="260" height="260"><circle cx="130" cy="130" r="130" fill="white"/></svg>`
    ),
    blend: 'dest-in'
  }])
  .toBuffer();

// Photo with subtle border
const photoBuf = await sharp({
  create: { width: 288, height: 288, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
})
  .composite([
    { input: photo, left: 14, top: 14 },
    {
      input: Buffer.from(
        `<svg width="288" height="288"><circle cx="144" cy="144" r="132" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/></svg>`
      ),
      left: 0, top: 0,
    },
  ])
  .png().toBuffer();

// Right-side amber glow (gradient)
const glowData = Buffer.alloc(500 * H * 4);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < 500; x++) {
    const a = Math.round(((500 - x) / 500) * 12);
    const idx = (y * 500 + x) * 4;
    glowData[idx] = 212; glowData[idx + 1] = 175; glowData[idx + 2] = 55; glowData[idx + 3] = a;
  }
}
const glow = await sharp(glowData, { raw: { width: 500, height: H, channels: 4 } })
  .blur(120)
  .png()
  .toBuffer();

// Top accent bar
const bar = await sharp({
  create: { width: W, height: 4, channels: 4, background: { r: 212, g: 175, b: 55, alpha: 0.6 } }
})
  .png()
  .toBuffer();

// Text overlay as SVG
const textSvg = Buffer.from(
  `<svg width="620" height="360" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="80" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="700" fill="#ffffff">Osmar Bogarín</text>
    <text x="0" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="26" fill="rgba(255,255,255,0.6)">Data Engineer &amp; Consultant</text>
    <text x="0" y="210" font-family="ui-monospace,monospace" font-size="22" fill="#D4AF37">&gt;_ portfolio</text>
    <line x1="0" y1="252" x2="200" y2="252" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="0" y="300" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="rgba(255,255,255,0.35)">
      <tspan x="0" dy="-10">Python · SQL · Spark · Airflow · Cloud</tspan>
      <tspan x="0" dy="28">Data Engineering · Consultoría · Desarrollo</tspan>
    </text>
  </svg>`
);

// Composite everything
await sharp({
  create: { width: W, height: H, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
})
  .composite([
    { input: bar, left: 0, top: 0 },
    { input: glow, left: W - 500, top: 0 },
    { input: textSvg, left: 65, top: 135 },
    { input: photoBuf, left: W - 65 - 288, top: 135 },
  ])
  .webp({ quality: 85, effort: 4 })
  .toFile('public/og-image.webp')
  .then(info => console.log('OG image:', info.width + '×' + info.height, '-', (info.size / 1024).toFixed(0) + 'KB'));
