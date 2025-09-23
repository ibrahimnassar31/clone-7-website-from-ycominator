"use client";

import React, { useEffect, useRef, useCallback } from "react";
import type { CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseCase = {
  category: string;
  title: string;
  description: string;
  colorClass: string;
};

const useCasesData: UseCase[] = [
  { category: "PR & Comms", title: "Craft Narratives", description: "Test different communication strategies to deliver the right reaction", colorClass: "text-primary-teal" },
  { category: "Product", title: "Decide Features", description: "Test how your target customers react to product ideas and new features", colorClass: "text-primary-blue" },
  { category: "Branding", title: "Stand Out", description: "Test how different brand and voice ideas resonate with your ideal buyer.", colorClass: "text-primary-purple" },
  { category: "Marketing", title: "Generate Leads", description: "Test marketing content in a simulation of your target customers", colorClass: "text-primary-orange" },
  { category: "Social Media", title: "Make Content", description: "Test social content in simulations of your network and audience", colorClass: "text-accent-orange" },
  { category: "Journalism", title: "Capture Attention", description: "Test headlines, thumbnails, and article content to maximise reader attention", colorClass: "text-primary-blue" },
];

const UseCasesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // RAIL (one DOM that works vertical on small, horizontal pinned on lg)
  const railOuterRef = useRef<HTMLDivElement | null>(null);
  const railInnerRef = useRef<HTMLDivElement | null>(null);

  // Cards + parts
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const catRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const descRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Hover quick setters
  const quickX = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickY = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickRX = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);
  const quickRY = useRef<Array<ReturnType<typeof gsap.quickSetter> | null>>([]);

  const handleEnter = useCallback((idx: number) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    gsap.to(el, { boxShadow: "0 22px 60px rgba(0,0,0,0.28)", duration: 0.35, ease: "power3.out" });
  }, []);

  const handleMove = useCallback((idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = x / r.width - 0.5;
    const py = y / r.height - 0.5;
    quickRX.current[idx]?.(py * -8);
    quickRY.current[idx]?.(px * 10);
    quickX.current[idx]?.(px * 6);
    quickY.current[idx]?.(py * 6);
  }, []);

  const handleLeave = useCallback((idx: number) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    gsap.to(el, { boxShadow: "none", duration: 0.35, ease: "power3.out" });
    quickRX.current[idx]?.(0);
    quickRY.current[idx]?.(0);
    quickX.current[idx]?.(0);
    quickY.current[idx]?.(0);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      /* ===== Top progress bar tied to section ===== */
      if (progressBarRef.current && sectionRef.current && !prefersReducedMotion) {
        gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => gsap.to(progressBarRef.current, { scaleX: self.progress, duration: 0.15, ease: "none" }),
        });
      }

      /* ===== Header reveal ===== */
      if (taglineRef.current && !prefersReducedMotion) {
        gsap.from(taglineRef.current, {
          y: -24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        });
      }

      if (headingRef.current) {
        const words = Array.from(headingRef.current.querySelectorAll<HTMLElement>(".word"));
        if (!prefersReducedMotion) {
          gsap.from(words, {
            y: 64,
            skewY: 8,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: { each: 0.06, from: "start" },
            scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
          });
        } else {
          gsap.set(words, { y: 0, skewY: 0, opacity: 1 });
        }
      }

      /* ===== Card entrance & content stagger (vertical flow) ===== */
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const cats = catRefs.current.filter(Boolean) as HTMLDivElement[];
      const titles = titleRefs.current.filter(Boolean) as HTMLDivElement[];
      const descs = descRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!prefersReducedMotion) {
        cards.forEach((card, i) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none none" },
          });
          const dir = i % 2 === 0 ? -56 : 56;
          tl.from(card, { y: dir, opacity: 0, rotate: i % 2 === 0 ? -2 : 2, duration: 0.8, ease: "power3.out" });
          tl.from([cats[i], titles[i], descs[i]].filter(Boolean), {
            y: 18,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: { each: 0.08 },
          }, "-=0.35");
        });
      } else {
        gsap.set(cards, { y: 0, opacity: 1, rotate: 0 });
        gsap.set([cats, titles, descs].flat(), { y: 0, opacity: 1 });
      }

      /* ===== Horizontal pinned rail on desktop ===== */
      mm.add("(min-width: 1024px)", () => {
        if (!railOuterRef.current || !railInnerRef.current || prefersReducedMotion) return;

        const outer = railOuterRef.current;
        const inner = railInnerRef.current;

        // Set up widths: each card is fixed width with gaps via Tailwind; we animate the inner rail.
        gsap.set(inner, { x: 0 });

        const maxX = () => Math.max(0, inner.scrollWidth - outer.clientWidth);

        const tween = gsap.to(inner, {
          x: () => -maxX(),
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top top+=120",
            end: () => `+=${maxX()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            snap: {
              snapTo: (value) => {
                // snap to nearest card index (progress-based)
                const steps = useCasesData.length - 1;
                return gsap.utils.snap(1 / steps, value);
              },
              duration: 0.2,
              ease: "power1.out",
            },
            invalidateOnRefresh: true,
          },
        });

        // As each card hits center, micro-reveal text (containerAnimation pattern)
        const items = Array.from(inner.querySelectorAll<HTMLDivElement>("[data-card]"));
        items.forEach((item) => {
          const catEl = item.querySelector<HTMLElement>("[data-cat]");
          const ttlEl = item.querySelector<HTMLElement>("[data-ttl]");
          const dscEl = item.querySelector<HTMLElement>("[data-dsc]");
          if (!catEl || !ttlEl || !dscEl) return;

          gsap.from([catEl, ttlEl, dscEl], {
            opacity: 0.25,
            y: 18,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              containerAnimation: tween,
              trigger: item,
              start: "left center",
              end: "right center",
              toggleActions: "play reverse play reverse",
            },
          });
        });

        return () => {
          // kill only the containerAnimation/pin triggers from this block
          ScrollTrigger.getAll().forEach((st) => {
            if (st.vars?.pin === true || st.vars?.containerAnimation) st.kill();
          });
        };
      });

      /* ===== Background parallax for section ===== */
      if (sectionRef.current && !prefersReducedMotion) {
        gsap.to(sectionRef.current, {
          backgroundPosition: "50% 100%",
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }, sectionRef);

    // Prepare quickSetters for hover after mount
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      quickX.current[i] = gsap.quickSetter(c, "x", "px");
      quickY.current[i] = gsap.quickSetter(c, "y", "px");
      quickRX.current[i] = gsap.quickSetter(c, "rotationX", "deg");
      quickRY.current[i] = gsap.quickSetter(c, "rotationY", "deg");
    });

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="relative bg-background-primary py-[120px] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(1200px 500px at 10% 0%, rgba(255,255,255,0.05), transparent)",
      }}
    >
      {/* Top progress bar */}
      <div
        ref={progressBarRef}
        className="fixed left-0 top-0 h-[3px] w-full bg-gradient-to-r from-primary-teal via-primary-purple to-primary-orange origin-left z-40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <p ref={taglineRef} className="text-base text-text-gray mb-4">
            Use Cases
          </p>
          <h2
            ref={headingRef}
            id="use-cases-heading"
            className="text-[40px] md:text-[52px] font-semibold leading-[1.15] text-text-white tracking-[-0.01em]"
          >
            <span className="word inline-block mx-[6px]">Optimize</span>
            <span className="word inline-block mx-[6px]">any</span>
            <span className="word inline-block mx-[6px]">kind</span>
            <span className="word inline-block mx-[6px]">of</span>
            <span className="word inline-block mx-[6px]">message</span>
          </h2>
        </div>

        {/* RAIL: vertical on small, pinned horizontal on lg */}
        <div ref={railOuterRef} className="relative">
          <div
            ref={railInnerRef}
            className="
              flex flex-col gap-6
              lg:flex-row lg:flex-nowrap
            "
          >
            {useCasesData.map((uc, i) => (
              <div
                key={uc.title}
                data-card
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                onMouseEnter={() => handleEnter(i)}
                onMouseMove={(e) => handleMove(i, e)}
                onMouseLeave={() => handleLeave(i)}
                className="
                  group relative flex-shrink-0
                  bg-background-secondary/80 backdrop-blur
                  border border-border-gray/70
                  rounded-2xl p-7 md:p-8
                  transition-[box-shadow] duration-300
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  "
                style={
                  {
                    transformStyle: "preserve-3d",
                    transform: "perspective(900px)",
                    // Fixed width on desktop so the rail looks neat and readable
                    width: "100%",
                    maxWidth: "100%",
                    // Tailwind responsive width:
                    // We also control width via class on container:
                  } as CSSProperties
                }
              >
                {/* set fixed widths for desktop via utility (cleaner than inline) */}
                <div className="lg:w-[360px]" />

                {/* Subtle gradient border glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={
                    {
                      background:
                        "linear-gradient(135deg, rgba(20,184,166,0.14), rgba(168,85,247,0.12) 40%, rgba(249,115,22,0.12))",
                      mask:
                        "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                      WebkitMask:
                        "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                      padding: "1px",
                    } as CSSProperties
                  }
                />

                {/* Category pill */}
                <div
                  ref={(el) => { catRefs.current[i] = el; }}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-gray/60 bg-white/0 ${uc.colorClass}`}
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-current" />
                  <span className="text-xs font-semibold tracking-wide">{uc.category}</span>
                </div>

                {/* Title */}
                <h3
                  ref={(el) => { titleRefs.current[i] = el; }}
                  className="mt-4 text-[26px] md:text-[30px] font-semibold text-text-white leading-[1.2]"
                >
                  {uc.title}
                </h3>

                {/* Description */}
                <p
                  ref={(el) => { descRefs.current[i] = el; }}
                  className="mt-3 text-[15px] md:text-[16px] text-text-gray leading-relaxed"
                >
                  {uc.description}
                </p>

                {/* bottom accent line */}
                <div className="absolute left-6 right-6 bottom-5 h-[2px] bg-gradient-to-r from-primary-teal via-primary-purple to-primary-orange rounded-full opacity-60" />

                {/* Shine sweep */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={
                    {
                      background:
                        "radial-gradient(220px 180px at 25% 20%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%)",
                    } as CSSProperties
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-border-gray to-transparent" />
      </div>
    </section>
  );
};

export default UseCasesSection;
