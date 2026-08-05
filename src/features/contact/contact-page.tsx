import {
  PageHubShell,
  contactPageBanner,
  contactPageBreadcrumbs,
} from "@/features/page-shell";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ContactForm } from "./components/contact-form";
import { ContactDetailsPanel } from "./components/contact-details-panel";
import { ContactMap } from "./components/contact-map";

export function ContactPage() {
  return (
    <PageHubShell
      banner={contactPageBanner}
      breadcrumbs={contactPageBreadcrumbs}
    >
      <div className="font-momo relative overflow-hidden">
        <div className="relative z-10 mx-auto w-full px-0.5">
          <div className="relative flex flex-col pt-0.5 lg:flex-row lg:items-start lg:justify-center">
            {/* Left Box (Form) */}
            <div className="relative z-10 w-full lg:w-[65%]">
              <Card className="border-t-primary dark:border-t-primary w-full overflow-hidden rounded-3xl border border-t-4 border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 lg:mr-8 dark:border-zinc-800 dark:bg-zinc-950">
                <CardHeader className="px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 lg:pr-16">
                  <CardTitle className="font-hand text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight dark:text-white">
                    Hãy để lại lời nhắn cho chúng tôi
                  </CardTitle>
                  <CardDescription className="mt-3 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
                    Bất kỳ bạn cần tư vấn khóa học hay giải đáp thắc mắc, Đội
                    ngũ của VSTEP luôn sẵn sàng lắng nghe.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-8 sm:px-10 sm:pb-10 lg:pr-24">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Right Box (Info Panel) */}
            <div className="relative z-20 mt-8 w-full lg:mt-24 lg:-ml-16 lg:w-[42%]">
              <div className="h-full w-full rounded-[2.5rem] shadow-lg ring-1 ring-black/5">
                <ContactDetailsPanel />
              </div>
            </div>
          </div>

          {/* Map Section constrained to container width */}
          <div className="mt-8 flex h-[350px] w-full flex-col sm:h-[450px]">
            <ContactMap />
          </div>
        </div>
      </div>
    </PageHubShell>
  );
}
