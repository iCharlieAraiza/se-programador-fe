import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Description from "../components/description";
import Characteristics from "../components/characteristics";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Characteristics />
    </>
  );
}
