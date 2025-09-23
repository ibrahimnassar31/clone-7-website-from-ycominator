"use client";

import React, { useEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TargetedIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="path"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path className="path" d="M22 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path className="path" d="M6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path className="path" d="M12 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path className="path" d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ScalableIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect className="path" x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      className="path"
      d="M7 7V5C7 3.89543 7.89543 3 9 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H18"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const RapidIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="path"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path className="path" d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AffordableIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle className="path" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path className="path" d="M12 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      className="path"
      d="M15 10H10.5C9.67157 10 9 10.6716 9 11.5C9 12.3284 9.67157 13 10.5 13H13.5C14.3284 13 15 13.6716 15 14.5C15 15.3284 14.3284 16 13.5 16H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


type Feature = {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <TargetedIcon />,
    iconBgColor: "bg-primary-blue",
    title: "Targeted",
    description: "Accurately model even hard-to-reach audiences.",
  },
  {
    icon: <ScalableIcon />,
    iconBgColor: "bg-primary-teal",
    title: "Scalable",
    description: "Test any form of idea, content, or decision.",
  },
  {
    icon: <RapidIcon />,
    iconBgColor: "bg-primary-purple",
    title: "Rapid",
    description: "Get actionable insights in minutes, not months.",
  },
  {
    icon: <AffordableIcon />,
    iconBgColor: "bg-primary-orange",
    title: "Affordable",
    description: "A fraction of the cost of traditional research.",
  },
];


const ProductOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const descRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  const handleEnter = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const icon = iconRefs.current[idx];
    const title = titleRefs.current[idx];
    if (!card || !icon || !title) return;

    gsap.to(card, { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.30)", duration: 0.35, ease: "power3.out" });
    gsap.to(icon, { scale: 1.12, rotation: 8, duration: 0.35, ease: "power2.out" });
    gsap.to(title, { color: "#ffffff", letterSpacing: "0.06em", duration: 0.35, ease: "power2.out" });
  }, []);

  const handleLeave = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const icon = iconRefs.current[idx];
    const title = titleRefs.current[idx];
    if (!card || !icon || !title) return;

    gsap.to(card, { y: 0, boxShadow: "none", duration: 0.35, ease: "power3.out" });
    gsap.to(icon, { scale: 1, rotation: 0, duration: 0.35, ease: "power2.out" });
    gsap.to(title, { color: "#f3f4f6", letterSpacing: "0em", duration: 0.35, ease: "power2.out" });
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (subheadingRef.current) gsap.set(subheadingRef.current, { opacity: 1, rotate: 0 });
        if (headingRef.current) gsap.set(headingRef.current.querySelectorAll(".word"), { opacity: 1, y: 0, skewY: 0 });
        cardRefs.current.forEach((c) => c && gsap.set(c, { opacity: 1, rotateY: 0 }));
        return;
      }

      if (subheadingRef.current && sectionRef.current) {
        gsap.from(subheadingRef.current, {
          opacity: 0,
          rotation: -2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (headingRef.current && sectionRef.current) {
        const words = headingRef.current.querySelectorAll<HTMLElement>(".word");
        gsap.from(words, {
          y: 70,
          skewY: 12,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          rotationY: 48,
          opacity: 0,
          duration: 1.05,
          delay: index * 0.12,
          ease: "back.out(1.4)",
          transformPerspective: 500,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        const iconWrap = iconRefs.current[index];
        if (iconWrap) {
          const paths = iconWrap.querySelectorAll<SVGPathElement | SVGCircleElement | SVGRectElement>(".path");
          paths.forEach((p, i) => {
            const geom = p as unknown as SVGGeometryElement;
            const length = typeof geom.getTotalLength === "function" ? geom.getTotalLength() : 0;
            if (length > 0) {
              gsap.fromTo(
                p,
                { strokeDasharray: length, strokeDashoffset: length },
                {
                  strokeDashoffset: 0,
                  duration: 1.2,
                  ease: "power3.inOut",
                  delay: index * 0.12 + 0.35 + i * 0.06,
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              );
            } else {
              gsap.from(p, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                delay: index * 0.12 + 0.35 + i * 0.06,
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  toggleActions: "play none none none",
                },
              });
            }
          });
        }

        const titleEl = titleRefs.current[index];
        const descEl = descRefs.current[index];
        if (titleEl) {
          gsap.from(titleEl, {
            x: index % 2 === 0 ? -90 : 90,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: index * 0.12 + 0.25,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
        if (descEl) {
          gsap.from(descEl, {
            x: index % 2 === 0 ? 90 : -90,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: index * 0.12 + 0.35,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      });

      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          backgroundPosition: "50% 100%",
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

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-background-primary py-20 md:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container">
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <p
            ref={subheadingRef}
            className="text-sm font-medium text-text-gray uppercase tracking-widest mb-4"
          >
            Product Overview
          </p>

          <h2
            ref={headingRef}
            id="features-heading"
            className="text-text-white text-balance leading-tight text-3xl md:text-5xl font-semibold"
          >
            <span className="word inline-block">Create</span>{" "}
            <span className="word inline-block">realistic</span>{" "}
            <span className="word inline-block">simulations</span>{" "}
            <span className="word inline-block">of</span>{" "}
            <span className="word inline-block">your</span>{" "}
            <span className="word inline-block">target</span>{" "}
            <span className="word inline-block">audience</span>{" "}
            <span className="word inline-block">to</span>{" "}
            <span className="word inline-block">instantly</span>{" "}
            <span className="word inline-block">test</span>{" "}
            <span className="word inline-block">messages,</span>{" "}
            <span className="word inline-block">content,</span>{" "}
            <span className="word inline-block">or</span>{" "}
            <span className="word inline-block">ideas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              className="bg-background-secondary border border-border-gray rounded-2xl p-8 md:p-10 flex flex-col will-change-transform"
              role="article"
              aria-label={feature.title}
            >
              <div
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-8 ${feature.iconBgColor}`}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              <h3
                ref={(el) => {
                  titleRefs.current[index] = el;
                }}
                className="text-text-white mb-2 text-xl font-semibold"
              >
                {feature.title}
              </h3>

              <p
                ref={(el) => {
                  descRefs.current[index] = el;
                }}
                className="text-text-gray/90 leading-relaxed"
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
