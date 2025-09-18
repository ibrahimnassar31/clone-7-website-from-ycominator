"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "Accuracy", href: "/#accuracy" },
  { name: "Pricing", href: "/#pricing" },
];

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] py-[18px]">
      <div className="container">
        <div className="relative flex items-center justify-between rounded-[30px] border border-border-gray bg-[rgba(6,6,6,0.1)] p-[7.4px] backdrop-blur-md">
          <Link href="/#home">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686a571b25c7f81effdab836_AS%20logo-1.svg?"
              alt="Artificial Societies Logo"
              width={150}
              height={37}
              priority
            />
          </Link>

          <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-normal text-text-gray transition-colors hover:text-text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Button asChild className="hidden text-base font-medium lg:flex">
              <a href="https://app.societies.io">Sign-Up</a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}