const APP_STORE_URL =
  (import.meta as ImportMeta & { env: Record<string, string> }).env
    .VITE_APP_STORE_URL ?? "#";

type AppStoreBadgeProps = {
  className?: string;
  size?: "sm" | "md";
};

export function AppStoreBadge({ className = "", size = "md" }: AppStoreBadgeProps) {
  const h = size === "sm" ? 32 : 40;
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-block rounded-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mood-green focus-visible:ring-offset-2 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/app_store_badge.svg"
        alt="Download on the App Store"
        width={Math.round((119.66407 / 40) * h)}
        height={h}
        className="w-auto"
        style={{ height: h }}
        decoding="async"
      />
    </a>
  );
}
