import React from 'react';


const Point72Icon = () => (
  <div className="w-3 h-3 bg-white" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)" }} />
);

const KindredCapitalIcon = () => (
  <div className="w-3 h-3 bg-white rounded-full" />
);

const YCombinatorIcon = () => (
  <span className="font-bold text-white text-sm leading-none">Y</span>
);

const AnnouncementBar = () => {
  return (
    <div className="bg-[#D2691E] text-white w-full px-4 py-2">
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
        <p>
          Announcing our $5.3m seed stage funding from
        </p>
        <div className="flex items-center flex-wrap justify-center gap-2">
          <div className="flex items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-black/10">
            <Point72Icon />
            <span>Point72 Ventures</span>
          </div>
          <div className="flex items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-black/10">
            <KindredCapitalIcon />
            <span>Kindred Capital</span>
          </div>
          <div className="flex items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-black/10">
            <YCombinatorIcon />
            <span>Combinator</span>
          </div>
        </div>
        <a 
          href="https://www.businessinsider.com/artificial-societies-seed-funding-pitch-deck-y-combinator-2025-8" 
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;