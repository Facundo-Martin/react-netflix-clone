import { useEffect } from "react";

const useDebouncedEvent = (eventName, callback, delay, stateSetter) => {
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

export default useDebouncedEvent;
