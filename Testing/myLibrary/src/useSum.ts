import {useState} from "react";

export function useSum() {
  const [ value, setValue] = useState(0);
  return {
    sum: value,
    add: setValue
  };
}
