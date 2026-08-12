import { useCounter } from "../../hooks/useCounter";

export default function Counter({ target, suffix = "" }) {
  const [ref, value] = useCounter(target);
  return (
    <b ref={ref}>
      {value}
      {suffix}
    </b>
  );
}
