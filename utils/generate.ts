const encoder = new TextEncoder();

const constants = {
  date: "11111111",
  service: "ses",
  terminal: "aws4_request",
  message: "SendRawEmail",
  version: new Int8Array([0x04]),
  region: "eu-central-1",
};

const genKey = async (keyData: ArrayBuffer) =>
  await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

const genSignature = async (keyData: ArrayBuffer, signature: string) =>
  await crypto.subtle.sign(
    "HMAC",
    await genKey(keyData),
    encoder.encode(signature),
  );

const concatBuffer = (buffer1: ArrayBuffer, buffer2: ArrayBuffer) => {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
};

const generate = async (key: string) => {
  let signature = await genSignature(
    encoder.encode(`AWS4${key}`),
    constants.date,
  );
  signature = await genSignature(signature, constants.region);
  signature = await genSignature(signature, constants.service);
  signature = await genSignature(signature, constants.terminal);
  signature = await genSignature(signature, constants.message);
  return btoa(
    String.fromCharCode(
      ...new Uint8Array(concatBuffer(constants.version, signature)),
    ),
  );
};

export { generate };
