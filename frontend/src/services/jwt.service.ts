import { getItem, setItem, removeItem } from "./cookie.service";
const ID_TOKEN_KEY = "id_token";

export const getToken = (): void => getItem(ID_TOKEN_KEY);

export const saveToken = (token: string): void => {
  setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = (): void => {
  removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
