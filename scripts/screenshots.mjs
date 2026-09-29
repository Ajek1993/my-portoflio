// Full-page screenshots for visual review.
// Usage: npm run build && npm run start, then in another terminal: npm run screenshots
// Env: BASE_URL (default http://localhost:3000), CHROMIUM_PATH (otherwise local Chrome is used).
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const OUT_DIR = "screenshots";
const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

const launchOptions = process.env.CHROMIUM_PATH
  ? { executablePath: process.env.CHROMIUM_PATH }
  : { channel: "chrome" };

const browser = await chromium.launch(launchOptions);
await mkdir(OUT_DIR, { recursive: true });

for (const viewport of VIEWPORTS) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  // Scroll through the page so scroll-in sections become visible.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(700);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  if (overflow > 0) console.warn(`[${viewport.name}] horizontal overflow: ${overflow}px`);

  await page.screenshot({ path: `${OUT_DIR}/${viewport.name}-hero.png` });
  await page.screenshot({ path: `${OUT_DIR}/${viewport.name}-full.png`, fullPage: true });

  const sections = await page.locator("main > section").all();
  for (const [index, section] of sections.entries()) {
    const id = (await section.getAttribute("id")) ?? `section-${index + 1}`;
    await section.screenshot({ path: `${OUT_DIR}/${viewport.name}-${id}.png` });
  }
  console.log(`saved ${OUT_DIR}/${viewport.name}-*.png`);
  await page.close();
}

await browser.close();
