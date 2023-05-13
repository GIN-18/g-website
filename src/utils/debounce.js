export function debounce(fn, delay) {
  var timerId = null;
  return function () {
    clearTimeout(timerId);
    if (!timerId) fn.apply(this, arguments);
    timerId = setTimeout(() => (timerId = null), delay);
  };
}

