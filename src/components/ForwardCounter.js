import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(0.03);

  return <Card>{counter.toFixed(2)}</Card>;
};

export default ForwardCounter;
