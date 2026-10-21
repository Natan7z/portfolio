// Edite este arquivo para atualizar o conteúdo do site inteiro.

export const profile = {
  name: "Natan",
  role: "Desenvolvedor de Sistemas",
  tagline:
    "Olá! Sou Natan Sousa, desenvolvedor focado em criar interfaces web funcionais e atraentes. Em constante aprendizado, busco minha primeira oportunidade no mercado de TI para aplicar meus conhecimentos e evoluir lado a lado com times de alta performance.",
  email: "gcw116.nsc@gmail.com",
  linkedin: "https://www.linkedin.com/in/natan-sousa-248a152aa",
  github: "https://github.com/Natan7z",
  location: "São Paulo, Brasil",
  // Coloque sua foto em /public/natan.jpg (ou mude o caminho aqui).
  photo: "/perfil2.jpeg",
};

export const highlights = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"];

export type Skill = {
  name: string;
  detail: string;
  icon: string; // slug do Devicon
  variant?: string; // sufixo do arquivo, por padrão "original"
};

export const skills: Skill[] = [
  { name: "HTML", detail: "Estrutura semântica", icon: "html5" },
  { name: "CSS", detail: "Layouts responsivos", icon: "css3" },
  { name: "JavaScript", detail: "Interatividade", icon: "javascript" },
  { name: "TypeScript", detail: "Em estudo", icon: "typescript" },
  { name: "React", detail: "Em estudo", icon: "react" },
  { name: "Next.js", detail: "Em estudo", icon: "nextjs" },
  { name: "Tailwind CSS", detail: "Estilização rápida", icon: "tailwindcss" },
  { name: "Bootstrap", detail: "Componentes prontos", icon: "bootstrap" },
  { name: "Python", detail: "Em estudo", icon: "python" },
  { name: "Git", detail: "Versionamento", icon: "git" },
  { name: "Figma", detail: "Protótipos e UI", icon: "figma" },
  { name: "Photoshop", detail: "Edição de imagens", icon: "photoshop", variant: "plain" },
  { name: "Illustrator", detail: "Vetores e logos", icon: "illustrator", variant: "plain" },
  { name: "VS Code", detail: "Editor principal", icon: "vscode" },
  { name: "Visual Studio", detail: "IDE", icon: "visualstudio", variant: "plain" },
];

export type Project = {
  title: string;
  year?: string; // aparece em negrito no canto direito do título
  description: string;
  tags: string[];
  href: string;
  image?: string; // caminho em /public, opcional
};

export const projects: Project[] = [
  {
    title: "TCC Animations Kids",
    year: "2024",
    description:
      "Projeto Website feito na Etec, onde possui jogos voltado ao público infantil focados em acessibilidade.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://natan7z.github.io/animationskids/",
    image: "/animations-kids.png",
  },
  // Espaço reservado para o próximo projeto: troque os textos abaixo
  // e descomente a linha "image" quando tiver o banner.
  {
    title: "Novo projeto",
    year: "2026",
    description: "Em breve: a descrição do próximo projeto aparece aqui.",
    tags: ["Em breve"],
    href: "#projetos",
    // image: "/projects/novo-projeto.png",
  },
];
