import React, { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovering, setHover] = useState();
  const ref = useRef(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hovering];
}

export default function Hover() {
  const [ref, hovering] = useHover();
  return (
    <>
      {hovering && <div>Mouse is over the element</div>}
      <div ref={ref}>
        <div>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
          </ul>
        </div>
      </div>
    </>
  );
}
