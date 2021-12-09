import React from "react";

export interface CurrentElement {
  id: string | null;
  element: HTMLElement | null;
}

export default function useScrollLocation(
  elements: Array<React.RefObject<HTMLElement>>
) {
  const [current, setCurrent] = React.useState<CurrentElement>({
    id: null,
    element: null
  });

  const scrollFn = React.useCallback(() => {
    for (let element of elements) {
      let curr = element.current;
      if (curr === null) continue;

      if (
        curr.offsetTop <= window.scrollY &&
        window.scrollY < curr.offsetTop + curr.offsetHeight
      ) {
        setCurrent({ id: curr.id, element: curr });
        return;
      }
    }
  }, [elements]);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollFn);
    return () => document.removeEventListener("scroll", scrollFn);
  }, [scrollFn]);

  return current;
}
