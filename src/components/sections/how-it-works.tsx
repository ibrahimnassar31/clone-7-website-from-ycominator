"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

type TabData = {
  id: string;
  triggerTitle: string;
  triggerSubtitle: string;
  contentTitle: string;
  content: string;
};

const tabsData: TabData[] = [
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
      "To initiate a simulation, you select a context—e.g., a social media post or product proposition—and input a corresponding piece of content or idea. We then allow the society to discover and react to this new information. Every simulation utilises hundreds of LLM calls and millions of tokens to reflect the individual and collective behaviors of the personas.",
  },
  {
    id: "result-generation",
    triggerTitle: "Result Generation",
    triggerSubtitle: "Actionable insights from persona behavior",
    contentTitle: "Actionable insights from persona behavior",
    content:
      "By observing how personas respond to inputs, we deliver quantitative and qualitative data points at an aggregated and individual level. Chat to our social intelligence engine—Amos—who knows you, your audience, and your results.",
  },
  {
    id: "ab-testing",
    triggerTitle: "Automatic A/B Testing",
    triggerSubtitle: "Generating and testing message variants automatically",
    contentTitle: "Generating and testing message variants automatically",
    content:
      "When you run a simulation, we take your original message and create multiple versions of it. These are tested alongside your original to find the optimal path. Our variant writers incorporate your tone of voice, as well as best practice techniques for the message context.",
  },
];

