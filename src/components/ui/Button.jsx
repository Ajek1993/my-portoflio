import Icon from "./Icon";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap";

const VARIANTS = {
  primary: "bg-accent text-accent-ink hover:bg-accent-strong",
  outline: "border border-border-strong text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-fg",
};

const SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  external = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const iconEl = icon ? <Icon name={icon} className="size-4 shrink-0" /> : null;
  const content = (
    <>
      {iconPosition === "start" && iconEl}
      <span>{children}</span>
      {iconPosition === "end" && iconEl}
    </>
  );

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
