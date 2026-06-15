export default function SelectionCard({
  label,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        border
        p-5
        text-left
        transition-all

        ${
          selected
            ? "border-primary bg-primary/5"
            : "bg-card"
        }
      `}
    >
      <div className="flex items-center justify-between">

        <span className="font-medium">
          {label}
        </span>

        <div
          className={`
            h-5
            w-5
            rounded-full
            border-2

            ${
              selected
                ? "border-primary bg-primary"
                : "border-muted"
            }
          `}
        />

      </div>
    </button>
  );
}