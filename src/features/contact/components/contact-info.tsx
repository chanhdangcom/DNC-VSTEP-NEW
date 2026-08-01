import { ReactNode } from "react";
import {
  ChatCircleDots,
  MapPinLine,
  Phone,
  EnvelopeSimple,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { Typography } from "@/components/ui/typography";

type ContactInfoItem = {
  icon: any;
  title: string;
  content: ReactNode;
};

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: MapPinLine,
    title: "Địa chỉ",
    content:
      "Phòng C2-14 (Khu C) – Trường Đại học Nam Cần Thơ, số 168 Nguyễn Văn Cừ nối dài, Phường An Bình, Tp. Cần Thơ.",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    content: "02923 798 789 – 0901 012 365",
  },
  {
    icon: ChatCircleDots,
    title: "Zalo",
    content: "0901 012 365",
  },
  {
    icon: EnvelopeSimple,
    title: "Email",
    content: "vstepdhnamcantho@nctu.edu.vn",
  },
  {
    icon: Clock,
    title: "Thời gian làm việc",
    content: (
      <>
        Thứ 2 – Thứ 7
        <br />
        Sáng: 7:30 - 11:30 | Chiều: 13:00 - 17:00
      </>
    ),
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfoItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-card/90 ring-border/80 flex gap-4 rounded-2xl p-1.5 shadow-xs ring-1 transition-all duration-300 hover:shadow-md"
          >
            {/* Left Icon Block */}
            <div className="flex self-stretch">
              <div className="flex h-full w-14 shrink-0 flex-col items-center justify-center rounded-xl p-2 ring-1 ring-black/5">
                <Icon className="text-primary size-6 shrink-0" weight="fill" />
              </div>
            </div>

            {/* Main Info Area */}
            <div className="flex min-w-0 flex-1 flex-col justify-center space-y-1 py-3 pr-3">
              <Typography variant="small" className="text-sm font-medium">
                {item.title}
              </Typography>
              <div className="text-muted-foreground text-sm text-pretty">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
