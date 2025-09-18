import React from 'react';

const TargetedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScalableIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 7V5C7 3.89543 7.89543 3 9 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H18" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const RapidIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AffordableIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 10H10.5C9.67157 10 9 10.6716 9 11.5C9 12.3284 9.67157 13 10.5 13H13.5C14.3284 13 15 13.6716 15 14.5C15 15.3284 14.3284 16 13.5 16H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const features = [
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
    description: "Test any form of idea, content, or decision",
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

const ProductOverview = () => {
  return (
    <section id="features" className="bg-background-primary py-20 md:py-32">
      <div className="container">
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <p className="text-sm font-medium text-text-gray uppercase tracking-widest mb-4">
            Product Overview
          </p>
          <h2 className="text-text-white">
            Create realistic simulations of your target audience to instantly test messages, content, or ideas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background-secondary border border-border-gray rounded-2xl p-8 md:p-10 flex flex-col">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-8 ${feature.iconBgColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-text-white mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;