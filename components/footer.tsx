import type { Translation } from "../utils/types.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
	<div class="col-span-2 lg:col-span-1 flex gap-1 items-start mt-10 justify-between">
		<a href="/imprint">{data.translation.imprint}</a>
		<div class="flex flex-col items-center gap-2">
			<a
				class="relative w-4"
				width="16"
				height="16"
				href="https://github.com/mooxl"
				rel="noreferrer noopener"
				target="_blank"
			>
				<img
					class="w-full"
					loading="lazy"
					src="vectors/github.svg"
					alt="Logo von GitHub"
				/>
			</a>
			<a href="https://fresh.deno.dev" class="w-15">
				<img
					loading="lazy"
					width="197"
					height="37"
					src="https://fresh.deno.dev/fresh-badge-dark.svg"
					alt="Made with Fresh"
				/>
			</a>
		</div>
		<a href="/privacy">{data.translation.privacy}</a>
	</div>
);
export default Footer;
