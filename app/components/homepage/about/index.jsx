"use client"

import { useEffect, useState } from 'react';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

const IMAGES = [
  '/output.png',
  '/SelfStockholm.jpeg',
  '/Selfferry.jpeg'
]

function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-[420px] h-[420px] rounded-lg overflow-hidden">
            {IMAGES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`profile-${i}`}
                fill
                priority={i===0}
                quality={90}
                sizes="(min-width: 1024px) 420px, 240px"
                className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                style={{ position: 'absolute' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;