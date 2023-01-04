import { useEffect } from "react";

const useDebounce = (eventName, callback, delay) => {
  let timer;

  const debouncedEvent = () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };

  useEffect(() => {
    window.addEventListener(eventName, debouncedEvent);

    return () => window.removeEventListener(eventName, debouncedEvent);
  }, []);
};

export default useDebounce;
