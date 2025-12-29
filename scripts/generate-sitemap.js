import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const siteUrl = "https://www.notschluesseldienst-pinneberg.de";

const pages = [
  "/",
  "/leistungen",
  "/standorte",
  "/kontakt",
  "/impressum",
  "/datenschutz"
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });

  pages.forEach((url) => {
    sitemap.write({
      url,
      changefreq: "weekly",
      priority: url === "/" ? 1.0 : 0.8
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  writeFileSync("public/sitemap.xml", xml.toString());

  console.log("✅ sitemap.xml generated");
}

generateSitemap();

