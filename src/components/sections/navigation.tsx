"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { HTMLAttributes } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "Accuracy", href: "/#accuracy" },
  { name: "Pricing", href: "/#pricing" },
];

const MenuIcon = React.forwardRef<SVGSVGElement, { isOpen: boolean } & HTMLAttributes<SVGSVGElement>>(
  ({ isOpen, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line className="line-top" x1="4" x2="20" y1="6" y2="6" />
      <line className="line-middle" x1="4" x2="20" y1="12" y2="12" />
      <line className="line-bottom" x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
);
MenuIcon.displayName = "MenuIcon";

export default function Navigation() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuIconRef = useRef<SVGSVGElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: 10,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.2,
    });

    gsap.from(navItemsRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 1.5,
    });

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(headerRef.current, {
      scale: 0.95,
      backgroundColor: "rgba(6, 6, 6, 0.3)",
      duration: 1.5,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "200px top",
        scrub: true,
      },
    });

    if (mobileMenuRef.current && menuIconRef.current) {
      if (isMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          xPercent: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.from(mobileMenuRef.current?.querySelectorAll("li"), {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-top"), {
          rotation: 45,
          y: 6,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-bottom"), {
          rotation: -45,
          y: -6,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-middle"), {
          opacity: 0,
          duration: 0.3,
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          xPercent: 100,
          duration: 0.5,
          ease: "power2.in",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-top"), {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-bottom"), {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(menuIconRef.current?.querySelector(".line-middle"), {
          opacity: 1,
          duration: 0.3,
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[9999] py-[18px]">
      <div className="container">
        <div className="relative flex items-center justify-between rounded-[30px] border border-border-gray bg-[rgba(6,6,6,0.1)] p-[7.4px] backdrop-blur-md">
          <Link href="/#home">
            <Image
              ref={logoRef}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686a571b25c7f81effdab836_AS%20logo-1.svg?"
              alt="Artificial Societies Logo"
              width={150}
              height={37}
              priority
            />
          </Link>

          <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  ref={(el) => {
                    if (el) {
                      navItemsRef.current[index] = el;
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-base font-normal text-text-gray transition-colors hover:text-text-white"
                    onMouseEnter={(e) => {
                      gsap.to(e.target, {
                        letterSpacing: "2px",
                        color: "#ffffff",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.target, {
                        letterSpacing: "0px",
                        color: "#9ca3af",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Button
              ref={buttonRef}
              asChild
              className="hidden text-base font-medium lg:flex"
              onMouseEnter={() => {
                gsap.to(buttonRef.current, {
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)",
                  duration: 0.3,
                });
              }}
              onMouseLeave={() => {
                gsap.to(buttonRef.current, {
                  boxShadow: "none",
                  duration: 0.3,
                });
              }}
            >
              <a href="https://app.societies.io">Sign-Up</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon ref={menuIconRef} isOpen={isMenuOpen} className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        <div
          ref={mobileMenuRef}
          className="fixed top-[74px] left-0 right-0 bottom-0 bg-[rgba(6,6,6,0.9)] backdrop-blur-md lg:hidden translate-x-full"
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xl font-normal text-text-gray hover:text-text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
