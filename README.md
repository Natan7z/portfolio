# Portfólio do Natan

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalizar

- **Todo o conteúdo** (nome, textos, links, tecnologias, projetos) fica em `lib/data.ts`.
- **Foto**: coloque `natan.jpg` na pasta `public/`. Sem o arquivo, aparece a inicial do nome.
- **Imagens de projetos**: coloque em `public/projects/` e descomente o campo `image` em `lib/data.ts`.
- **Cores**: `tailwind.config.ts` (`accent` e `ink`).

## Publicar na Vercel

Suba o projeto para um repositório no GitHub e importe em https://vercel.com/new.
