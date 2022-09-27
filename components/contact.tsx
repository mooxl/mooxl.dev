const Contact = () => {
  /* const onSubmit = async (data: { mail: string; message: string }) => {
    try {
      await fetch("https://awsmailer.mediaatrium.de/send", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: process.env.NEXT_PUBLIC_USERNAME,
          key: process.env.NEXT_PUBLIC_KEY,
          from: process.env.NEXT_PUBLIC_FROM,
          to: process.env.NEXT_PUBLIC_TO,
          subject: `Neue Nachricht von ${data.mail}`,
          content: data.message,
        }),
      });
      setSent(true);
    } catch (error) {
      console.log(error);
      setError("Etwas ist schief gelaufen.");
    }
  }; */
  return (
    <>
      <h3>Kontakt</h3>

      <form method="POST" className="space-y-3">
        <div className="space-y-1">
          {
            <label for="mail">
              E-Mail
            </label>
          }
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
      )
    </>
  );
};
export default Contact;
