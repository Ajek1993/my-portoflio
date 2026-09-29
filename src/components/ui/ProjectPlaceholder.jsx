import Icon from "./Icon";

const SKELETON_ROWS = ["w-3/4", "w-1/2", "w-2/3", "w-5/12"];

/**
 * Intentional-looking 16:9 tile used until a real screenshot is added:
 * an abstract app window tinted with the project category color.
 */
export default function ProjectPlaceholder({ name, category }) {
  return (
    <div
      className="relative flex aspect-video w-full items-end justify-center overflow-hidden bg-surface-2 px-6 pt-8 sm:px-10"
      style={{ "--cat": `var(--color-cat-${category})` }}
      role="img"
      aria-label={name}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,color-mix(in_oklab,var(--cat)_30%,transparent),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />

      <div
        className="relative w-full max-w-md rounded-t-xl border border-b-0 border-[color-mix(in_oklab,var(--cat)_35%,var(--color-border))] bg-bg/90 shadow-2xl"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
        </div>
        <div className="flex gap-4 p-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--cat)_15%,transparent)] text-(--cat)">
            <Icon name={category} className="size-5" />
          </span>
          <div className="flex-1 space-y-2.5 pt-1">
            {SKELETON_ROWS.map((width, index) => (
              <div
                key={width}
                className={`h-2 rounded-full ${width} ${index === 0 ? "bg-[color-mix(in_oklab,var(--cat)_55%,transparent)]" : "bg-surface-2"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
