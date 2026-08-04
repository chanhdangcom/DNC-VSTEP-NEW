"use client";

import { useState } from "react";
import { CaretDown, Question, ShieldCheck } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Đăng ký thi VSTEP tại ĐH Nam Cần Thơ cần mang theo những giấy tờ gì?",
    answer:
      "Bạn cần chuẩn bị: 01 Bản sao Căn cước công dân (CCCD) hoặc Hộ chiếu còn hạn, 02 ảnh 3x4 (chụp không quá 6 tháng) và Thẻ sinh viên (nếu là sinh viên DNC để hưởng ưu đãi lệ phí).",
  },
  {
    id: "faq-2",
    question: "Bao lâu sau khi hoàn thành bài thi sẽ nhận được chứng chỉ chính thức?",
    answer:
      "Kết quả thi sẽ được công bố trên website sau 7-10 ngày làm việc. Chứng chỉ bản cứng chính thức do Bộ GD&ĐT cấp sẽ được nhận tại Trung tâm (Phòng C2-14) sau 14-20 ngày kể từ ngày công bố điểm.",
  },
  {
    id: "faq-3",
    question: "Lệ phí thi VSTEP tại Trường ĐH Nam Cần Thơ là bao nhiêu?",
    answer:
      "Lệ phí thi dành cho Thí sinh tự do là 1.800.000 VNĐ. Sinh viên, Học viên Sau đại học và Cán bộ giảng viên thuộc Trường Đại học Nam Cần Thơ được hỗ trợ mức lệ phí ưu đãi theo quy định của nhà trường.",
  },
  {
    id: "faq-4",
    question: "Tôi có thể hủy hoặc đổi ngày thi VSTEP đã đăng ký không?",
    answer:
      "Thí sinh được quyền yêu cầu đổi ngày thi hoặc chuyển đợt thi trước ngày thi tối thiểu 05 ngày làm việc. Vui lòng liên hệ trực tiếp Hotline 02923 798 789 hoặc mang CCCD đến Phòng C2-14 để làm thủ tục.",
  },
];

export function ContactFaq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  function toggleFaq(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8 lg:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Question className="h-4 w-4 text-red-600" weight="fill" />
            <span className="text-xs font-extrabold tracking-wider text-red-600 uppercase">
              Giải đáp nhanh 24/7
            </span>
          </div>
          <h3 className="mt-1 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
            Các câu hỏi thường gặp khi liên hệ
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Bấm vào câu hỏi để xem chi tiết câu trả lời từ Trung tâm VSTEP.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
          <ShieldCheck className="h-4 w-4 text-emerald-600" weight="fill" />
          <span>Thông tin chính thức 2026</span>
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3">
        {CONTACT_FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={cn(
                "rounded-2xl transition-all duration-200 ring-1 overflow-hidden",
                isOpen
                  ? "bg-red-50/40 ring-red-200 shadow-sm"
                  : "bg-zinc-50/60 ring-zinc-200/70 hover:bg-zinc-100/80"
              )}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left sm:p-5 outline-none"
              >
                <span
                  className={cn(
                    "text-sm font-extrabold transition-colors sm:text-base leading-snug",
                    isOpen ? "text-red-600" : "text-zinc-800"
                  )}
                >
                  {faq.question}
                </span>
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
                    isOpen
                      ? "rotate-180 bg-red-600 text-white"
                      : "bg-zinc-200/80 text-zinc-600"
                  )}
                >
                  <CaretDown className="h-4 w-4" weight="bold" />
                </div>
              </button>

              {isOpen && (
                <div className="animate-in fade-in duration-200 border-t border-red-100/80 p-4 pt-3 sm:p-5 sm:pt-3 text-sm leading-relaxed text-zinc-700">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
