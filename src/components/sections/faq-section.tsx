"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const faqItems = [
  {
    value: "item-1",
    question: "What is an Artificial Society?",
    answer:
      "An Artificial Society is a simulated environment populated by AI personas that represent a target audience. It allows for rapid testing of content, ideas, and products to predict real-world reception.",
  },
  {
    value: "item-2",
    question: "How do credits work?",
    answer:
      "Each simulation you run consumes credits. You receive a set number of credits to start, and can get more by upgrading your plan. This system allows you to pay only for the experiments you conduct.",
  },
  {
    value: "item-3",
    question: "What kinds of experiments can I run?",
    answer:
      "You can test various forms of content, including blog posts, social media updates, product feature ideas, marketing copy, and brand messaging to see how your simulated audience reacts.",
  },
  {
    value: "item-4",
    question: "What’s the difference between target and personal societies?",
    answer:
      "Target societies are built by describing your ideal audience in plain English. Personal societies are created based on your own social media interactions, providing a simulation of your existing network.",
  },
  {
    value: "item-5",
    question: "How many personas are in a society?",
    answer:
      "The number of personas in a society can vary. Depending on the complexity of the target audience and the specifics of the simulation, a society can be composed of dozens to hundreds of AI personas.",
  },
];

const networkNodes = [
  // Large nodes
  { top: "20%", left: "15%", size: "w-10 h-10", color: "bg-primary-blue" },
  { top: "10%", left: "70%", size: "w-10 h-10", color: "bg-primary-purple" },
  { top: "65%", left: "80%", size: "w-12 h-12", color: "bg-primary-teal" },
  { top: "80%", left: "20%", size: "w-10 h-10", color: "bg-primary-orange" },
  { top: "45%", left: "5%", size: "w-8 h-8", color: "bg-accent-orange" },

  // Medium nodes
  { top: "5%", left: "30%", size: "w-6 h-6", color: "bg-primary-teal" },
  { top: "30%", left: "90%", size: "w-8 h-8", color: "bg-primary-blue" },
  { top: "50%", left: "65%", size: "w-6 h-6", color: "bg-primary-orange" },
  { top: "85%", left: "55%", size: "w-8 h-8", color: "bg-primary-purple" },
  { top: "55%", left: "30%", size: "w-6 h-6", color: "bg-primary-blue" },
  
  // Small nodes
  { top: "40%", left: "40%", size: "w-4 h-4", color: "bg-primary-purple" },
  { top: "18%", left: "50%", size: "w-5 h-5", color: "bg-accent-orange" },
  { top: "60%", left: "10%", size: "w-4 h-4", color: "bg-primary-teal" },
  { top: "35%", left: "75%", size: "w-5 h-5", color: "bg-primary-orange" },
  { top: "75%", left: "40%", size: "w-4 h-4", color: "bg-primary-blue" },
  { top: "90%", left: "5%", size: "w-5 h-5", color: "bg-primary-purple" },
  { top: "25%", left: "60%", size: "w-4 h-4", color: "bg-accent-orange" },
];

const networkLines = [
  { top: "25%", left: "20%", width: "52%", transform: "rotate(-4.5deg)" },
  { top: "15%", left: "33%", width: "39%", transform: "rotate(0deg)" },
  { top: "25.5%", left: "18.5%", width: "23%", transform: "rotate(78deg)" },
  { top: "44%", left: "41.5%", width: "35%", transform: "rotate(18deg)" },
  { top: "71%", left: "43%", width: "39%", transform: "rotate(-12deg)" },
  { top: "85%", left: "25%", width: "31%", transform: "rotate(-4deg)" },
  { top: "59%", left: "12%", width: "19%", transform: "rotate(-38deg)" },
  { top: "49%", left: "9%", width: "23%", transform: "rotate(65deg)" },
  { top: "35%", left: "78%", width: "13%", transform: "rotate(90deg)" },
];


export default function FaqSection() {
  return (
    <section id="faq" className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-section-heading text-text-white mb-6">
              We simulated what questions you need answering
            </h2>
            <p className="text-body text-text-gray mb-10 max-w-md">
              Explore quick solutions to common questions. Need more? Feel free to contact our{' '}
              <a href="mailto:support@societies.io?subject=Support%20request%20from%20Artificial%20Societies%20website" className="text-primary-teal hover:underline">
                support team
              </a>
              .
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem value={item.value} key={item.value} className="border-b border-border-gray">
                  <AccordionTrigger className="text-left text-2xl font-medium text-text-white hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-text-gray pb-6 pr-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:w-1/2 mt-20 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[500px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-transparent border border-border-gray rounded-full px-5 py-1.5 text-sm text-text-gray z-10">
                FAQ
              </div>
              
              {networkLines.map((line, index) => (
                <div
                  key={`line-${index}`}
                  className="absolute h-px bg-border-gray/50"
                  style={{...line}}
                />
              ))}
              
              {networkNodes.map((node, index) => (
                <div
                  key={`node-${index}`}
                  className={`absolute rounded-full ${node.color} ${node.size}`}
                  style={{ top: node.top, left: node.left }}
                />
              ))}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-secondary/80 border border-border-gray rounded-xl p-4 shadow-2xl w-[340px] z-20 backdrop-blur-sm">
                <div className="flex justify-end mb-2">
                  <X className="w-4 h-4 text-text-gray" />
                </div>
                <div className="border border-primary-teal rounded-lg p-4 mb-4">
                  <p className="text-sm text-text-gray leading-relaxed">
                    We just secured $5.3M to build AI-native tools that help European startups simulate product-market fit before writing a single line of code. Let’s build smarter.
                  </p>
                </div>
                <Button variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium py-6">
                  <span className="mr-2">Simulate Post</span>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}