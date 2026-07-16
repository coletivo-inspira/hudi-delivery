# Hudi - Delivery System

Landing page oficial e arquitetura de front-end do **Hudi**: uma plataforma completa de cardápio digital, gestão de pedidos e automação de atendimento para restaurantes e deliveries.

O projeto é uma aplicação web de alta performance focada em conversão, construída com Next.js e preparada para escalar.

## Rotas públicas

| Rota | Finalidade |
| --- | --- |
| `/` | Landing page principal, focada na conversão de novos restaurantes. |
| `/planos/` | Tabela detalhada de preços e funcionalidades (Free vs Pro). |
| `/funcionalidades/` | Exploração técnica do PDV, Cardápio Digital e Integrações. |

## Estratégia de produto e design

O site se posiciona como a solução definitiva para a gestão de restaurantes. A arquitetura visual utiliza cores que remetem ao apetite e urgência (como variações de Laranja/Vermelho ou um Amarelo vibrante), contrastando com um ambiente de gestão (dashboard) clean e escuro para não cansar a vista do operador.

- **Hudi Cardápio** — interface mobile-first para o cliente final fazer pedidos.
- **Hudi Gestor** — painel Kanban para a cozinha e recepção aprovarem e despacharem pedidos.
- **Hudi Moto** — roteirização e gestão da frota de entregadores.

## Tecnologia

- Next.js 16 com App Router;
- React 19 e TypeScript estrito;
- Estilização responsiva com Tailwind CSS (ou sua solução preferida);
- Vitest + Testing Library para testes unitários de componentes críticos (ex: formulário de onboarding);
- GitHub Actions para CI/CD continuo.

## Começar localmente

Pré-requisito: Node.js 24 e npm 11 (ou versões compatíveis).

```bash
npm ci
npm run dev
```
Abra `http://localhost:9009` no navegador. Para gerar e testar a build de produção localmente:

```bash
npm run build
npm run start
```

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com hot-reload. |
| `npm run typecheck` | Executa a checagem estrita de TypeScript. |
| `npm test` | Executa os testes unitários e de integração. |
| `npm run build` | Gera a versão otimizada de produção. |
| `npm run check` | Roda tipagem, testes e build para garantia de qualidade antes de commits. |

## Arquitetura

```text
src/
  app/
    page.tsx                 # composição da landing page (Hero, Showcase, etc)
    planos/page.tsx          # rota da página de preços
    globals.css              # tokens de marca e estilos globais
  components/
    brand/                   # logotipos do sistema e variações
    layout/                  # cabeçalho (SiteHeader) e rodapé (SiteFooter) compartilhados
    sections/                # blocos de construção da página (Hero, ProductShowcase, Testimonials, Pricing)
    ui/                      # botões, inputs, cards genéricos (Design System interno)
  data/site-content.ts       # dados genéricos (preços, FAQ, depoimentos, contatos)
  types/site.ts              # contratos e interfaces TypeScript
tests/                       # validações de fluxo e renderização
docs/                        # documentações auxiliares do time
```

Todo o conteúdo em texto (planos, perguntas frequentes, depoimentos) está isolado em `src/data/site-content.ts` para facilitar atualizações sem a necessidade de alterar a marcação dos componentes estruturais.

## Documentação de componentes

Para manter a consistência visual e a reusabilidade, os blocos principais da Landing Page possuem documentação interna.

| Componente | Responsabilidade |
| --- | --- |
| `SiteHeader` | Navegação sticky, logo e CTA "Criar Conta". |
| `Hero` | Primeira dobra da página: proposta de valor, input de captura e mockup duplo (Celular + PDV). |
| `ProductShowcase` | Seções em zigue-zague detalhando as features (Cardápio, WhatsApp, Gestão). |
| `PricingTable` | Tabela comparativa interativa entre planos Gratuitos e Pagos. |
| `TestimonialCarousel` | Prova social: slider ou grid com avaliações de donos de restaurante. |
| `FinalCta` | Último esforço de conversão na base da página antes do rodapé. |

## Publicação automática e CI/CD

O fluxo de publicação executa testes, linting e typechecking em todas as PRs direcionadas para a branch `main`. A publicação em produção só ocorre após a aprovação de todos os steps de segurança.

## Acessibilidade e responsividade

* **Mobile First:** Como muitos donos de delivery administram o negócio pelo celular, toda a landing page é otimizada rigorosamente para telas pequenas.
* Imagens de mockups possuem descrições de contexto `alt` para leitores de tela.
* Formulários de conversão possuem contraste validado e foco visível via teclado.
