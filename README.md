# Hudi Delivery

Landing page estática da Hudi Delivery, criada com Next.js 16, React 19 e Tailwind CSS 4. O projeto apresenta cardápio digital, atendimento com IA no WhatsApp e gestão de pedidos para restaurantes.

## Rotas

- `/` — landing page completa.
- `/planos/` — comparação dedicada de planos.

## Stack

- Next.js 16 com App Router e exportação estática;
- Tailwind CSS 4 com tokens de marca em `src/app/globals.css`;
- Lucide React para ícones;
- Motion para entradas suaves com suporte a `prefers-reduced-motion`;
- Node Test Runner para verificações leves de estrutura, contraste e deploy.

## Desenvolvimento

Requer Node.js 24 e npm 11 (ou versões compatíveis).

```bash
npm ci
npm run dev
```

O ambiente local abre em `http://localhost:9009`.

## Qualidade e build

```bash
npm run check
```

O comando executa ESLint, TypeScript, testes e a exportação estática. O resultado publicável fica em `out/`.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` valida, exporta e publica o site automaticamente após um push na branch `main`.

No GitHub, configure **Settings → Pages → Source** como **GitHub Actions**. Não use **Deploy from a branch** com a pasta `/docs` (nem com `/` na raiz): esse modo aciona o builder Jekyll legado (`pages-build-deployment`), que falha neste repositório porque o site é um export estático do Next.js em `out/`, não um site Jekyll.

O `basePath` é recebido automaticamente da action oficial do GitHub Pages, então a aplicação funciona sob o caminho `/hudi-delivery/` sem URLs de assets quebradas. O domínio customizado fica no `CNAME` na raiz do repositório.

## Estrutura

```text
src/app/                 rotas, metadados e tokens globais
src/components/ui/       Button, GlassCard, Accordion e Reveal
src/components/layout/   cabeçalho e rodapé compartilhados
src/components/sections/ seções de conversão da landing
src/data/                 conteúdo editável de produtos, planos e FAQ
tests/                    verificações leves sem dependências adicionais
```

O site foi desenhado mobile-first, com foco visível, controles de toque de pelo menos 44px, HTML semântico e combinações principais de texto em conformidade com WCAG AA.
