export default function CircularProgress({
  value,
  size = 110,
  strokeWidth = 10,
  label,
  amount,
  subLabel,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted/30"
          />

          {/* Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-primary transition-all duration-500"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">
            {value}%
          </span>

          {subLabel && (
            <span className="text-[10px] text-muted-foreground">
              {subLabel}
            </span>
          )}
        </div>
      </div>

      {label && (
        <p className="mt-3 text-sm text-muted-foreground">
          {label}
        </p>
      )}

      {amount && (
        <p className="font-semibold">
          {amount}
        </p>
      )}
    </div>
  );
}