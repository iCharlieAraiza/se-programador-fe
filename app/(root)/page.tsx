import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Description from "./components/description";
import Characteristics from "./components/characteristics";

export default function Home() {
  return (
    <>
      <Description />
      <Characteristics/>
    </>
  );
}
