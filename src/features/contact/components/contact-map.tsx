import { MapPin, NavigationArrow } from "@phosphor-icons/react/dist/ssr";

export function ContactMap() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Nam+C%E1%BA%A7n+Th%C6%A1";

  return (
    <div className="group relative flex h-full min-h-[350px] flex-1 flex-col overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.1)] dark:bg-zinc-900">
      {/* Floating Glass UI Overlay */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6">
        {/* Floating Title Pill */}
        <div className="pointer-events-auto flex max-w-full items-center gap-3 rounded-full border border-white/60 bg-white/80 py-2 pr-5 pl-2.5 text-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
          <div className="bg-primary flex size-9 shrink-0 items-center justify-center rounded-full text-white shadow-[0_4px_15px_-3px_rgba(225,29,72,0.4)]">
            <MapPin className="size-4.5" weight="fill" />
          </div>
          <span className="truncate font-bold text-slate-900 dark:text-white">
            Địa điểm thi <span className="hidden sm:inline">VSTEP </span>
            <span className="mx-1.5 text-slate-300 dark:text-slate-600">—</span>
            <span className="text-primary">ĐH Nam Cần Thơ</span>
          </span>
        </div>

        {/* Floating Action Button */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Mở trong Google Maps"
          className="group/btn hover:bg-primary hover:border-primary pointer-events-auto flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-[0_10px_30px_-5px_rgba(225,29,72,0.4)] dark:border-white/10 dark:bg-zinc-900/80 dark:text-white"
        >
          <NavigationArrow
            className="size-5 transition-transform duration-500 group-hover/btn:-rotate-45"
            weight="fill"
          />
        </a>
      </div>

      {/* Full-Bleed Map Embed */}
      <iframe
        title="Bản đồ Trường Đại học Nam Cần Thơ"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9836365313936!2d105.73307567584166!3d9.99723047341857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c3521%3A0xb00713b567b57d60!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBOYW0gQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full object-cover contrast-[1.05] grayscale-[20%] filter transition-all duration-700 hover:contrast-100 hover:grayscale-0"
      />

      <div className="inset-ring-foreground/15 pointer-events-none absolute inset-0 z-10 rounded-[2.5rem] inset-ring-1" />
    </div>
  );
}
