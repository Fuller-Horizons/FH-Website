/**
 * Quick HTTP smoke check for key App Router pages.
 * Start the dev or production server first, then:
 *   node scripts/assess-http.mjs
 *   ASSESS_BASE_URL=https://your-domain.com node scripts/assess-http.mjs
 */

const base = (process.env.ASSESS_BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

const paths = [
  "/",
  "/about",
  "/blog",
  "/blog/the-value-of-technology-alignment",
  "/blog/what-independent-technology-advisory-looks-like",
  "/case-studies",
  "/contact",
  "/insights",
  "/services",
  "/the-fuller-approach",
  "/why-fuller-horizons",
];

async function check(path) {
  const url = `${base}${path}`;
  const res = await fetch(url, { redirect: "follow" });
  return { path, url, status: res.status, ok: res.ok };
}

async function main() {
  console.log(`Assess HTTP — base ${base}\n`);
  const results = [];
  for (const path of paths) {
    try {
      results.push(await check(path));
    } catch (err) {
      results.push({
        path,
        url: `${base}${path}`,
        status: null,
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  let failed = 0;
  for (const r of results) {
    const line =
      "error" in r && r.error
        ? `FAIL ${r.path} — ${r.error}`
        : `${r.ok ? "OK  " : "FAIL"} ${r.path} — ${r.status}`;
    console.log(line);
    if (!r.ok) failed += 1;
  }

  console.log("");
  if (failed > 0) {
    console.error(`Done: ${failed} path(s) did not return success.`);
    process.exit(1);
  }
  console.log("Done: all paths returned 2xx.");
}

await main();
