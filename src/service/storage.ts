export const getItem = (key: string): any => window.localStorage.getItem(key);

export const setItem = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string): void => {
  window.localStorage.removeItem(key);
};
