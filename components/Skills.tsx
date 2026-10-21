import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="conhecimentos" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle index="01" label="competências" title="Conhecimentos" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 5) * 80}>
            <div className="h-full rounded-xl border border-ink-700 bg-ink-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}/${s.icon}-${
                  s.variant ?? "original"
                }.svg`}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9"
              />
              <p className="mt-4 font-medium text-white">{s.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
