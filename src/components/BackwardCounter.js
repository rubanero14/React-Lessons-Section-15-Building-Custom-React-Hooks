import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(-0.03);

  return <Card>{counter.toFixed(2)}</Card>;
};

export default BackwardCounter;
