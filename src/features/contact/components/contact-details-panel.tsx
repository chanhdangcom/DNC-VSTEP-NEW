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
    <Card className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border-none bg-blue-900 text-white ring-0 inset-ring-1 inset-ring-black/15 transition-all duration-500 dark:bg-zinc-900">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-white opacity-[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-blue-500 opacity-[0.15] blur-3xl" />
      <div className="pointer-events-none absolute top-[15%] right-[-15%] scale-150 -rotate-12 text-white/[0.02] transition-transform duration-700 hover:scale-[1.6]">
        <GlobeHemisphereWest size={400} weight="thin" />
      </div>

      <CardHeader className="space-y-4 p-6 sm:px-10">
        <CardTitle className="text-4xl font-semibold">
          Thông tin liên hệ
        </CardTitle>

        <CardDescription className="text-lg text-balance text-zinc-300">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.
        </CardDescription>
      </CardHeader>

      {/* Contact List */}
      <CardContent className="flex flex-1 flex-col justify-center gap-6 pb-6 sm:px-10">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-zinc-50 p-2 ring-1">
            <MapPin className="size-6 text-blue-800" weight="fill" />
          </div>

          <div className="space-y-1">
            <p className="text-lg font-medium text-white">Địa chỉ</p>
            <div className="text-base text-zinc-300">
              <p>Phòng C2-14 (Khu C)</p>
              <p>Trường Đại học Nam Cần Thơ</p>
              <p>168 Nguyễn Văn Cừ nối dài, P. An Bình, Tp. Cần Thơ</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-zinc-50 p-2 ring-1">
            <EnvelopeSimple className="size-6 text-blue-800" weight="fill" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-medium text-white">Email</p>
            <div className="text-base text-zinc-400">
              <a
                href="mailto:vstepdhnamcantho@nctu.edu.vn?subject=Liên hệ từ trang web VSTEP"
                className="text-zinc-300 transition-colors"
              >
                vstepdhnamcantho@nctu.edu.vn
              </a>

              <p>Phản hồi trong vòng 24h</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-zinc-50 p-2 ring-1">
            <Phone className="size-6 text-blue-800" weight="fill" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-medium text-white">Điện thoại</p>
            <div className="text-base text-zinc-400">
              <p>
                Tổng đài: <span className="text-zinc-300">02923 798 789</span>
              </p>

              <p>
                Hotline VSTEP:{" "}
                <span className="text-zinc-300">0901 012 365</span>
              </p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-zinc-50 p-2 ring-1">
            <Clock className="size-6 text-blue-800" weight="fill" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-medium text-white">Giờ làm việc</p>
            <div className="text-base text-zinc-400">
              <p className="text-zinc-300">Thứ 2 - Thứ 6</p>
              <p>
                Sáng: <span className="text-zinc-300">07:30 - 11:30</span>
              </p>
              <p>
                Chiều: <span className="text-zinc-300">13:00 - 17:00</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Social Media Footer
      <CardFooter className="flex flex-col space-y-4 border-t border-white/10">
        <p className="text-lg font-medium text-white">Kết nối với chúng tôi</p>

        <div className="flex flex-wrap justify-center gap-4">
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
      </CardFooter> */}
    </Card>
  );
}
