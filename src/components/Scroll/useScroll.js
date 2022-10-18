import { useEffect, useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState({
    scrollTop: 0,
    scrolling: false,
  });

  const onScroll = (e) => {
    setScroll((scroll) => ({
      scrollTop: e.target.documentElement.scrollTop,
      scrolling: e.target.documentElement.scrollTop > scroll.scrollTop,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scroll.scrolling;
}
