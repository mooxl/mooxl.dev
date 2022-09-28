const Me = () => (
  <div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
    <div class="md:order-2">
      <h1>Max Schmidt</h1>
      <h2 class="my-1">
        Full Stack Web Developer
      </h2>
      <p>
        Gude! Ich bin am 29.01.1996 in Aschaffenburg geboren und bin dabei, das
        Internet schöner und schneller zu machen. <br />{" "}
        Lebe in Köln-Ehrenfeld, studiere wieder in Aachen und arbeite momentan
        bei Ambient.
      </p>
    </div>
    <img
      class="rounded-full flex-shrink-0 md:order-1"
      src="pixels/me.webp"
      height="150"
      width="150"
      alt="Portrait von Max Schmidt"
    />
  </div>
);

export default Me;
