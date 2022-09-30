import { Translation } from "../utils/types.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
  <div class="col-span-2 lg:col-span-1 flex items-center mt-10 justify-between">
    <a href="/impressum">
      {data.translation.imprint}
    </a>
    <a
      class="relative w-4"
      href="https://github.com/mooxl"
      rel="noopener"
      target="_blank"
    >
      <img class="w-full" src="vectors/github.svg" alt="Logo von GitHub" />
    </a>
    <a href="/datenschutz">
      {data.translation.privacy}
    </a>
  </div>
);
export default Footer;
