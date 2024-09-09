import type { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
	return (
		<html lang="de">
			<head>
				<title>Max Schmidt - Web Engineer</title>
				<meta
					name="description"
					content="Web Engineer and TypeScript enthusiast"
				/>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<div class="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm text-white font-plex leading-none tracking-wide md:my-3">
				<Component />
			</div>
		</html>
	);
}
