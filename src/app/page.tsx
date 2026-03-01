import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Product } from "@/components/Product";
import { Approach } from "@/components/Approach";
import { Curriculum } from "@/components/Curriculum";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Product />
      <Approach />
      <Curriculum />
      <Roadmap />
      <Contact />
    </>
  );
}