export default function HowItWorks(): React.ReactElement {
  const [active, setActive] = useState<string>(tabsData[0].id);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const quickX = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickY = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickRX = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickRY = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);

  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const onEnter = useCallback((i: number) => {
    const el = triggerRefs.current[i];
    if (!el) return;
    gsap.to(el, { boxShadow: "0 12px 28px rgba(0,0,0,0.25)", duration: 0.3, ease: "power3.out" });
  }, []);

  const onMove = useCallback((i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const el = triggerRefs.current[i];
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    quickRX.current[i]?.(py * -6);
    quickRY.current[i]?.(px * 8);
    quickX.current[i]?.(px * 5);
    quickY.current[i]?.(py * 5);
  }, []);

  const onLeave = useCallback((i: number) => {
    const el = triggerRefs.current[i];
    if (!el) return;
    gsap.to(el, { boxShadow: "none", duration: 0.3, ease: "power3.out" });
    quickRX.current[i]?.(0);
    quickRY.current[i]?.(0);
    quickX.current[i]?.(0);
    quickY.current[i]?.(0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      if (!prefersReducedMotion) {
        if (taglineRef.current) {
          gsap.from(taglineRef.current, {
            y: -24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          });
        }
        if (headingRef.current) {
          const words = headingRef.current.querySelectorAll<HTMLElement>(".word");
          gsap.from(words, {
            y: 64,
            skewY: 8,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: { each: 0.06 },
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          });
        }
      } else {
        gsap.set([taglineRef.current, headingRef.current], { opacity: 1, y: 0 });
      }

      if (tabsListRef.current && !prefersReducedMotion) {
        const items = tabsListRef.current.querySelectorAll<HTMLButtonElement>("[data-trigger]");
        gsap.from(items, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: tabsListRef.current, start: "top 85%" },
        });
      }

      const stars = sectionRef.current.querySelector<HTMLElement>("[data-stars]");
      if (stars && !prefersReducedMotion) {
        gsap.to(stars, {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    triggerRefs.current.forEach((el, i) => {
      if (!el) return;
      quickX.current[i] = gsap.quickSetter(el, "x", "px");
      quickY.current[i] = gsap.quickSetter(el, "y", "px");
      quickRX.current[i] = gsap.quickSetter(el, "rotationX", "deg");
      quickRY.current[i] = gsap.quickSetter(el, "rotationY", "deg");
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [prefersReducedMotion]);

  const handleTabChange = useCallback(
    (next: string) => {
      const list = tabsListRef.current;
      const indicator = indicatorRef.current;
      const nextIdx = tabsData.findIndex((t) => t.id === next);

      if (list && indicator) {
        const state = Flip.getState(indicator);
        const nextBtn = triggerRefs.current[nextIdx];
        if (nextBtn) {
          const rect = nextBtn.getBoundingClientRect();
          const listRect = list.getBoundingClientRect();

          gsap.set(indicator, {
            width: rect.width,
            height: rect.height,
            x: rect.left - listRect.left,
            y: rect.top - listRect.top,
          });

          Flip.from(state, {
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.fromTo(
            indicator,
            { opacity: 0.6 },
            { opacity: 1, duration: 0.35, ease: "power1.out" }
          );
        }
      }

      const nextContent = contentRefs.current[next];
      if (nextContent) {
        const lines = nextContent.querySelectorAll<HTMLElement>("[data-line]");
        gsap.fromTo(
          nextContent,
          { y: 16, opacity: 0, scale: 0.995 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.from(lines, {
          y: 18,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.05,
        });

        const sweep = nextContent.querySelector<HTMLElement>("[data-noise]");
        if (sweep) {
          gsap.fromTo(
            sweep,
            { opacity: 0, clipPath: "inset(0 100% 0 0 round 16px)" },
            {
              opacity: 1,
              clipPath: "inset(0 0% 0 0 round 16px)",
              duration: 0.65,
              ease: "power3.out",
            }
          );
          gsap.to(sweep, { opacity: 0.4, duration: 0.6, delay: 0.4, ease: "power1.out" });
        }
      }

      setActive(next);
    },
    []
  );

  useEffect(() => {
    const list = tabsListRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const positionToActive = () => {
      const idx = tabsData.findIndex((t) => t.id === active);
      const btn = triggerRefs.current[idx];
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      gsap.set(indicator, {
        width: rect.width,
        height: rect.height,
        x: rect.left - listRect.left,
        y: rect.top - listRect.top,
      });
    };

    positionToActive();
    const onResize = () => positionToActive();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  return (
   <section
  id="how-it-works"
  ref={sectionRef}
  className="relative bg-background-primary py-20 sm:py-24 lg:py-32 overflow-hidden"
>
  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div ref={headingWrapRef} className="text-center pb-16 sm:pb-20">
      <p
        ref={taglineRef}
        className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-text-gray mb-4 sm:mb-5"
      >
        How It Works
      </p>
      <h2
        ref={headingRef}
        className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-white leading-[1.15] tracking-tight"
      >
        <span className="word inline-block mr-2">From</span>
        <span className="word inline-block mr-2">raw</span>
        <span className="word inline-block mr-2">data</span>
        <span className="word inline-block mr-2">to</span>
        <span className="word inline-block">real</span>{" "}
        <span className="word inline-block">understanding</span>
      </h2>
    </div>

    <Tabs value={active} onValueChange={handleTabChange} className="w-full">
      <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="col-span-12 lg:col-span-5 relative">
          <TabsList
            ref={tabsListRef}
            aria-label="Steps"
            className="
              relative p-0 bg-transparent
              flex lg:block
              gap-4 sm:gap-5
              overflow-x-auto lg:overflow-visible
              snap-x snap-mandatory lg:snap-none
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div
              ref={indicatorRef}
              aria-hidden="true"
              className="absolute rounded-2xl border border-primary-teal/40 bg-background-secondary/70 backdrop-blur-sm will-change-transform"
              style={{ zIndex: 0 }}
            />

            {tabsData.map((tab, i) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                data-trigger
                onMouseEnter={() => onEnter(i)}
                onMouseMove={(e) => onMove(i, e)}
                onMouseLeave={() => onLeave(i)}
                className={`
                  group relative overflow-hidden text-left
                  border border-border-gray rounded-2xl
                  transition-colors duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal/60
                  data-[state=active]:text-white
                  min-w-[240px] sm:min-w-[260px] lg:min-w-0
                  px-8 py-8 sm:px-7 sm:py-7 lg:px-8 lg:py-8
                  snap-start mb-8
                  ${i === 0 ? "ml-1 lg:ml-0" : ""}
                `}
                style={
                  {
                    transformStyle: "preserve-3d",
                    transform: "perspective(700px)",
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 z-0 opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a6768aa59a5cd6db0b3f6_Footer%20noise.avif"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl opacity-40"
                    priority={false}
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                    {tab.triggerTitle}
                  </p>
                  <p className="mt-1 text-[12px] sm:text-sm text-text-gray">
                    {tab.triggerSubtitle}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="hidden lg:block absolute -top-8 right-0 h-8 w-24 bg-gradient-to-l from-background-primary to-transparent pointer-events-none" />

          <div className="lg:hidden mt-5 h-px w-full bg-gradient-to-r from-transparent via-border-gray to-transparent" />
        </div>

        <div className="col-span-12 lg:col-span-7">
          {tabsData.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              forceMount
              className="data-[state=inactive]:hidden mt-0"
            >
              <div
                ref={(el) => {
                  contentRefs.current[tab.id] = el;
                }}
                className="
                  relative rounded-2xl border border-border-gray
                  bg-background-secondary/80 backdrop-blur
                  p-5 sm:p-7 md:p-8 lg:p-10
                  min-h-[320px] sm:min-h-[360px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  "
              >
                <div
                  data-noise
                  className="pointer-events-none absolute inset-0 opacity-40 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(200px 180px at 15% 18%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%)",
                  }}
                />

                <div className="relative z-10">
                  <h4
                    data-line
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4"
                  >
                    {tab.contentTitle}
                  </h4>
                  <p
                    data-line
                    className="text-[15px] sm:text-base text-text-gray leading-relaxed"
                  >
                    {tab.content}
                  </p>
                </div>

                <div
                  data-stars
                  className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 z-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/images/6870c9a2d73656453d27e027_hiw-stars-2.png"
                    alt=""
                    width={200}
                    height={160}
                    priority={false}
                  />
                </div>

                <div className="absolute left-5 right-5 bottom-5 h-[2px] bg-gradient-to-r from-primary-teal via-primary-purple to-primary-orange rounded-full opacity-60" />
              </div>
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  </div>
</section>


  );
}
