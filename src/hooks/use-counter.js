import { useState, useEffect } from "react";

// Creating useCounter custom hook
const useCounter = (modifier) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + modifier);
    }, 30);

    return () => clearInterval(interval);
  }, []);
};

export default useCounter;
