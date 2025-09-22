"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const YCombinatorLogo = ({ logoRef }: { logoRef: React.Ref<HTMLDivElement> }) => (
  <div
    ref={logoRef}
    className="flex shrink-0 items-center justify-center rounded-sm bg-[#FF6347] w-6 h-6"
  >
    <span className="text-lg font-bold leading-none text-white">Y</span>
  </div>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const tryFreeButtonRef = useRef<HTMLAnchorElement | null>(null);
  const exploreButtonRef = useRef<HTMLAnchorElement | null>(null);
  const ycLogoRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingRef.current ||
      !paragraphRef.current ||
      !tryFreeButtonRef.current ||
      !exploreButtonRef.current ||
      !ycLogoRef.current ||
      !imageRef.current
    ) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    const headingWords = headingRef.current!.querySelectorAll('.word');
    tl.from(headingWords, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    })
      .from(paragraphRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from([tryFreeButtonRef.current, exploreButtonRef.current], {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.3')
      .from(ycLogoRef.current, {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.2')
      .from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        rotation: 10,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5');

    // Button Hover Effects
    gsap.to(tryFreeButtonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      paused: true,
      onEnter: () => gsap.to(tryFreeButtonRef.current, {
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
      }),
      onLeave: () => gsap.to(tryFreeButtonRef.current, { boxShadow: 'none' }),
    });

    gsap.to(exploreButtonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      paused: true,
      onEnter: () => gsap.to(exploreButtonRef.current, {
        backgroundColor: '#1f2937',
      }),
      onLeave: () => gsap.to(exploreButtonRef.current, { backgroundColor: 'transparent' }),
    });

    gsap.to(ycLogoRef.current, {
      scale: 1.1,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="bg-background-primary pt-40 pb-20 md:pb-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-hero-heading font-medium leading-tight text-text-white"
            >
              <span className="word inline-block">Test</span>{' '}
              <span className="word inline-block">Websites</span>
              <br />
              <span className="word inline-block">in</span>{' '}
              <span className="word inline-block">Artificial</span>{' '}
              <span className="word inline-block">Societies</span>
            </h1>
            <p
              ref={paragraphRef}
              className="mx-auto mt-6 max-w-lg text-body text-text-gray lg:mx-0"
            >
              Artificial Societies are collectives of AI personas that allow you to run experiments in minutes, not months.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                ref={tryFreeButtonRef}
                href="https://app.societies.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-lg bg-primary py-3 px-7 text-center font-medium text-primary-foreground text-button transition-colors hover:bg-gray-200 sm:w-auto"
                onMouseEnter={() => gsap.to(tryFreeButtonRef.current, { scale: 1.05 })}
                onMouseLeave={() => gsap.to(tryFreeButtonRef.current, { scale: 1 })}
              >
                Try Free
              </a>
              <a
                ref={exploreButtonRef}
                href="#features"
                className="inline-block w-full rounded-lg border border-border-gray py-3 px-7 text-center font-medium text-text-white text-button transition-colors hover:bg-secondary sm:w-auto"
                onMouseEnter={() => gsap.to(exploreButtonRef.current, { scale: 1.05 })}
                onMouseLeave={() => gsap.to(exploreButtonRef.current, { scale: 1 })}
              >
                Explore Features
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
              <p className="text-small text-text-white">Backed by</p>
              <YCombinatorLogo logoRef={ycLogoRef} />
            </div>
          </div>

          <div className="relative h-full w-full min-h-[300px] md:min-h-[500px]">
            <Image
              ref={imageRef}
              src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a8cedb53ea4e1a50c4f74_hero-illustration.avif"
              alt="3D geometric shapes including spheres, cubes, and cylinders in blue, teal, orange, and purple"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;