import { customAlphabet } from "nanoid";

export const uniqueId = () => {
  const alphabet =
    "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 37);
  return nanoid();
};
