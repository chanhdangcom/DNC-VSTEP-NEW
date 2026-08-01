import { PAGE_HUB_NAVY } from "./page-hub-hero";

type PageHubSidebarRailProps = {
  className?: string;
};

/**
 * Rail trang trí cạnh menu — diamond + line cao bằng cột content (desktop).
 */
export function PageHubSidebarRail({ className }: PageHubSidebarRailProps) {
  return (
    <div
      aria-hidden
      className={
        className ??
        "pointer-events-none absolute inset-y-0 right-0 hidden w-5 lg:block"
      }
    >
      <span
        className="absolute top-0 left-1/2 z-10 size-2 -translate-x-1/2 rotate-45"
        style={{ backgroundColor: PAGE_HUB_NAVY }}
      />
      <span className="absolute top-2 bottom-0 left-1/2 z-0 w-px -translate-x-1/2 bg-zinc-200" />
    </div>
  );
}
