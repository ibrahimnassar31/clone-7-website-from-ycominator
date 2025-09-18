"use client";

import { useState } from "react";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 2 11 13" />
    <path d="m22 2-7 20-4-9-9-4 20-7z" />
  </svg>
);

const Footer = () => {
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message form submitted");
    // Here you would handle form submission logic, e.g., API call
    // For now, we just close the modal.
    setMessageModalOpen(false);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist form submitted");
    setWaitlistModalOpen(false);
  };

  return (
    <footer
      className="relative overflow-hidden bg-background pt-[120px]"
      style={{
        backgroundImage:
          'url("https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a676745a4568ba909a53d_footer%20dots.avif"), url("https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a6768aa59a5cd6db0b3f6_Footer%20noise.avif")',
        backgroundPosition: "50% 50%, 50% 50%",
        backgroundSize: "auto, auto",
        backgroundRepeat: "repeat, repeat",
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Dialog open={isMessageModalOpen} onOpenChange={setMessageModalOpen}>
            <DialogTrigger asChild>
              <div className="bg-background-secondary p-10 rounded-2xl border border-border flex flex-col items-start cursor-pointer hover:border-primary-teal transition-colors">
                <h3 className="text-3xl font-medium mb-4 text-text-white">
                  Message the Founders
                </h3>
                <p className="text-muted-foreground mb-8 text-left">
                  Have a question or feedback? We’d love to hear from you.
                </p>
                <Button variant="default" className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background-secondary border-border rounded-lg max-w-lg p-10">
              <DialogHeader>
                <DialogTitle className="text-3xl font-medium text-text-white mb-4">Message the Founders</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <Input type="text" name="name" placeholder="Name" required className="bg-input border-border placeholder:text-muted-foreground text-white rounded-md"/>
                <Input type="email" name="email" placeholder="Email" required className="bg-input border-border placeholder:text-muted-foreground text-white rounded-md"/>
                <Textarea name="message" placeholder="Your message..." required rows={5} className="bg-input border-border placeholder:text-muted-foreground text-white rounded-md"/>
                <div className="flex justify-end pt-4 gap-4">
                  <DialogClose asChild>
                    <Button type="button" variant="ghost" className="text-muted-foreground hover:text-white">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
                    Send Message
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isWaitlistModalOpen} onOpenChange={setWaitlistModalOpen}>
            <DialogTrigger asChild>
              <div className="bg-background-secondary p-10 rounded-2xl border border-border flex flex-col items-start cursor-pointer hover:border-primary-teal transition-colors">
                <h3 className="text-3xl font-medium mb-4 text-text-white">
                  Join the Waitlist
                </h3>
                <p className="text-muted-foreground mb-8 text-left">
                  Get early access to new features and updates.
                </p>
                <Button variant="default" className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Join Now
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-background-secondary border-border rounded-lg max-w-lg p-10">
              <DialogHeader>
                <DialogTitle className="text-3xl font-medium text-text-white mb-4">Join the Waitlist</DialogTitle>
                <DialogDescription className="text-muted-foreground pt-1">
                  Get early access to new features and updates from Artificial Societies.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleWaitlistSubmit} className="space-y-6 pt-2">
                <Input type="email" name="email" placeholder="Enter your email" required className="bg-input border-border placeholder:text-muted-foreground text-white rounded-md"/>
                <div className="flex justify-end pt-4 gap-4">
                  <DialogClose asChild>
                    <Button type="button" variant="ghost" className="text-muted-foreground hover:text-white">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
                    Join
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border-t border-border mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-20 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
            <a href="/#home" aria-label="Home" className="mb-6">
              <Image
                src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a571b25c7f81effdab836_AS%20logo.svg"
                alt="Artificial Societies Logo"
                width={100}
                height={25}
                className="h-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              © 2024 Artificial Societies. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex justify-center items-center gap-4">
              <a href="https://x.com/tweetsfromamos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-text-white transition-colors" aria-label="Follow on X">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/92220498" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-text-white transition-colors" aria-label="Follow on LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://t.me/artificialsocieties" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-text-white transition-colors" aria-label="Join on Telegram">
                <TelegramIcon className="h-5 w-5" />
              </a>
            </div>
            <nav className="flex justify-center gap-10 text-sm">
              <div>
                <h4 className="font-medium text-text-white mb-4">Platform</h4>
                <ul className="space-y-3">
                  <li><a href="/#features" className="text-muted-foreground hover:text-text-white">Features</a></li>
                  <li><a href="/#pricing" className="text-muted-foreground hover:text-text-white">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-white mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="https://www.societies.io/blog" className="text-muted-foreground hover:text-text-white">Blog</a></li>
                  <li><a href="mailto:support@societies.io" className="text-muted-foreground hover:text-text-white">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;