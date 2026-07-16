import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
  const [r, g, b] = channels.map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("brand text combinations meet WCAG AA", () => {
  assert.ok(contrast("#64748B", "#F8FAFC") >= 4.5, "slate text on offwhite must pass 4.5:1");
  assert.ok(contrast("#FFFFFF", "#1E3A8A") >= 4.5, "white CTA text on deep blue must pass 4.5:1");
});

test("the homepage composes every required conversion section", async () => {
  const page = await readFile(new URL("src/app/page.tsx", root), "utf8");
  for (const component of ["Hero", "Manifesto", "ProductShowcase", "HowItWorks", "PricingTable", "Faq", "FinalCta", "SiteFooter"]) {
    assert.match(page, new RegExp(`<${component}`));
  }
});

test("the Hudi Delivery lockup is used by the header", async () => {
  const [header, logo] = await Promise.all([
    readFile(new URL("src/components/layout/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("public/hudi-delivery-lockup.svg", root), "utf8"),
  ]);
  assert.match(header, /hudi-delivery-lockup\.svg/);
  assert.match(logo, />HUDI<\/text>/);
  assert.match(logo, />Delivery<\/text>/);
});

test("GitHub Pages remains a static export", async () => {
  const config = await readFile(new URL("next.config.ts", root), "utf8");
  const workflow = await readFile(new URL(".github/workflows/deploy-pages.yml", root), "utf8");
  const prepareDocs = await readFile(new URL("scripts/prepare-docs-pages.mjs", root), "utf8");
  assert.match(config, /output:\s*["']export["']/);
  assert.match(config, /basePath/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /prepare:docs-pages/);
  assert.match(workflow, /paths-ignore:[\s\S]*docs\/\*\*/);
  assert.match(prepareDocs, /_next/);
  assert.match(prepareDocs, /\.nojekyll/);
});

test("the lockfile includes Linux WASM runtime dependencies required by npm ci", async () => {
  const [manifest, lockfile] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("package-lock.json", root), "utf8"),
  ]);
  assert.match(manifest, /"@emnapi\/core": "1\.11\.2"/);
  assert.match(manifest, /"@emnapi\/runtime": "1\.11\.2"/);
  assert.match(lockfile, /"node_modules\/@emnapi\/core"/);
  assert.match(lockfile, /"node_modules\/@emnapi\/runtime"/);
});
