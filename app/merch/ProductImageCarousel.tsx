'use client'

import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductImageCarousel({ images, alt }: { images: (string | StaticImageData)[]; alt: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const goTo = (target: number) => {
    const el = scrollRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(images.length - 1, target))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setIndex(clamped)
  }

  return (
    <div className="group/carousel relative h-full w-full">
      <div
        ref={scrollRef}
        onScroll={(event) => {
          const el = event.currentTarget
          setIndex(Math.round(el.scrollLeft / el.clientWidth))
        }}
        className="scrollbar-hide flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {images.map((src, i) => (
          <div key={i} className="h-full w-full flex-none snap-center">
            <Image src={src} alt={`${alt} \u2014 photo ${i + 1} of ${images.length}`} width={339} height={339} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); goTo(index - 1) }}
            aria-label="Previous photo"
            className="absolute left-1 top-1/2 flex -translate-y-1/2 items-center justify-center bg-black/60 p-1 text-white opacity-0 transition group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); goTo(index + 1) }}
            aria-label="Next photo"
            className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center justify-center bg-black/60 p-1 text-white opacity-0 transition group-hover/carousel:opacity-100"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full transition ${i === index ? 'bg-[#c7ff32]' : 'bg-white/40'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
