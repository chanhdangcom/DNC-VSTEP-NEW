import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  MapPin,
  EnvelopeSimple,
  Phone,
  Clock,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/dist/ssr";

export function ContactDetailsPanel() {
  return (
    <Card className="relative flex h-full w-full flex-col overflow-hidden border-none bg-blue-900 text-white ring-0 inset-ring-1 inset-ring-black/15 transition-all duration-500 sm:rounded-[2rem] dark:bg-zinc-900">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-white opacity-[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-blue-500 opacity-[0.15] blur-3xl" />
      <div className="pointer-events-none absolute top-[15%] right-[-15%] scale-150 -rotate-12 text-white/[0.02] transition-transform duration-700 hover:scale-[1.6]">
        <GlobeHemisphereWest size={400} weight="thin" />
      </div>

      <CardHeader className="relative z-10 px-6 pt-6 pb-6 sm:px-10 sm:pt-8">
        <CardTitle className="text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
          Thông tin liên hệ
        </CardTitle>
        <CardDescription className="mt-2 text-base text-balance text-blue-100/90">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.
        </CardDescription>
      </CardHeader>

      {/* Contact List */}
      <CardContent className="relative z-10 flex flex-1 flex-col justify-center gap-8 px-6 sm:px-10 lg:gap-10">
        {/* Address */}
        <div className="group flex items-start gap-4 transition-all">
          <div className="group-hover:bg-primary group-hover:ring-primary/20 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-[0_8px_25px_-4px_rgba(225,29,72,0.5)]">
            <MapPin className="size-5 transition-colors" weight="fill" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-200/70 uppercase">
              Địa chỉ
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              Phòng C2-14 (Khu C)
            </p>
            <p className="mt-0.5 text-base text-blue-200/80">
              Trường Đại học Nam Cần Thơ
              <br />
              168 Nguyễn Văn Cừ nối dài, P. An Bình, Tp. Cần Thơ
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="group flex items-start gap-4 transition-all">
          <div className="group-hover:bg-primary group-hover:ring-primary/20 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-[0_8px_25px_-4px_rgba(225,29,72,0.5)]">
            <EnvelopeSimple
              className="size-5 transition-colors"
              weight="fill"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-200/70 uppercase">
              Email
            </p>
            <a
              href="mailto:vstepdhnamcantho@nctu.edu.vn?subject=Liên hệ từ trang web VSTEP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg font-bold text-white transition-colors hover:text-sky-300"
            >
              vstepdhnamcantho@nctu.edu.vn
            </a>
            <p className="mt-0.5 text-base text-blue-200/80">
              Phản hồi trong vòng 24h
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="group flex items-start gap-4 transition-all">
          <div className="group-hover:bg-primary group-hover:ring-primary/20 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-[0_8px_25px_-4px_rgba(225,29,72,0.5)]">
            <Phone className="size-5 transition-colors" weight="fill" />
          </div>
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold tracking-wider text-blue-200/70 uppercase">
                Tổng đài
              </p>
              <p className="mt-1 text-lg font-bold tracking-tight text-white tabular-nums">
                02923 798 789
              </p>
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-blue-200/70 uppercase">
                Hotline VSTEP
              </p>
              <p className="mt-1 text-lg font-bold tracking-tight text-white tabular-nums">
                0901 012 365
              </p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="group flex items-start gap-4 transition-all">
          <div className="group-hover:bg-primary group-hover:ring-primary/20 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-[0_8px_25px_-4px_rgba(225,29,72,0.5)]">
            <Clock className="size-5 transition-colors" weight="fill" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wider text-blue-200/70 uppercase">
              Giờ làm việc
            </p>
            <p className="mt-1 text-lg font-bold text-white">Thứ 2 - Thứ 6</p>
            <p className="mt-0.5 text-base text-blue-200/80">
              Sáng: 07:30 - 11:30 | Chiều: 13:00 - 17:00
            </p>
          </div>
        </div>
      </CardContent>

      {/* Social Media Footer */}
      <CardFooter className="relative z-10 mt-6 flex flex-col border-t border-white/10 px-6 pt-6 pb-6 sm:px-10 sm:pb-8">
        <p className="mb-4 text-center text-sm font-semibold tracking-wider text-blue-200/70 uppercase">
          Kết nối với chúng tôi
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            "/images/banner/app-icon/200x200bb-75.webp",
            "/images/banner/app-icon/200x200bb-75 (1).webp",
            "/images/banner/app-icon/200x200bb-75 (2).webp",
          ].map((src, i) => (
            <a
              key={i}
              href="#"
              className="group flex h-10 w-10 items-center justify-center transition-[translate,shadow] duration-300 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Social Icon ${i + 1}`}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
