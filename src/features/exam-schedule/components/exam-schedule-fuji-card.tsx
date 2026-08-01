import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { formatListDate, toListDateTime } from "../utils/format-list-date";
import { PAGE_HUB_BLUE } from "@/features/page-shell";

const CARD_COVERS = [
  {
    src: "/images/banner/collage/dnc-campus-04.jpg",
    alt: "Tòa nhà Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-exterior.jpg",
    alt: "Khuôn viên Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-library.jpg",
    alt: "Thư viện học tập",
  },
  {
    src: "/images/banner/collage/exam-answer-sheet.jpg",
    alt: "Phiếu trả lời trắc nghiệm",
  },
  {
    src: "/images/banner/collage/dnc-campus-02.jpg",
    alt: "Giảng đường Nam Cần Thơ",
  },
] as const;

function coverForId(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash + id.charCodeAt(i) * (i + 1)) % CARD_COVERS.length;
  }
  return CARD_COVERS[hash]!;
}

type ExamScheduleFujiCardProps = {
  item: ExamScheduleItem;
};

/** Card dọc kiểu Fuji — ảnh cao + title xanh gạch chân hover. */
export function ExamScheduleFujiCard({ item }: ExamScheduleFujiCardProps) {
  const cover = coverForId(item.id);

  return (
    <article className="h-full">
      <Link
        href={item.href}
        className={cn(
          "group flex h-full flex-col",
          "focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:outline-none"
        )}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-zinc-100">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 640px) 50vw, 240px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          {item.isNew ? (
            <span className="bg-primary absolute top-2 left-2 rounded px-2 py-0.5 text-[0.65rem] font-bold text-white uppercase">
              Mới
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-1.5 pt-3">
          <time
            dateTime={toListDateTime(item.date)}
            className="text-xs text-zinc-500"
          >
            {formatListDate(item.date)}
          </time>
          <h3
            className="line-clamp-3 text-sm leading-snug font-bold underline-offset-4 group-hover:underline sm:text-[0.9375rem]"
            style={{ color: PAGE_HUB_BLUE }}
          >
            {item.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
