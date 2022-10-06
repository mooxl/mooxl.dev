import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "smtp";
import { generate } from "../../utils/generate.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("hostname")!,
        port: +Deno.env.get("port")!,
        tls: true,
        auth: {
          username: Deno.env.get("username")!,
          password: await generate(Deno.env.get("password")!),
        },
      },
    });
    const payload: { mail: string; message: string } | undefined = await request
      .json();
    if (payload) {
      try {
        await client.send({
          from: Deno.env.get("from")!,
          to: Deno.env.get("to")!,
          subject: `Neue Nachricht von ${payload.mail}`,
          content: payload.message,
        });
        await client.close();
        return new Response("", { status: Status.OK });
      } catch (e) {
        return new Response("", { status: Status.BadRequest });
      }
    }
    return new Response("", { status: Status.NoContent });
  },
};
