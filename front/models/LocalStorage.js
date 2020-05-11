export default function LocalStorage(key, initialValue) {
  return {
    get: () => {
      return JSON.parse(
        localStorage.getItem(key) || JSON.stringify(initialValue)
      );
    },
    set: (data) => localStorage.setItem(key, JSON.stringify(data)),
  };
}
