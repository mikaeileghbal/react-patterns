import React from "react";
import { personProxy } from "./PersonProxy";

export default function ProxyTest() {
  const name = personProxy.name;
  const last = personProxy.lastName;
  personProxy.age = 45;
  personProxy.name = "1";
  return (
    <div>
      <h1>Proxy test</h1>
    </div>
  );
}
