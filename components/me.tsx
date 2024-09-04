import type { Translation } from "../utils/types.ts";

const Me = (data: { translation: Translation["me"] }) => (
	<div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
		<div class="md:order-2">
			<h1>Max Schmidt</h1>
			<h2 class="my-1">Web Engineer</h2>
			<p class="whitespace-pre-wrap">{data.translation.text}</p>
		</div>
		<img
			class="rounded-full flex-shrink-0 md:order-1 md:w-8"
			src="pixels/me.webp"
			height="150"
			width="150"
			alt="Portrait von Max Schmidt"
		/>
	</div>
);

export default Me;
