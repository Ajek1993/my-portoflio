import Icon from "./Icon";

/** Intentional-looking 16:9 tile used until a real screenshot is added. */
export default function ProjectPlaceholder({ name, category, label }) {
  return (
    <div
      className="relative flex aspect-video w-full flex-col justify-between overflow-hidden bg-surface-2 p-5"
      style={{ "--cat": `var(--color-cat-${category})` }}
      role="img"
      aria-label={name}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,color-mix(in_oklab,var(--cat)_35%,transparent),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <span className="relative inline-flex size-10 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--cat)_40%,transparent)] bg-bg/60 text-(--cat)">
        <Icon name={category} className="size-5" />
      </span>
      <div className="relative">
        <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
          {label}
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-fg">{name}</p>
      </div>
    </div>
  );
}
