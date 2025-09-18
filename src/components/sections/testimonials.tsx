"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  logoUrl: string;
  logoAlt: string;
  authorName: string;
  authorTitle: string;
};

const testimonialsData: Testimonial[] = [
  {
    quote: "Love what you are trying to do. Quite brilliant. I've been trying it out for more time than I have given any other AI tool that is recommended to me.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5a1639b2df4be47fbd_unwasted%20Logo-23.svg?",
    logoAlt: "Unwasted Logo",
    authorName: "Rod Fountain",
    authorTitle: "Founder & CEO",
  },
  {
    quote: "Artificial Societies is now a part of our AI based thought leadership program for B2B founders.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5a41f6d623e5b4ca86_perkzz%20Logo-24.svg?",
    logoAlt: "Perkzz Logo",
    authorName: "Ariel Cabiri",
    authorTitle: "CEO",
  },
  {
    quote: "I really love AS's network analysis approach and think the products are really cool.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5a2c7d0f5245d90391_embarc%20Logo-25.svg?",
    logoAlt: "Embarc Logo",
    authorName: "Jason Pitts",
    authorTitle: "Head of Platform Operations",
  },
  {
    quote: "Artificial Societies is a smart way to test and refine ideas early, helping you iterate faster and gather feedback before investing resources.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5a7490dc6dac4ef12f_transformation%20Logo-26.svg?",
    logoAlt: "The Transformation Tour Logo",
    authorName: "Alexiou Gibson",
    authorTitle: "Founder",
  },
  {
    quote: "Love how the use case is so clear and specific",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5a4f2f56abd24bf167_roxi%20Logo-27.svg?",
    logoAlt: "ROXi Logo",
    authorName: "Jayna Patel",
    authorTitle: "Product Manager",
  },
  {
    quote: "Breathtaking",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b6c5962ce6721b045cd95_henge%20Logo-28.svg?",
    logoAlt: "Henge Logo",
    authorName: "Paolo Tormena",
    authorTitle: "Founder & CEO",
  },
  {
    quote: "I’m impressed. My LinkedIn Post got likes and comments 3x faster than my usual ones, and I’m seeing influencers with 20k+ followers engaging.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e5e559b8e8cf7b24f967e_Jupiter_logo-29.svg?",
    logoAlt: "Jupitrr AI Logo",
    authorName: "Harris Cheng",
    authorTitle: "Co-founder",
  },
  {
    quote: "Is this a kind of magic?",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e5e553ab84a06e87bda33_Tinexta_logo-30.svg?",
    logoAlt: "Tinexta Logo",
    authorName: "Guido Frigieri",
    authorTitle: "Innovation Consultant",
  },
  {
    quote: "I use Artificial Societies every day!",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e5e55f885c01fdc49ee5a_Jump_logo-31.svg?",
    logoAlt: "Jump Logo",
    authorName: "Liam Hanlon",
    authorTitle: "Head of Insights",
  },
  {
    quote: "I love using Artificial Societies — it helps me test audience reactions and choose the best wording. The Variants feature is a game changer. I can’t imagine working without it!",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/images/686e5e55737712f0d6830e3a_Fond_logo-3.avif?",
    logoAlt: "Fond Logo",
    authorName: "Taro Fukuyama",
    authorTitle: "Founder and former CEO",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-[120px]">
      <div className="container">
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <p className="text-xl font-bold text-primary-teal">
            Testimonials
          </p>
          <h2 className="text-section-heading font-bold text-white max-w-[640px] leading-[1.2]">
            Join thousands using Artificial Societies to run simulations and test ideas
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full pb-20"
        >
          <CarouselContent className="-ml-6">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-[33.333%]">
                <div className="h-[300px] flex flex-col justify-between rounded-[20px] border border-border-gray bg-background-secondary p-10">
                  <p className="text-xl font-medium leading-[30px] text-white">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
                      <Image
                        src={testimonial.logoUrl}
                        alt={testimonial.logoAlt}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold leading-tight text-white">{testimonial.authorName}</p>
                      <p className="text-sm leading-snug text-text-gray">{testimonial.authorTitle}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1/2 top-auto -bottom-4 h-12 w-12 -translate-x-[calc(100%+8px)] transform border-border-gray bg-transparent text-white hover:bg-background-secondary" />
          <CarouselNext className="absolute left-1/2 top-auto -bottom-4 h-12 w-12 translate-x-[8px] transform border-border-gray bg-transparent text-white hover:bg-background-secondary" />
        </Carousel>
      </div>
    </section>
  );
}