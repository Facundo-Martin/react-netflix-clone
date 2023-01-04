import { useEffect } from "react";

const useDebounce = (eventName, callback, delay, stateSetter) => {
  let timer;

  const debouncedEvent = () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };

  useEffect(() => {
    window.addEventListener(eventName, debouncedEvent);

    return () => window.removeEventListener(eventName, debouncedEvent);
  }, [stateSetter]);
};

export default useDebounce;
