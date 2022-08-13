import { inject } from "vue";
import { VueCookies } from "vue-cookies";

const $cookies = inject<VueCookies>("$cookies");

export const getItem = (key: string): void => {
  try {
    return JSON.parse($cookies?.get(key));
  } catch (err) {
    return $cookies?.get(key);
  }
};

export const setItem = (key: string, value: unknown): void => {
  try {
    $cookies?.set(key, JSON.stringify(value));
  } catch (err) {
    $cookies?.set(key, value);
  }
};

export const removeItem = (key: string): void => {
  $cookies?.remove(key);
};

export default { getItem, setItem, removeItem };
