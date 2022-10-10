import React from "react";
import observer from "./Observerable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  console.log(`Toast: ${data}`);
}

observer.subscribe(logger);
observer.subscribe(toastify);

export default function ObserverApp() {
  function handleClick() {
    observer.notify("User clicked button");
  }

  function handleToggle() {
    observer.notify("User toast...");
  }

  return (
    <div>
      <button onClick={handleClick}>Notify click</button>
      <button onClick={handleToggle}>Notify Toggle</button>
    </div>
  );
}
