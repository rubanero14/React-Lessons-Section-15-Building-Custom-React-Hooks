import { useState, useEffect } from "react";

import Card from "./Card";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 0.03);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter.toFixed(2)}</Card>;
};

export default ForwardCounter;
