import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      return await ctx.render({ lang: cookie.split("=")[1] });
    } else {
      const lang = req.headers.get("accept-language")?.includes("de")
        ? "de"
        : "en";
      const res = await ctx.render({ lang: lang });
      res.headers.set("Set-Cookie", `lang=${lang}`);
      return res;
    }
  },
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
      console.log(e);
      return ctx.render({ sent: false });
    }
  },
};
export default function Index(
  { data }: PageProps<{ sent?: boolean; lang: "en" | "de" }>,
) {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu />

      <Me />
      {data.lang === "en" ? "EN" : "DE"}
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact sent={data?.sent} />
      <Footer />
    </div>
  );
}
