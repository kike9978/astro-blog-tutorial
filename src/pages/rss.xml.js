import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "Astro Tutorial | Blog",
    description: "Test de prueba de Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: "<language>es-mx</language>"
  })
}