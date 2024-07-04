import type { State } from "../utils/types.ts";

const Language = (data: { lang: State["lang"] }) => {
	return (
		<button
			class="h-4 w-4 text-gray-light font-bold bg-gray-dark rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light"
			type="button"
			onClick={() => {
				if (data.lang === "en") {
					document.cookie = "lang=de";
				} else {
					document.cookie = "lang=en";
				}
				location.reload();
			}}
		>
			{data.lang === "en" ? "EN" : "DE"}
		</button>
	);
};
export default Language;
