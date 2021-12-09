import React from "react";
import Navbar from "../shared/navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Home() {
  const section1Ref = React.useRef<HTMLElement>(null);
  const section2Ref = React.useRef<HTMLElement>(null);
  const current = useScrollPosition([section1Ref, section2Ref]);

  return (
    <main className="relative">
      <Navbar activeNavId={current.id} />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
    </main>
  );
}
