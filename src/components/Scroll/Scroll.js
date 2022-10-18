import React from "react";
import useScroll from "./useScroll";
import "./scroll.css";

export default function Scroll() {
  const scrolling = useScroll();

  const getHeaderClasses = (scrolling) => {
    return scrolling ? "header hide" : "header";
  };

  return (
    <div className={getHeaderClasses(scrolling)}>
      {scrolling ? "true" : "false"}
    </div>
  );
}
