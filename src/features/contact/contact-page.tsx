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
      <div className="font-momo">
        <div className="mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
            {/* Left Box (Form) */}
            <div className="w-full lg:w-[65%]">
              <Card className="w-full rounded-3xl shadow-xl shadow-slate-200/50 lg:mr-8">
                <CardHeader className="max-w-2xl space-y-4 px-6 py-8 sm:px-10 sm:pt-10 lg:pr-16">
                  <CardTitle className="text-4xl lg:font-semibold">
                    Gửi thông tin cho chúng tôi
                  </CardTitle>

                  <CardDescription className="text-lg">
                    Bất kỳ bạn cần tư vấn khóa học hay giải đáp thắc mắc, Đội
                    ngũ của VSTEP luôn sẵn sàng lắng nghe.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-6 lg:pr-24">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Right Box (Info Panel) */}
            <div className="mt-8 w-full lg:mt-0 lg:-ml-16 lg:w-[42%]">
              <div className="h-full w-full rounded-[2.5rem] shadow-lg">
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
