import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonBaseProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary: [
    "inline-flex items-center justify-center",
    "bg-[var(--gold)] text-[var(--charcoal)]",
    "text-[0.75rem] font-semibold tracking-[0.15em] uppercase",
    "px-8 py-[14px] rounded-[var(--radius-sm)]",
    "transition-all duration-[var(--duration-fast)] ease-out",
    "hover:bg-[var(--gold-light)] hover:-translate-y-px",
    "active:translate-y-0"
  ].join(" "),
  secondary: [
    "inline-flex items-center justify-center",
    "bg-transparent border border-white/50 text-white",
    "text-[0.75rem] font-semibold tracking-[0.15em] uppercase",
    "px-8 py-[14px] rounded-[var(--radius-sm)]",
    "transition-all duration-[var(--duration-fast)] ease-out",
    "hover:border-white hover:bg-white/[0.08]"
  ].join(" "),
  tertiary: [
    "inline-flex items-center",
    "bg-transparent text-[var(--gold)]",
    "text-[0.75rem] font-semibold tracking-[0.15em] uppercase",
    "border-b border-[var(--gold)] pb-[2px]",
    "transition-colors duration-[var(--duration-fast)] ease-out",
    "hover:text-[var(--gold-light)] hover:border-[var(--gold-light)]"
  ].join(" ")
};

export function Button(props: ButtonProps): JSX.Element {
  const { variant, children, className, ...rest } = props;
  const classes = `${variantStyles[variant]}${className ? ` ${className}` : ""}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, "variant" | "children" | "className">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
