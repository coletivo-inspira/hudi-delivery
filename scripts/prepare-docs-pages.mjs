import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const docsDir = "docs";

if (!existsSync(outDir)) {
  console.error("Missing out/. Run the Next.js build first.");
  process.exit(1);
}

rmSync(docsDir, { recursive: true, force: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(join(docsDir, ".nojekyll"), "");
writeFileSync(
  join(docsDir, "_config.yml"),
  `# Legacy GitHub Pages still builds /docs with Jekyll.
# Keep Next.js assets (under _next) in the published output.
include:
  - _next
  - .nojekyll
`,
);

if (existsSync("CNAME")) {
  cpSync("CNAME", join(docsDir, "CNAME"));
}

console.log("Prepared docs/ for legacy GitHub Pages /docs publishing.");
