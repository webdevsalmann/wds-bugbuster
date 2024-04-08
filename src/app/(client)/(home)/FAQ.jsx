import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    id: "faq1",
    question: "How often should I schedule pest control services?",
    answer: "The frequency of pest control services depends on factors such as the type of pest, severity of infestation, and environmental conditions. As a general guideline, we recommend scheduling regular pest inspections and treatments every 3 to 6 months to maintain a pest-free environment."
  },
  {
    id: "faq2",
    question: "Are your pest control treatments safe for children and pets?",
    answer: "Yes, our pest control treatments are formulated to be safe for children and pets when used according to the manufacturer's instructions. We take extra precautions to minimize any risks to your family and pets while effectively eliminating pests from your home or business."
  },
  {
    id: "faq3",
    question: "What pests do your services cover?",
    answer: "Our comprehensive pest control services cover a wide range of common pests, including ants, cockroaches, spiders, rodents, termites, and more. Whether you're dealing with indoor pests or outdoor invaders, BugBusters has the expertise and solutions to address your pest control needs."
  },
  {
    id: "faq4",
    question: "How long does it take to see results after pest treatment?",
    answer: "The time it takes to see results after pest treatment can vary depending on factors such as the type of pest, extent of infestation, and treatment methods used. In many cases, you may notice a significant reduction in pest activity within a few days to a week after treatment."
  },
  {
    id: "faq5",
    question: "Do you offer warranties or guarantees for your pest control services?",
    answer: "Yes, we stand behind the quality of our pest control services and offer warranties or guarantees to ensure your satisfaction. If pests return between scheduled treatments, simply contact us, and we'll promptly address the issue at no additional cost."
  }
];

export default function FAQ() {
  return (
    <section className="bg-primary text-neutral-50">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="flex-center flex-col md:col-span-3">
          <div>
            <h2>Frequently Asked Questions</h2>
          </div>

          {/* FAQS */}
          <Accordion type="single" collapsible>
            {faqData.map((item, i) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>

        <div className="relative p-6 w-full bg-contain flex-center md:col-span-2">
          <div className="hero-blob "></div>
          <Image
            className="relative aspect-[4/5] w-full object-cover object-center rounded text-foreground"
            width={400}
            height={500}
            src="/images/common/2.jpg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  )
}
