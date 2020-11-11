import { ADDRESS, PATH, PORT } from "./constant";

const getURL = () => {
  return `${ADDRESS}:${PORT}${PATH}`;
};

export default getURL();
