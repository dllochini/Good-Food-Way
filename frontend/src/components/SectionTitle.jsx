export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
      </div>
    </div>
  );
}
