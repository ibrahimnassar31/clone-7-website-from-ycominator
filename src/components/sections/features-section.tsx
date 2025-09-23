"use client";

import React, { useCallback, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface Feature {
  number: string;
  title: string;
  description: string;
  videoWebm: string;
  videoMp4: string;
}

const featuresData: Feature[] = [
  {
    number: "1",
    title: "Create Any Society",
    description:
      "Use plain English to describe your target audience, or create a personal society based on your real social media interactions.",
    videoWebm:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B1%5D%20Create%20Any%20Society%20(2x%20Original%20size).webm",
    videoMp4:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B1%5D%20Create%20Any%20Society%20(2x%20Original%20size).mp4",
  },
  {
    number: "2",
    title: "Run Rapid Experiments",
    description:
      "Execute simulations in minutes to find the optimal form of your content or idea.",
    videoWebm:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B2%5D%20Run%20Rapid%20Experiments%20(2x%20Original%20size)_2.webm",
    videoMp4:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B2%5D%20Run%20Rapid%20Experiments%20(2x%20Original%20size)_2.mp4",
  },
  {
    number: "3",
    title: "Get Instant Insights",
    description:
      "Evaluate the performance of your experiment with scores, comments, and summaries.",
    videoWebm:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B3%5D%20Get%20Instant%20Insights%20(2x%20Original%20size)_3.webm",
    videoMp4:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B3%5D%20Get%20Instant%20Insights%20(2x%20Original%20size)_3.mp4",
  },
  {
    number: "4",
    title: "Forecast Every Outcome",
    description:
      "Artificial Societies uses your style to generate and test variations of your original post every time you run a simulation.",
    videoWebm:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B4%5D%20Forecast%20Every%20Outcome%20(2%D1%85%20Original%20size)_2.webm",
    videoMp4:
      "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B4%5D%20Forecast%20Every%20Outcome%20(2%D1%85%20Original%20size)_2.mp4",
  },
];


const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const numberRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const descRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const bgDotsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const bgNoiseRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleCardEnter = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const badge = numberRefs.current[idx];
    const vid = videoRefs.current[idx];
    if (!card || !badge) return;

    gsap.to(card, {
      rotationX: 4,
      rotationY: 4,
      transformPerspective: 900,
      boxShadow: "0 20px 40px rgba(0,0,0,0.30)",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(badge, {
      scale: 1.12,
      borderColor: "#ffffff",
      duration: 0.35,
      ease: "power2.out",
    });
    if (vid) {
      gsap.to(vid, { filter: "brightness(1.12)", scale: 1.03, duration: 0.35, ease: "power2.out" });
    }
  }, []);

  const handleCardLeave = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const badge = numberRefs.current[idx];
    const vid = videoRefs.current[idx];
    if (!card || !badge) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      boxShadow: "none",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(badge, {
      scale: 1,
      borderColor: "#4B5563",
      duration: 0.35,
      ease: "power2.out",
    });
    if (vid) {
      gsap.to(vid, { filter: "brightness(1)", scale: 1, duration: 0.35, ease: "power2.out" });
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (taglineRef.current) gsap.set(taglineRef.current, { opacity: 1, y: 0, scale: 1 });
        if (headingRef.current) {
          const words = headingRef.current.querySelectorAll<HTMLElement>(".word");
          gsap.set(words, { opacity: 1, y: 0 });
        }
        cardRefs.current.forEach((c) => c && gsap.set(c, { opacity: 1, y: 0, rotate: 0 }));
        bgDotsRefs.current.forEach((d) => d && gsap.set(d, { opacity: 0.4, y: 0 }));
        bgNoiseRefs.current.forEach((n) => n && gsap.set(n, { opacity: 0.45, y: 0 }));
        return;
      }

      if (taglineRef.current && sectionRef.current) {
        gsap.from(taglineRef.current, {
          y: -50,
          scale: 0.86,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Heading words stagger
      if (headingRef.current && sectionRef.current) {
        const words = headingRef.current.querySelectorAll<HTMLElement>(".word");
        gsap.from(words, {
          y: 90,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const entrance = [
          { y: -90, rotation: -4 },
          { y: 90, rotation: 4 },
          { y: -70, rotation: -3 },
          { y: 70, rotation: 3 },
        ][index % 4];

        gsap.from(card, {
          ...entrance,
          opacity: 0,
          duration: 1.05,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        const title = titleRefs.current[index];
        const desc = descRefs.current[index];
        const badge = numberRefs.current[index];
        const vid = videoRefs.current[index];
        const dots = bgDotsRefs.current[index];
        const noise = bgNoiseRefs.current[index];

        if (badge) {
          gsap.from(badge, {
            scale: 0,
            rotation: 90,
            opacity: 0,
            duration: 0.8,
            ease: "elastic.out(1,0.6)",
            delay: 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }

        if (title) {
          gsap.from(title, {
            x: index % 2 === 0 ? -110 : 110,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }

        if (desc) {
          gsap.from(desc, {
            x: index % 2 === 0 ? 110 : -110,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }

        if (vid) {
          gsap.from(vid, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.35,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
              onEnter: () => {
                const playPromise = vid.play();
                if (playPromise) {
                  playPromise.catch(() => {
                  });
                }
              },
              onLeaveBack: () => vid.pause(),
            },
          });
        }

        if (dots || noise) {
          gsap.from([dots, noise].filter(Boolean) as HTMLElement[], {
            opacity: 0,
            y: (i: number) => (i === 0 ? 18 : -18),
            duration: 0.9,
            stagger: 0.18,
            ease: "power2.out",
            delay: 0.1,
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
      className="bg-background-primary py-20 lg:py-[120px]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16 lg:mb-20">
          <p
            ref={taglineRef}
            className="font-body text-base font-normal text-primary-teal mb-4"
          >
            Features
          </p>
          <h2
            ref={headingRef}
            id="features-heading"
            className="text-section-heading font-display text-text-white"
          >
            <span className="word inline-block">Explore,</span>{" "}
            <span className="word inline-block">validate,</span>{" "}
            <span className="word inline-block">and</span>{" "}
            <span className="word inline-block">refine</span>{" "}
            <span className="word inline-block">content</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20 lg:gap-[120px]">
          {featuresData.map((feature, index) => (
            <div
              key={feature.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className="relative bg-background-secondary border border-border-gray rounded-3xl p-6 md:p-10 overflow-hidden will-change-transform"
              role="article"
              aria-label={`${feature.title} feature`}
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                  ref={(el) => {
                    bgDotsRefs.current[index] = el;
                  }}
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a676745a4568ba909a53d_footer%20dots.avif')",
                  }}
                />
                <div
                  ref={(el) => {
                    bgNoiseRefs.current[index] = el;
                  }}
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a6768aa59a5cd6db0b3f6_Footer%20noise.avif')",
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
                  <div className="flex w-full lg:w-auto items-start gap-4 sm:gap-6">
                    <div
                      ref={(el) => {
                        numberRefs.current[index] = el;
                      }}
                      className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-border-gray rounded-full font-display text-2xl md:text-3xl font-medium text-text-white"
                    >
                      {feature.number}
                    </div>

                    <h3
                      ref={(el) => {
                        titleRefs.current[index] = el;
                      }}
                      className="text-subsection-heading font-display text-text-white mt-1.5 md:mt-1"
                    >
                      {feature.title}
                    </h3>
                  </div>

                  <p
                    ref={(el) => {
                      descRefs.current[index] = el;
                    }}
                    className="text-body text-text-gray max-w-md flex-shrink-0"
                  >
                    {feature.description}
                  </p>
                </div>

                <div className="mt-10 rounded-2xl border border-border-gray overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    aria-label={`${feature.title} demo video`}
                  >
                    <source src={feature.videoWebm} type="video/webm" />
                    <source src={feature.videoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )) as ReactElement[]}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
