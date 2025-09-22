"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ViralChartAnimationProps {
  chartRef: React.RefObject<SVGSVGElement | null>;
  path1Ref: React.RefObject<SVGPathElement | null>;
  path2Ref: React.RefObject<SVGPathElement | null>;
  circleGroupRef: React.RefObject<SVGGElement | null>;
}

const ViralChartAnimation: React.FC<ViralChartAnimationProps> = ({ chartRef, path1Ref, path2Ref, circleGroupRef }) => {
  return (
    <svg
      ref={chartRef}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1032 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient
          id="line-gradient"
          x1="994"
          y1="112"
          x2="38"
          y2="412"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#40E0D0" />
          <stop offset="1" stopColor="#4169E1" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        ref={path1Ref}
        d="M 38 482 C 200 482, 450 300, 850 310"
        stroke="#333333"
        strokeWidth="2"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />
      <path
        ref={path2Ref}
        d="M 38 412 C 218 412, 418 92, 994 112"
        stroke="url(#line-gradient)"
        strokeWidth="3"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        filter="url(#glow)"
      />
      <g ref={circleGroupRef} opacity="0">
        <circle
          cx="994"
          cy="112"
          r="12"
          fill="#40E0D0"
          className="pulse-circle"
        />
        <circle cx="994" cy="112" r="6" fill="#40E0D0" />
      </g>
    </svg>
  );
};

const ViralContentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const circleGroupRef = useRef<SVGGElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const noiseImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current!,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const headingWords = headingRef.current!.querySelectorAll(".word");
    tl.from(headingWords, {
      y: (i) => (i % 2 === 0 ? 50 : -50), // Alternate directions
      x: (i) => (i % 2 === 0 ? -30 : 30),
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power4.out",
    })
      .to(path1Ref.current!, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power3.inOut",
      })
      .to(path2Ref.current!, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power3.inOut",
      }, "-=1.5")
      .to(circleGroupRef.current!, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(circleGroupRef.current!.querySelector(".pulse-circle")!, {
        scale: 1.5,
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }, "-=0.5")
      .from([bgImageRef.current!, noiseImageRef.current!], {
        opacity: 0,
        y: (i) => (i === 0 ? 20 : -20), 
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=2");

    let chartContainer: HTMLElement | null = null;
    const handleMouseEnter = () => {
      gsap.to([path1Ref.current!, path2Ref.current!], {
        y: 5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(circleGroupRef.current!.querySelector(".pulse-circle")!, {
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };
    const handleMouseLeave = () => {
      gsap.to([path1Ref.current!, path2Ref.current!], {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(circleGroupRef.current!.querySelector(".pulse-circle")!, {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };
    if (chartRef.current) {
      chartContainer = chartRef.current.parentElement;
      chartContainer!.addEventListener("mouseenter", handleMouseEnter);
      chartContainer!.addEventListener("mouseleave", handleMouseLeave);
    }

    gsap.to(bgImageRef.current!, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current!,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(noiseImageRef.current!, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current!,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (chartContainer) {
        chartContainer.removeEventListener("mouseenter", handleMouseEnter);
        chartContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background-primary py-[120px]">
      <div className="max-w-[1200px] mx-auto px-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            ref={headingRef}
            className="font-display text-5xl font-medium leading-[1.2] text-text-white"
          >
            <span className="word inline-block">Imagine</span>{" "}
            <span className="word inline-block">seeing</span>{" "}
            <span className="word inline-block">your</span>{" "}
            <span className="word inline-block">content</span>{" "}
            <span className="word inline-block">go</span>{" "}
            <span className="word inline-block">viral</span>{" "}
            <span className="word inline-block">before</span>{" "}
            <span className="word inline-block">you</span>{" "}
            <span className="word inline-block">launch</span>{" "}
            <span className="word inline-block">it</span>
          </h2>
        </div>
        <div className="relative rounded-3xl border border-border-gray overflow-hidden bg-background-secondary shadow-2xl">
          <Image
            ref={bgImageRef}
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/687615775142ecfb0a692e11_showreel-bg.avif"
            alt="Abstract background with blue and purple circular gradient"
            fill
            objectFit="cover"
            quality={100}
            unoptimized
          />
          <Image
            ref={noiseImageRef}
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/68761577ab44427b097ba3cb_showreel-bg2.avif"
            alt="Noise texture overlay"
            fill
            objectFit="cover"
            className="opacity-20"
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />
          <div className="relative min-h-[520px]">
            <ViralChartAnimation
              chartRef={chartRef}
              path1Ref={path1Ref}
              path2Ref={path2Ref}
              circleGroupRef={circleGroupRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralContentSection;