import { MiddlewareHandlerContext } from "$fresh/server.ts";

import de from "../utils/i18n/de.json" assert { type: "json" };
import en from "../utils/i18n/en.json" assert { type: "json" };

import { State } from "../utils/types.ts";

export const handler = [
  async function setLanguage(
    req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      ctx.state.translation = cookie.split("=")[1] === "en" ? en : de;
      return await ctx.next();
    } else {
      const lang = req.headers.get("accept-language")?.includes("de")
        ? "de"
        : "en";
      ctx.state.translation = lang === "en" ? en : de;
      const res = await ctx.next();
      res.headers.set("Set-Cookie", `lang=${lang}`);
      return res;
    }
  },
];
