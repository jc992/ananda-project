import { useEffect, useState } from "react";

export const useOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  const onScroll = () => {
    const baseline = 1000;
    const opacity = baseline - window.scrollY * 1.7;
    if (opacity < 0) return;
    !window ? setOpacity(1) : setOpacity(opacity / baseline);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => onScroll());
    return () =>
      document.removeEventListener("scroll", () => onScroll());
  }, []);

  return opacity;
};
