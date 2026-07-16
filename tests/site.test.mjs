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

test("GitHub Pages remains a static export", async () => {
  const config = await readFile(new URL("next.config.ts", root), "utf8");
  const workflow = await readFile(new URL(".github/workflows/deploy-pages.yml", root), "utf8");
  assert.match(config, /output:\s*["']export["']/);
  assert.match(config, /basePath/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});
