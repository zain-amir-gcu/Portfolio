import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Atmosphere from "@/components/Atmosphere";

export default function Home() {
  return (
    <main className="relative bg-[#08080a] min-h-screen">
      <Atmosphere />
      <Navbar />
      <ScrollyCanvas />
      <Projects />
    </main>
  );
}
