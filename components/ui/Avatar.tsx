import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<string, { px: number; text: string }> = {
  sm: { px: 32, text: "text-xs" },
  md: { px: 44, text: "text-sm" },
  lg: { px: 64, text: "text-lg" },
};

export function Avatar({
  src,
  alt,
  initials,
  size = "md",
  className = "",
}: AvatarProps) {
  const { px, text } = sizeMap[size];

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className={`rounded-[var(--avatar-radius)] object-cover ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  return (
    <span
      aria-label={alt}
      className={`
        inline-flex items-center justify-center
        rounded-[var(--avatar-radius)]
        bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]
        font-medium ${text}
        ${className}
      `}
      style={{ width: px, height: px }}
    >
      {initials ?? alt.charAt(0).toUpperCase()}
    </span>
  );
}
