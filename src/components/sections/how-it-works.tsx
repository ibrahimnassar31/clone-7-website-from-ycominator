"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabsData = [
  {
    id: "persona-creation",
    triggerTitle: "Persona Creation",
    triggerSubtitle: "Data-rich Personas, built from diverse sources",
    contentTitle: "Data-rich Personas, built from diverse sources",
    content:
      "Persona creation starts with data collected at an individual level from multiple channels. Our proprietary behavioural analysis engine then identifies and distils patterns in preferences, motivations, and decision triggers. The result is AI personas that reflect authentic human insights with depth and precision.",
  },
  {
    id: "society-construction",
    triggerTitle: "Society Construction",
    triggerSubtitle: "Modelling how ideas spread through social networks",
    contentTitle: "Modelling how ideas spread through social networks",
    content:
      "When you create a society, we retrieve relevant matches from our database of over 500k personas. We model how individuals influence each other through a Social Network Graph, drawing connections based on shared backgrounds, interests, and past interactions.",
  },
  {
    id: "ai-simulations",
    triggerTitle: "AI-driven Simulations",
    triggerSubtitle: "AI Personas powered by cutting-edge LLMs",
    contentTitle: "AI Personas powered by cutting-edge LLMs",
    content:
      "To initiate a simulation, you select a context - e.g., a social media post or product proposition - and input a corresponding piece of content or idea. We then allow the society to discover and react to this new information. Every simulation utilises hundreds of LLM calls and millions of tokens to reflect the individual and collective behaviors of the personas.",
  },
  {
    id: "result-generation",
    triggerTitle: "Result Generation",
    triggerSubtitle: "Actionable insights from persona behavior",
    contentTitle: "Actionable insights from persona behavior",
    content:
      "By observing how personas respond to inputs, we deliver quantitative and qualitative data points at an aggregated and individual level. Chat to our social intelligence engine - Amos - who knows you, your audience, and your results.",
  },
  {
    id: "ab-testing",
    triggerTitle: "Automatic A/B Testing",
    triggerSubtitle: "Generating and testing message variants automatically",
    contentTitle: "Generating and testing message variants automatically",
    content:
      "When you run a simulation, we take your original message and create multiple versions of it. These are tested alongside your original to find the optimal path. Our variant writers incorporate your tone of voice, as well as best practice techniques for the message context.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-background-primary py-24 sm:py-32"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-gray mb-6">
            How It Works
          </p>
          <h2 className="text-5xl font-medium text-white mb-20 leading-tight">
            From raw data to real understanding
          </h2>
        </div>

        <Tabs defaultValue={tabsData[0].id} className="w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <TabsList className="flex flex-col w-full lg:w-[38%] gap-4 shrink-0 bg-transparent p-0">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="group relative overflow-hidden w-full p-8 text-left border rounded-2xl transition-colors duration-300 border-border-gray hover:border-primary-teal/50 data-[state=active]:border-primary-teal data-[state=active]:bg-background-secondary"
                >
                  <div className="absolute inset-0 z-0 opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300">
                    <Image
                      src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a6768aa59a5cd6db0b3f6_Footer%20noise.avif"
                      alt="Noise background"
                      fill
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xl font-medium text-white">
                      {tab.triggerTitle}
                    </p>
                    <p className="mt-2 text-base text-text-gray">
                      {tab.triggerSubtitle}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="w-full lg:flex-1 relative mt-8 lg:mt-0">
              {tabsData.map((tab) => (
                <TabsContent
                  key={tab.id}
                  value={tab.id}
                  className="bg-background-secondary border border-border-gray rounded-2xl p-10 mt-0 h-full flex flex-col justify-center min-h-[396px]"
                >
                  <div className="relative z-10">
                    <h4 className="text-2xl font-medium text-white mb-4">
                      {tab.contentTitle}
                    </h4>
                    <p className="text-text-gray leading-relaxed">
                      {tab.content}
                    </p>
                  </div>
                </TabsContent>
              ))}
              <div className="absolute -top-12 -right-12 z-0 pointer-events-none">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/images/6870c9a2d73656453d27e027_hiw-stars-2.png?"
                  alt="Decorative stars"
                  width={250}
                  height={207}
                />
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}