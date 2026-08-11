import Image from "next/image";
import { contactSection } from "../contact-data";
import { ContactCta } from "./contact-cta";

export function ContactSection() {
  return (
    <section
      id="lien-he"
      className="relative isolate min-h-[min(72vh,40rem)] scroll-mt-28 overflow-hidden lg:min-h-[min(78vh,44rem)]"
    >
      <Image
        src={contactSection.backgroundImage}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-zinc-950/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/50"
      />

      <div className="relative flex min-h-[min(72vh,40rem)] flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:min-h-[min(78vh,44rem)] lg:py-28">
        <div className="space-y-8 sm:space-y-10">
          <div className="inverse-selection space-y-4 sm:space-y-5">
            <h2 className="text-primary text-6xl leading-[0.9] font-black tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
              {contactSection.heading}
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed font-medium text-white/95 sm:text-lg lg:text-xl">
              {contactSection.description}
            </p>
          </div>

          <ContactCta
            label={contactSection.cta.label}
            href={contactSection.cta.href}
          />
        </div>
      </div>
    </section>
  );
}
