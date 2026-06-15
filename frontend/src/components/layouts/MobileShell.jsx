export default function MobileShell({ children }) {
  return (
    <div className="min-h-screen bg-neutral-300 flex justify-center">
      <div className="relative min-h-screen w-full max-w-md bg-background border-x border-border shadow-2xl">
        {children}
      </div>
    </div>
  );
}