import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "accent" | "ghost" | "white" | "outline-light";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type AnchorButtonProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-90 shadow-soft hover:-translate-y-0.5",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-soft hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  white:
    "bg-white text-primary hover:bg-surface shadow-soft hover:-translate-y-0.5",
  "outline-light":
    "bg-white/10 text-white border-2 border-white/25 hover:bg-white/20 backdrop-blur-sm",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200",
    variants[variant],
    className,
  );

  if (props.as === "button") {
    const { as: _, variant: __, className: ___, children: ____, ...buttonProps } = props;
    return (
      <button type="button" className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }

  const { as: _, variant: __, className: ___, children: ____, ...anchorProps } = props;
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  );
}
