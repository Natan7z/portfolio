import Reveal from "./Reveal";

export default function SectionTitle({
  index,
  label,
  title,
  center = false,
}: {
  index: string;
  label: string;
  title: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 border-b border-ink-700 pb-6 ${center ? "text-center" : ""}`}>
      <p className="font-mono text-sm text-accent">
        {index} / {label}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
