export default function SectionHeading({ id, eyebrow, title, lead, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs font-medium tracking-widest text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
      )}
    </div>
  );
}
