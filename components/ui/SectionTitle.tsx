interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-white">
      {children}
    </h2>
  );
}