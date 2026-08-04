import { MapPin, NavigationArrow } from "@phosphor-icons/react/dist/ssr";

export function ContactMap() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Nam+C%E1%BA%A7n+Th%C6%A1";

  return (
    <div className="shadow-primary/5 hover:shadow-primary/10 flex h-full flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/10 transition-all duration-300 dark:bg-zinc-900 dark:shadow-none dark:ring-white/10">
      {/* Header Section */}
      <div className="flex flex-col gap-3 px-4 py-3 shadow-sm ring-1 ring-black/10">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Địa điểm thi VSTEP —{" "}
            <span className="text-primary">ĐH Nam Cần Thơ</span>
          </h3>
        </div>
      </div>

      {/* Map Embed */}
      <div className="relative min-h-[250px] w-full flex-1">
        <iframe
          title="Bản đồ Trường Đại học Nam Cần Thơ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9836365313936!2d105.73307567584166!3d9.99723047341857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c3521%3A0xb00713b567b57d60!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBOYW0gQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
