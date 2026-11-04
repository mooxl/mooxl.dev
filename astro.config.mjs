// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://mooxl.dev",
	trailingSlash: "never",
	// imprint.html is served at /imprint by Cloudflare without a trailing-slash redirect
	build: { format: "file", inlineStylesheets: "always" },
	// emits a CSP <meta> with hashes for the inlined styles
	security: { csp: { directives: ["default-src 'none'", "img-src 'self'", "font-src 'self' data:"] } },
	markdown: { syntaxHighlight: false },
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		// embed the core font subsets in the inlined CSS, so text paints in Plex on first paint with no reflow
		build: { assetsInlineLimit: (file) => (file.includes("-core.") ? true : undefined) },
	},
});
