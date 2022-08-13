export const getItem = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return window.localStorage.getItem(key);
  }
};

export const setItem = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    window.localStorage.setItem(key, value);
  }
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export default { getItem, setItem, removeItem, clearLocalStorage };
