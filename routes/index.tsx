import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../components/contact.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
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
      return ctx.render({ sent: false });
    }
  },
};
export default function Index() {
  return (
    <div class="max-w-xl my-5 mx-auto lg:mx-2 text-sm text-white font-plex leading-none tracking-wide">
      <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
        {
          /* <Menu />
        <Me />
        <Education />
        <Experience />
        <Skills />
        <Projects /> */
        }
        <Contact />
      </div>
    </div>
  );
}
