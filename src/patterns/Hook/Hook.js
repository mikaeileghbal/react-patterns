import React, { useEffect, useState } from "react";
import useKeyPress from "./useKeyPress";

export default function Hook() {
  const [input, setInput] = useState("");

  const pressQ = useKeyPress("q");

  useEffect(() => {
    console.log("The user pressed Q");
  }, [pressQ]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
