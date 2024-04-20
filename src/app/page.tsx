import { Hero } from "@/components/hero/Hero";
import { Flow } from "@/components/sections/Flow";
import { Grow } from "@/components/sections/Grow";
import { Users } from "@/components/sections/Users";
import Lenis from "@studio-freight/lenis/types";
import { Build } from "@/components/sections/Build";

export default function Home() {

  
  return (
    <main className="flex flex-col">
      <div className="lg:h-[200vh] h-[150vh]">
      <Hero />
      </div>
      <div className="">
        <Grow />
        <Flow />
        <Users />
        <Build />
      </div>
    </main>
  );
}
