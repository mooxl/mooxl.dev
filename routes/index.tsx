import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../islands/contact.tsx";
import Footer from "../components/footer.tsx";

import { State } from "../utils/types.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({
      translation: ctx.state.translation,
      lang: ctx.state.lang,
    });
  },
};
const Index = (
  { data }: PageProps<State>,
) => {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={data.lang} />
      <Me translation={data.translation.me} />
      <Education translation={data.translation.education} />
      <Experience translation={data.translation.experience} />
      <Skills translation={data.translation.skills} />
      <Projects translation={data.translation.projects} />
      <Contact translation={data.translation.contact} />
      <Footer translation={data.translation.footer} />
    </div>
  );
};

export default Index;
