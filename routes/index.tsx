import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";

import { State, Translation } from "../utils/types.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({ translation: ctx.state.translation });
  },
  /*  async POST(req, ctx) {
    try {
      const form = await req.formData();
      if (form.has("mail") && form.has("message")) {
        await fetch("https://awsmailer.mediaatrium.de/send", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: Deno.env.get("username"),
            key: Deno.env.get("key"),
            from: Deno.env.get("from"),
            to: Deno.env.get("to"),
            subject: `Neue Nachricht von ${form.get("mail")}`,
            content: form.get("message"),
          }),
        });
        return ctx.render({ sent: true });
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      return ctx.render({ sent: false });
    }
  }, */
};
const Index = (
  { data }: PageProps<State>,
) => {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu />
      <Me translation={data.translation.me} />
      <Experience translation={data.translation.experience} />
      <Education />
      <Skills />
      <Projects />
      {/*<Contact sent={data?.sent} />*/}
      <Footer />
    </div>
  );
};

export default Index;
