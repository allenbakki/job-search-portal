// debounce.js
export const debounce = (func, delay) => {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
