"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type AudienceSlide = {
  title: string;
  image: string;
  description: string;
};

const AUDIENCE_SLIDES: readonly AudienceSlide[] = [
  {
    title: "Sinh viên Đại học & Cao đẳng",
    image: "/images/reading-making-notes-1536x1024.jpg",
    description:
      "Đáp ứng chuẩn đầu ra tiếng Anh để xét tốt nghiệp tại các cơ sở giáo dục đại học, cao đẳng theo quy định của Bộ Giáo dục & Đào tạo.",
  },
  {
    title: "Thạc sĩ & Tiến sĩ",
    image: "/images/people-practicing-social-integration-workspace-scaled.jpg",
    description:
      "Đạt yêu cầu đầu vào và đầu ra cho các chương trình đào tạo sau đại học, mở rộng cơ hội nghiên cứu và phát triển học thuật.",
  },
  {
    title: "Giáo viên tiếng Anh",
    image:
      "/images/collaborative-process-multicultural-businesspeople-using-laptop-presentation-communication-meeting-brainstorming-ideas-about-project-colleagues-working-plan-success-strategy-modern-office-scaled.jpg",
    description:
      "Nâng cao chuẩn năng lực sư phạm, đáp ứng yêu cầu khung năng lực đối với giáo viên giảng dạy ngoại ngữ các cấp.",
  },
  {
    title: "Người đi làm & Doanh nghiệp",
    image: "/images/banner/banner-vstep.jpg",
    description:
      "Hoàn thiện hồ sơ xin việc, xét thăng hạng viên chức, hoặc đáp ứng chuẩn ngoại ngữ tại các cơ quan, tổ chức, doanh nghiệp.",
  },
];

export function AboutAudienceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % AUDIENCE_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = AUDIENCE_SLIDES.length - 1;
      if (next >= AUDIENCE_SLIDES.length) next = 0;
      return next;
    });
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-zinc-100 ring-1 ring-zinc-200/50 sm:aspect-[21/9]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 size-full"
          >
            <div className="relative size-full">
              <Image
                src={AUDIENCE_SLIDES[currentIndex].image}
                alt={AUDIENCE_SLIDES[currentIndex].title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                <div className="max-w-2xl space-y-3">
                  <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                    0{currentIndex + 1} / 0{AUDIENCE_SLIDES.length}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {AUDIENCE_SLIDES[currentIndex].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-200 sm:text-base sm:leading-7">
                    {AUDIENCE_SLIDES[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute right-4 bottom-6 z-10 flex items-center gap-2 sm:right-10 sm:bottom-10 lg:right-14 lg:bottom-14">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95 sm:size-12"
          >
            <CaretLeft className="size-5 sm:size-6" weight="bold" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95 sm:size-12"
          >
            <CaretRight className="size-5 sm:size-6" weight="bold" />
          </button>
        </div>
      </div>

      {/* Thumbnails / Indicators */}
      <div className="mt-6 flex justify-center gap-3">
        {AUDIENCE_SLIDES.map((slide, idx) => (
          <button
            key={slide.title}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className="group relative flex h-1.5 w-12 overflow-hidden rounded-full bg-zinc-200 transition-all hover:bg-zinc-300"
          >
            <span
              className={cn(
                "bg-primary absolute inset-y-0 left-0 transition-all duration-300",
                idx === currentIndex ? "w-full" : "w-0"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
