import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../islands/contact.tsx";
import Footer from "../components/footer.tsx";

import type { State } from "../utils/types.ts";

import type { RouteContext } from "$fresh/server.ts";

const Index = (ctx: RouteContext) => {
	const lang = ctx.state.lang as State["lang"];
	const translation = ctx.state.translation as State["translation"];
	return (
		<div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
			<Menu lang={lang} />
			<Me translation={translation.me} />
			<Experience translation={translation.experience} />
			<Education translation={translation.education} />
			<Skills translation={translation.skills} />
			<Projects translation={translation.projects} />
			<Contact translation={translation.contact} />
			<Footer translation={translation.footer} />
		</div>
	);
};

export default Index;
