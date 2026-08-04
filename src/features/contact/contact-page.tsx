import { HeaderMain } from "@/features/main/header";
import { FooterMain } from "@/features/main/footer";
import { Typography } from "@/components/ui/typography";
import { PageImageHero, contactPageBreadcrumbs } from "@/features/page-shell";
import { ContactForm } from "./components/contact-form";
import { ContactInfoCard } from "./components/contact-info-card";
import { ContactMap } from "./components/contact-map";
import {
  MapPin,
  ShareNetwork,
  EnvelopeSimple,
  Phone,
  Buildings,
  PaperPlaneTilt,
  Headset,
  ThumbsUp,
  FacebookLogo,
  TiktokLogo,
  ChatCircleText,
  YoutubeLogo,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

export function ContactPage() {
  return (
    <div className="font-momo flex min-h-dvh flex-col bg-slate-50 dark:bg-slate-950">
      <HeaderMain solid />

      {/* Hero Banner */}
      <main className="flex-1 pt-[var(--app-header-height)]">
        <PageImageHero
          imageUrl="/images/banner/lienhe-banner.jpg"
          banner={{
            title: "Liên hệ với",
            titleHighlight: "chúng tôi",
            description:
              "Trung tâm Đào tạo chuẩn đầu ra & PTNNL có đội ngũ chuyên viên sẵn sàng giải đáp mọi thắc mắc của bạn. Vui lòng liên hệ nếu bạn có bất kỳ câu hỏi nào về kỳ thi VSTEP.",
          }}
          breadcrumbs={contactPageBreadcrumbs}
        />

        <div className="relative overflow-hidden py-6 lg:py-8">
          {/* Modern Background Effects */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="bg-primary/20 absolute top-0 right-0 left-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div>
          </div>

          <div className="relative z-10 container space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              {/* Right Column (Form) */}
              <div className="relative z-10 flex h-full w-full flex-col">
                <div className="shadow-primary/5 hover:shadow-primary/10 relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 transition-all duration-300 dark:bg-zinc-900 dark:shadow-none dark:ring-white/10">
                  {/* Decorative colorful top accent to bridge the two columns */}
                  <div className="via-primary bg-primary absolute inset-x-0 top-0 h-1.5" />

                  <div className="mb-4 shrink-0">
                    <Typography
                      variant="h3"
                      className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                      Cho Chúng Tôi Biết Bạn Cần Gì
                    </Typography>
                    <Typography className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Đội ngũ của chúng tôi sẵn sàng hỗ trợ bạn mọi chi tiết, dù
                      lớn hay nhỏ.
                    </Typography>
                  </div>
                  <ContactForm />
                </div>
              </div>

              {/* Left Column (Info) */}
              <div className="flex h-full flex-col justify-between">
                {/* Info Grid */}
                <div className="flex h-full flex-col justify-between gap-6">
                  {/* Address (Rose/Primary) */}
                  <ContactInfoCard
                    variant="rose"
                    title="Địa chỉ"
                    icon={<MapPin className="size-5" weight="fill" />}
                    watermarkIcon={<Buildings weight="fill" />}
                  >
                    <div className="space-y-1.5">
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        Phòng C2-14 (Khu C)
                      </p>
                      <p className="text-base font-medium text-slate-600 dark:text-slate-400">
                        Trường Đại học Nam Cần Thơ
                        <br />
                        168 Nguyễn Văn Cừ nối dài, P. An Bình, Tp. Cần Thơ
                      </p>
                    </div>
                  </ContactInfoCard>

                  {/* Email (Sky Blue) */}
                  <ContactInfoCard
                    variant="sky"
                    title="Email"
                    icon={<EnvelopeSimple className="size-5" weight="fill" />}
                    watermarkIcon={<PaperPlaneTilt weight="fill" />}
                  >
                    <div className="space-y-2">
                      <div>
                        <a
                          href="mailto:vstepdhnamcantho@nctu.edu.vn"
                          className="block text-lg font-bold text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                        >
                          vstepdhnamcantho@nctu.edu.vn
                        </a>
                        <p className="mt-0.5 text-base text-slate-600 dark:text-slate-400">
                          Phản hồi trong vòng 24h
                        </p>
                      </div>
                      <div>
                        <a
                          href="https://nctu.edu.vn"
                          target="_blank"
                          rel="noreferrer"
                          className="block text-lg font-bold text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
                        >
                          nctu.edu.vn
                        </a>
                        <p className="mt-0.5 text-base text-slate-600 dark:text-slate-400">
                          Website chính thức
                        </p>
                      </div>
                    </div>
                  </ContactInfoCard>

                  {/* Phone (Emerald Green) */}
                  <ContactInfoCard
                    variant="emerald"
                    title="Điện thoại"
                    icon={<Phone className="size-5" weight="fill" />}
                    watermarkIcon={<Headset weight="fill" />}
                  >
                    <div className="space-y-3">
                      <div>
                        <p className="text-lg font-bold tracking-tight text-slate-900 tabular-nums dark:text-white">
                          02923 798 789
                        </p>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                          Tổng đài Trường ĐH Nam Cần Thơ
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold tracking-tight text-slate-900 tabular-nums dark:text-white">
                          0901 012 365
                        </p>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                          Hotline tư vấn VSTEP
                        </p>
                      </div>
                    </div>
                  </ContactInfoCard>

                  {/* Working Hours (Amber) */}
                  <ContactInfoCard
                    variant="amber"
                    title="Giờ làm việc"
                    icon={<Clock className="size-5" weight="fill" />}
                    watermarkIcon={<Clock weight="fill" />}
                  >
                    <div className="space-y-3">
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          Thứ 2 - Thứ 6
                        </p>
                        <p className="mt-0.5 text-base text-slate-600 dark:text-slate-400">
                          Sáng: 07:30 - 11:30 | Chiều: 13:00 - 17:00
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          Thứ 7
                        </p>
                        <p className="mt-0.5 text-base text-slate-600 dark:text-slate-400">
                          Sáng: 07:30 - 11:30
                        </p>
                      </div>
                    </div>
                  </ContactInfoCard>

                  {/* Social Media (Zinc) */}
                  <ContactInfoCard
                    variant="zinc"
                    title="Mạng xã hội"
                    icon={<ShareNetwork className="size-5" weight="fill" />}
                    watermarkIcon={<ThumbsUp weight="fill" />}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-2.5 text-base font-bold text-blue-700 ring-1 ring-blue-500/20 transition-all hover:scale-105 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400"
                      >
                        <FacebookLogo className="size-4" weight="fill" />
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-xl bg-sky-50 px-5 py-2.5 text-base font-bold text-sky-700 ring-1 ring-sky-500/20 transition-all hover:scale-105 hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-400"
                      >
                        <ChatCircleText className="size-4" weight="fill" />
                        Zalo
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-base font-bold text-zinc-900 ring-1 ring-zinc-500/20 transition-all hover:scale-105 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-white/10"
                      >
                        <TiktokLogo className="size-4" weight="fill" />
                        Tiktok
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-2.5 text-base font-bold text-red-700 ring-1 ring-red-500/20 transition-all hover:scale-105 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400"
                      >
                        <YoutubeLogo className="size-4" weight="fill" />
                        Youtube
                      </a>
                    </div>
                  </ContactInfoCard>
                </div>
              </div>
            </div>

            {/* Full-width Map Section at the bottom */}
            <div className="flex h-[300px] w-full flex-col sm:h-[350px]">
              <ContactMap />
            </div>
          </div>
        </div>
      </main>

      <FooterMain />
    </div>
  );
}
