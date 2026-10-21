import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#conhecimentos", label: "Conhecimentos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="font-mono text-lg font-semibold text-white">
          {"<"}
          <span className="text-accent">{profile.name}</span>
          {"/>"}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-4 text-sm sm:gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-zinc-400 transition-colors hover:text-accent"
              >
                <span className="hidden sm:inline">{l.label}</span>
                <span className="sm:hidden">{l.label.split(" ")[0]}</span>
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
