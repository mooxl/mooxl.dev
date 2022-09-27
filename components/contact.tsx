import { PageProps } from "$fresh/server.ts";
const Contact = ({ data }: PageProps<{ sent?: boolean }>) => {
  return (
    <>
      <h3>Kontakt</h3>
      {data && data.sent
        ? <h3>Vielen Dank für deine Nachricht!</h3>
        : (
          <form method="POST" className="space-y-3">
            {data && <h3>Etwas ist schief gelaufen :(</h3>}
            <div className="space-y-1">
              <label for="mail">
                E-Mail
              </label>

              <input
                type="text"
                id="mail"
                name="mail"
                className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
                //pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
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
    </>
  );
};
export default Contact;
