import React from "react";

export default function useYScroll() {
  const [data, setData] = React.useState({
    isScrolled: false,
    scrolled: 0
  });

  const scrollFn = React.useCallback(() => {
    if (window.scrollY === 0) setData({ isScrolled: false, scrolled: 0 });
    else setData({ isScrolled: true, scrolled: window.scrollY });
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollFn);
    return () => document.removeEventListener("scroll", scrollFn);
  }, [scrollFn]);

  return data;
}
