import { HeaderMain } from "@/features/main/header";
import { FooterMain } from "@/features/main/footer";
import { Typography } from "@/components/ui/typography";
import { ContactForm } from "./components/contact-form";
import { ContactInfo } from "./components/contact-info";
import {
  PageAnimatedHero,
  contactPageBanner,
  contactPageBreadcrumbs,
} from "@/features/page-shell";

export function ContactPage() {
  return (
    <div className="bg-background font-momo flex min-h-dvh flex-col">
      <HeaderMain solid />

      <main className="flex-1">
        <PageAnimatedHero
          banner={contactPageBanner}
          breadcrumbs={contactPageBreadcrumbs}
        />

        <div className="container py-10 sm:py-14 lg:py-16">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10 lg:grid-cols-2">
            {/* ─── Cột trái: Form ─── */}
            <div className="flex flex-col items-center justify-start p-6 sm:p-10 lg:p-12 xl:p-14">
              <div className="w-full max-w-lg">
                <div className="mb-7 space-y-2 text-center">
                  <Typography
                    variant="h2"
                    className="text-foreground border-b-0 pb-0 text-2xl font-bold tracking-tight"
                  >
                    Liên hệ tư vấn
                  </Typography>
                  <Typography
                    variant="muted"
                    className="text-sm leading-relaxed"
                  >
                    Nhập thông tin bên dưới để gửi yêu cầu hỗ trợ trực tiếp đến
                    Trung tâm.
                  </Typography>
                </div>

                <ContactForm />

                <Typography
                  variant="muted"
                  className="mt-6 text-center text-xs leading-relaxed"
                >
                  Cam kết bảo mật thông tin theo quy định của{" "}
                  <span className="font-medium">
                    Trường Đại học Nam Cần Thơ
                  </span>
                  .
                </Typography>
              </div>
            </div>

            {/* ─── Cột phải: ContactInfo ─── */}
            <div className="bg-muted flex flex-col items-center justify-start p-6 sm:p-10 lg:p-12 xl:p-14">
              <div className="w-full max-w-lg space-y-7">
                <div className="space-y-2 text-center">
                  <Typography
                    variant="h3"
                    className="text-foreground text-xl font-bold tracking-tight sm:text-2xl"
                  >
                    Liên hệ trực tiếp
                  </Typography>
                  <Typography
                    variant="muted"
                    className="text-sm leading-relaxed"
                  >
                    Nếu bạn có thắc mắc về các vấn đề liên quan đến khoa, vui
                    lòng liên hệ trực tiếp.
                  </Typography>
                </div>

                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterMain />
    </div>
  );
}
