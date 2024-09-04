import Language from "../islands/language.tsx";
import type { State } from "../utils/types.ts";
const Menu = (data: { lang: State["lang"] }) => (
	<div
		class="
      flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0
      "
	>
		<Language lang={data.lang} />
		
	</div>
);
export default Menu;
