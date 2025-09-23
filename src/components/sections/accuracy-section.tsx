"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


type Row = {
  name: string;
  logo: string;
  value: number; // 0-100
  isWinner?: boolean;
};

const chartData: Row[] = [
  {
    name: "Artificial Societies",
    logo:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b617c87270569bd0e4406_Brand-19.svg?",
    value: 82,
    isWinner: true,
  },
  {
    name: "Claude 3.7 Sonnet",
    logo:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea5a81cc66e66fe1f9_claude-20.svg?",
    value: 64,
  },
  {
    name: "Gemini 1.5 pro",
    logo:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea055df95b7654c17d_gemini-21.svg?",
    value: 63,
  },
  {
    name: "GPT-4o",
    logo:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea3228e04108ab7adb_chatgpt-22.svg?",
    value: 62,
  },
  {
    name: "GPT-3.5 Turbo",
    logo:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea3228e04108ab7adb_chatgpt-22.svg?",
    value: 61,
  },
];


const AccuracySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // decor
  const tlBlobRef = useRef<HTMLDivElement | null>(null);
  const shapesRef = useRef<HTMLDivElement | null>(null);

  // header
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);

  // chart wrapper + row parts
  const chartWrapRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const barRefs = useRef<Array<HTMLDivElement | null>>([]);
  const shineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const labelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const valueRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      if (!prefersReducedMotion) {
        if (tlBlobRef.current) {
          gsap.to(tlBlobRef.current, {
            x: -40,
            y: -40,
            opacity: 0.6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
        if (shapesRef.current) {
          gsap.to(shapesRef.current, {
            x: 60,
            y: -20,
            rotate: 5,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      if (headingRef.current && subRef.current) {
        if (!prefersReducedMotion) {
          gsap.from([headingRef.current, subRef.current], {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          });
        } else {
          gsap.set([headingRef.current, subRef.current], { y: 0, opacity: 1 });
        }
      }

      if (chartWrapRef.current) {
        if (!prefersReducedMotion) {
          gsap.from(chartWrapRef.current, {
            opacity: 0,
            scale: 0.985,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: chartWrapRef.current, start: "top 85%" },
          });
        }

        const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!prefersReducedMotion) {
          gsap.from(rows, {
            y: 18,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: { trigger: chartWrapRef.current, start: "top 82%" },
          });
        } else {
          gsap.set(rows, { y: 0, opacity: 1 });
        }

        const bars = barRefs.current.filter(Boolean) as HTMLDivElement[];
        const shines = shineRefs.current.filter(Boolean) as HTMLDivElement[];
        const values = valueRefs.current.filter(Boolean) as HTMLSpanElement[];

        bars.forEach((bar, i) => {
          const widthTarget = bar.dataset.w || "0";
          const w = parseFloat(widthTarget);

          gsap.set(bar, { width: "0%" });

          const tl = gsap.timeline({
            scrollTrigger: { trigger: bar, start: "top 90%", toggleActions: "play none none none" },
            defaults: { ease: "power2.out" },
          });

          tl.to(bar, { width: `${w}%`, duration: 0.8 });

          if (shines[i]) {
            tl.fromTo(
              shines[i],
              { xPercent: -100, opacity: 0 },
              { xPercent: 120, opacity: 1, duration: 0.9, ease: "power3.out" },
              "-=0.55"
            );
            tl.to(shines[i], { opacity: 0, duration: 0.2 }, "<");
          }

          const end = Number(values[i]?.dataset.value || 0);
          if (values[i]) {
            const obj = { n: 0 };
            tl.to(
              obj,
              {
                n: end,
                duration: 0.8,
                ease: "power2.out",
                onUpdate: () => {
                  if (!values[i]) return;
                  values[i].textContent = `${Math.round(obj.n)}%`;
                },
              },
              "<"
            );
          }
        });

        const winnerIdx = chartData.findIndex((r) => r.isWinner);
        if (winnerIdx >= 0 && bars[winnerIdx]) {
          const winnerBar = bars[winnerIdx];
          gsap.to(winnerBar, {
            boxShadow: "0 0 0 0 rgba(255,255,255,0.0)",
            duration: 0.001,
          });
          gsap.fromTo(
            winnerBar,
            { filter: "brightness(1)" },
            {
              filter: "brightness(1.15)",
              repeat: -1,
              yoyo: true,
              duration: 1.6,
              ease: "sine.inOut",
            }
          );
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="accuracy"
      ref={sectionRef}
      className="relative bg-background-primary py-[96px] sm:py-[120px] overflow-hidden"
    >
      <div
        ref={tlBlobRef}
        className="absolute -top-10 -left-10 w-[100px] h-[100px] opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b5f4d67b6c78e6f7c8995_chart%20tl.avif"
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
          unoptimized
          priority={false}
        />
      </div>

      <div
        ref={shapesRef}
        className="absolute top-1/2 translate-y-1/2 right-50 translate-x-[22px] w-[400px] h-auto z-0 pointer-events-none lg:block hidden"
        aria-hidden="true"
      >
        <Image
          src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b68588b03dcd15d4354ba_dfa9221e68eae22587c0ef24650db8e5_Container.avif"
          alt=""
          width={200}
          height={200}
          className="w-full h-full"
          unoptimized
          priority={false}
        />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[660px]">
          <h2
            ref={headingRef}
            className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] font-semibold text-text-white tracking-tight"
          >
            <span className="text-text-white/90">Artificial Societies is </span>
            <span className="text-primary-teal">30%</span>
            <span className="text-text-white/90"> more accurate at predicting engagement than standard LLMs.</span>
          </h2>
          <p ref={subRef} className="mt-4 sm:mt-6 text-body text-text-gray">
            Success rate at picking winners from pairs of LinkedIn posts
          </p>
        </div>

        <div
          ref={chartWrapRef}
          className="mt-10 sm:mt-12 p-5 sm:p-8 lg:p-10 border border-border-gray rounded-3xl max-w-3xl
                     bg-cover bg-center bg-no-repeat
                     bg-[url('https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b63ebc4a5891bbc89f7e3_Chart%20Background.avif')]
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur"
        >
          <div className="space-y-3.5 sm:space-y-4">
            {chartData.map((item, idx) => (
              <div
                key={item.name}
                ref={(el) => { rowRefs.current[idx] = el; }}
                className="grid grid-cols-[1fr_auto] items-center gap-3 sm:gap-4 group"
              >
                <div className="relative h-12 sm:h-[52px] rounded-xl bg-chart-background/70 border border-border-gray/60 overflow-hidden">
                  <div
                    ref={(el) => { barRefs.current[idx] = el; }}
                    data-w={item.value}
                    className={`absolute top-0 left-0 h-full rounded-xl will-change-transform ${
                      item.isWinner
                        ? "bg-gradient-to-r from-white via-white to-white"
                        : "bg-[linear-gradient(90deg,rgba(80,80,80,0.9),rgba(100,100,100,0.9))]"
                    }`}
                    style={{ width: "0%" }}
                  />
                  <div
                    ref={(el) => { shineRefs.current[idx] = el; }}
                    className="pointer-events-none absolute top-0 bottom-0 w-[30%] bg-[linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,0.35),rgba(255,255,255,0))] mix-blend-screen"
                    style={{ left: 0, opacity: 0 }}
                    aria-hidden="true"
                  />
                  <div
                    ref={(el) => { labelRefs.current[idx] = el; }}
                    className="absolute inset-0 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 z-10"
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={22}
                      height={22}
                      className={`${item.isWinner ? "brightness-0" : "brightness-110"} select-none`}
                      unoptimized
                    />
                    <p
                      className={`text-[14px] sm:text-[15px] font-medium ${
                        item.isWinner ? "text-black" : "text-white"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
                {/* value */}
                <span
                  ref={(el) => { valueRefs.current[idx] = el; }}
                  data-value={item.value}
                  className="w-12 text-right text-sm sm:text-base font-semibold text-white/90"
                >
                  0%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 max-w-[660px]">
          <p className="text-body text-text-gray">
            By using real data to model individuals and their interactions, Artificial Societies can predict social outcomes
            at far greater accuracy than standard LLMs.
          </p>
          <a
            href="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/687e337f4bccb337e867a32c_Artificial%20Societies%20Evaluation.pdf"
            className="inline-flex items-center gap-2 mt-4 text-primary-teal hover:underline font-medium text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Report
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccuracySection;
