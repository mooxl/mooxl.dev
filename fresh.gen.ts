// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_mail from "./routes/api/mail.ts";
import * as $imprint from "./routes/imprint.tsx";
import * as $index from "./routes/index.tsx";
import * as $privacy from "./routes/privacy.tsx";
import * as $contact from "./islands/contact.tsx";
import * as $language from "./islands/language.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/mail.ts": $api_mail,
    "./routes/imprint.tsx": $imprint,
    "./routes/index.tsx": $index,
    "./routes/privacy.tsx": $privacy,
  },
  islands: {
    "./islands/contact.tsx": $contact,
    "./islands/language.tsx": $language,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
