export default function OptionCard({
  icon: Icon,
  title,
  description,
  selected = false,
  onClick,
  note,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-lg border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
        selected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-background hover:bg-muted/30"
      }`}
    >
      <div className="flex items-start gap-4">
        {Icon ? (
          <div
            className={`rounded-lg p-3 transition-colors ${
              selected
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold tracking-tight">{title}</h3>
            {note ? (
              <span className="rounded-lg bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                {note}
              </span>
            ) : null}
          </div>

          {description ? (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        <div
          className={`mt-1 h-5 w-5 rounded-lg border transition-colors ${
            selected ? "border-primary bg-primary" : "border-border bg-transparent"
          }`}
        />
      </div>
    </button>
  );
}
