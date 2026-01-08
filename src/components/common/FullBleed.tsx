export default function FullBleed({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`w-full ${className}`}>{children}</section>;
}
