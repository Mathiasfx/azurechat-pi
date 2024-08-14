import { customAlphabet } from "nanoid";

export const uniqueId = () => {
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 37);
  return nanoid();
};
