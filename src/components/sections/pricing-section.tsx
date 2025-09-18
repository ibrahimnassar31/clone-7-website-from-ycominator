"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const checkIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/images/686b7d1482bddc718519c296_Check%20Icon-4.svg?";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <li className="flex items-start space-x-4">
    <Image src={checkIconUrl} alt="Check mark" width={20} height={20} className="mt-1 flex-shrink-0" />
    <span className="text-base text-text-gray font-normal">{text}</span>
  </li>
);

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceSuffix?: string;
  note: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  priceSuffix,
  note,
  features,
  buttonText,
  buttonLink,
  isPopular = false,
}) => (
  <div className={`relative flex flex-col bg-background-secondary border border-border-gray rounded-2xl p-10 h-full ${isPopular ? "border-t-[3px] border-t-primary-teal" : ""}`}>
    <div className="flex-grow">
      <h3 className="text-[32px] font-medium text-white mb-2">{title}</h3>
      <p className="text-base text-text-gray mb-8">{description}</p>
      
      <div className="mb-2">
        {price.startsWith("$") ? (
          <div className="flex items-baseline text-white">
            <span className="text-[64px] font-medium leading-none">{price}</span>
            {priceSuffix && <span className="text-base text-text-gray ml-2">{priceSuffix}</span>}
          </div>
        ) : (
          <h3 className="text-[32px] font-medium text-white">{price}</h3>
        )}
      </div>

      <p className="text-base text-text-gray mb-8 min-h-[48px]">{note}</p>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </ul>
    </div>

    <div className="mt-10">
      <a
        href={buttonLink}
        className={`block w-full text-center py-4 px-8 rounded-lg text-base font-medium transition-colors ${
          title === "Enterprise"
            ? "border border-white text-white hover:bg-white hover:text-black"
            : "bg-white text-black hover:bg-opacity-80"
        }`}
      >
        {buttonText}
      </a>
    </div>
  </div>
);

const plans = {
  monthly: [
    {
      title: "Free",
      description: "Get started with simulations",
      price: "$0",
      note: "No cost to run your first experiments",
      features: [
        "Access all features",
        "Configure your own societies",
        "3 Starting simulation credits",
      ],
      buttonText: "Select Free",
      buttonLink: "https://app.societies.io/",
    },
    {
      title: "Pro",
      description: "For founders, creators and builders",
      price: "$55",
      priceSuffix: "/ mo",
      note: "Billed monthly",
      features: [
        "Everything in Free",
        "Unlimited societies",
        "Unlimited simulation credits",
      ],
      buttonText: "Select Pro",
      buttonLink: "https://app.societies.io/",
      isPopular: true,
    },
    {
      title: "Enterprise",
      description: "Custom builds for businesses",
      price: "Get in Touch",
      note: "Pricing on request",
      features: [
        "Custom audience builds",
        "Custom contexts & segments",
        "Data & CRM integration",
        "API Access",
        "Dedicated Account Manager",
      ],
      buttonText: "Enquire",
      buttonLink: "#",
    },
  ],
  yearly: [
    {
      title: "Free",
      description: "Get started with simulations",
      price: "$0",
      note: "No cost to run your first experiments",
      features: [
        "Access all features",
        "Configure your own societies",
        "3 Starting simulation credits",
      ],
      buttonText: "Select Free",
      buttonLink: "https://app.societies.io/",
    },
    {
      title: "Pro",
      description: "For founders, creators and builders",
      price: "$40",
      priceSuffix: "/ mo",
      note: "Billed annually",
      features: [
        "Everything in Free",
        "Unlimited societies",
        "Unlimited simulation credits",
      ],
      buttonText: "Select Pro",
      buttonLink: "https://app.societies.io/",
      isPopular: true,
    },
    {
      title: "Enterprise",
      description: "Custom builds for businesses",
      price: "Get in Touch",
      note: "Pricing on request",
      features: [
        "Custom audience builds",
        "Custom contexts & segments",
        "Data & CRM integration",
        "API Access",
        "Dedicated Account Manager",
      ],
      buttonText: "Enquire",
      buttonLink: "#",
    },
  ],
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-background-primary overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b77e8611e759fd85af45e_Pricing%20noise.avif"
            alt="Pricing noise"
            fill
            objectFit="cover"
            quality={100}
            className="opacity-60"
          />
          <Image
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/6876183ba03250f6631c11ca_Pricing%20space%20dust.avif"
            alt="Space dust"
            fill
            objectFit="cover"
            quality={100}
            className="opacity-70"
          />
        </div>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-medium leading-tight text-white mb-8">
            Get started today
          </h2>
          <Tabs defaultValue="monthly" className="inline-block">
            <TabsList className="bg-[#141414] border border-border-gray p-1 rounded-full">
              <TabsTrigger value="monthly" className="text-text-gray data-[state=active]:bg-white data-[state=active]:text-black rounded-full px-6 py-2 text-base font-normal">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="text-text-gray data-[state=active]:bg-white data-[state=active]:text-black rounded-full px-6 py-2 text-base font-normal">
                Yearly <span className="ml-2 text-primary-teal">-30%</span>
              </TabsTrigger>
            </TabsList>
            <div className="mt-12">
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {plans.monthly.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {plans.yearly.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}