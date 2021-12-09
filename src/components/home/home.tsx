import Navbar from "../shared/navbar";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Section1 />
      <Section2 />
    </main>
  );
}
