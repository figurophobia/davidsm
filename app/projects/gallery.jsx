"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="mb-6">
      <div className="relative w-full rounded overflow-hidden mb-2">
        {/* Aspect ratio box to keep image scaling consistent */}
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <button onClick={prev} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded">‹</button>
          <Image
            src={images[index]}
            alt={`Project image ${index + 1}`}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 800px, 100vw"
            quality={100}
            priority={index === 0}
            unoptimized={true}
          />
          <button onClick={next} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded">›</button>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((src, i) => (
          <button key={src} onClick={() => setIndex(i)} className={`flex-shrink-0 border ${i === index ? 'border-pink-500' : 'border-transparent'} rounded`}>
              <div className="relative w-[160px] h-[100px]">
              <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" quality={100} sizes="160px" unoptimized={true} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
