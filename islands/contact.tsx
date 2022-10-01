import { useEffect, useState } from "preact/hooks";

const Contact = () => {
  const [status, setStatus] = useState<"sending" | "sent" | "failed">();
  const [form, setForm] = useState({
    mail: "",
    message: "",
  });

  const submit = async (event: Event) => {
    event.preventDefault();
    try {
      setStatus("sending");
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          mail: form.mail,
          message: form.message,
        }),
      });
      if (response.status !== 200) throw Error;
      setStatus("sent");
    } catch (e) {
      setStatus("failed");
    }
  };

  return (
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
    <>
      <h3>Kontakt</h3>
      <div>
        {status === "sent"
          ? <h3>Vielen Dank für deine Nachricht!</h3>
          : (
            <form onSubmit={submit} className="space-y-3">
              {status === "failed" && <h3>Etwas ist schief gelaufen :(</h3>}
              <div className="space-y-1">
                <label for="mail">
                  E-Mail {form.mail.error && `- ${form.mail.error}`}
                </label>

                <input
                  type="text"
                  id="mail"
                  name="mail"
                  className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
                  required
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  onInput={(e) => {
                    setForm((current) => ({
                      ...current,
                      mail: e.currentTarget.value,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1">
                <label for="message">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full resize-none rounded-xl h-15  p-1 bg-gray-dark text-gray-light outline-none"
                  required
                  onInput={(e) => {
                    setForm((current) => ({
                      ...current,
                      message: e.currentTarget.value,
                    }));
                  }}
                >
                </textarea>
              </div>
              <input
                type="submit"
                className="rounded-xl px-5 py-1 bg-gray-dark text-gray-light cursor-pointer"
                value="Absenden"
              />
            </form>
          )}
      </div>
    </>
  );
};
export default Contact;
