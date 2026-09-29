/**
 * Small pill label. `color` is a CSS color value (usually a theme variable)
 * used for the dot and the tinted border.
 */
export default function Badge({ color, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklab,var(--badge)_35%,transparent)] bg-[color-mix(in_oklab,var(--badge)_10%,transparent)] px-2.5 py-0.5 text-xs font-medium text-fg ${className}`}
      style={{ "--badge": color }}
    >
      <span className="size-1.5 rounded-full bg-(--badge)" aria-hidden="true" />
      {children}
    </span>
  );
}
