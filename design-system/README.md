# Foundation-IA

Design system do App - Skill Claude, gerado a partir do arquivo Foundation-IA no Figma.

- Página do design system: https://claude.ai/artifact/HFseCcfWNBPu3ZFTSFsnv4
- Figma: https://www.figma.com/design/uErC7RCfQrjvKyyKsJdAQZ/Foundation-IA

| Pasta / arquivo | Conteúdo |
| --- | --- |
| `tokens.json` | 261 tokens: cores Light/Dark, espaço, raio, borda, sombra, movimento e 11 estilos de texto |
| `components/` | 8 componentes React (`bundle.js`, `bundle.css`, `index.d.ts`), com guia e preview de cada um |
| `fonts/` | Open Sans e Roboto Mono (woff2, subconjunto latino) |

---

Tokens de fundação do **App - Skill Claude**, em três camadas: primitivos, semânticos (Light e Dark) e de componente. Construa sempre sobre os tokens semânticos e de componente. Os primitivos são só a paleta de origem.

## Arquitetura de tokens

- **Primitivos** (`color-brand-*`, `color-neutral-*`, `color-red-*`, `color-yellow-*`, `color-orange-*`, `color-green-*`, `color-blue-*`, `spacing-0`…`spacing-24`, `border-radius-*`). São valores crus em escalas de 0 a 950. Não use direto em telas.
- **Semânticos** (`color-background-*`, `color-foreground-*`, `color-border-*`, `color-action-*`, `color-feedback-*`, `color-brand-accent`, `color-brand-highlight`). Têm um valor por tema e são eles que trocam no Dark.
- **Componente** (`component-button-*`, `component-input-*`, `component-card-*` e outros). Apontam para os semânticos. Um componente novo deve ganhar tokens próprios nessa camada.

## Cor

- A cor da marca é o azul-petróleo `color-brand-700` (#023047). A ação usa `color-action-primary`, que vale brand-700 no tema claro e brand-400 (#219ebc) no escuro.
- Fundos: `color-background-default` na página, `color-background-subtle` para hover e áreas secundárias, `color-background-inverse` para navegação e tooltip.
- Texto: `color-foreground-default` sobre qualquer fundo default ou subtle. Use `color-foreground-inverse` sobre inverse e sobre action-primary.
- Acentos: `color-brand-accent` (laranja #fb8500) e `color-brand-highlight` (amarelo #ffb703) servem para destaque e para o item ativo. Nunca use esses dois como cor de texto sobre fundo claro.
- Feedback: `color-feedback-success`, `-warning`, `-error` e `-info`. Sempre acompanhe a cor com texto ou ícone.
- **Contraste.** Estes pares do Figma ficam abaixo de 4,5:1 e foram mantidos como estão:
  - `color-foreground-muted` sobre fundo claro: 2,1:1
  - `color-feedback-error` como texto: 3,3:1
  - texto branco sobre success, error e info no claro: 2,4, 3,3 e 3,6:1
  - no escuro, badge warning (1,4:1) e item ativo e texto secundário da nav (1,4 e 1,5:1)

  Para texto pequeno importante, prefira `color-foreground-default`.

## Tipografia

- Tudo em **Open Sans**. **Roboto Mono** só para código (`code`).
- Escala: `display-lg` 48 e `display-md` 36 (Bold, altura de linha 1,25); `heading-lg` 30, `heading-md` 24 e `heading-sm` 20 (SemiBold); `body-lg` 18 e `body-md` 16 (Regular, 1,75); `body-sm` 14 (1,5); `label-lg` 14 e `label-md` 12 (SemiBold); `code` 16.
- Botões e labels de campo usam `label-lg`. Badges, tags e tooltips usam `label-md`. Texto digitado usa `body-md`.

## Espaço, raio e borda

- A base é uma grade de 8pt e a escala anda de 4 em 4px (`spacing-1` = 4px … `spacing-24` = 96px).
- Aliases semânticos: `spacing-xs`…`spacing-3xl` para espaço geral, `spacing-inset-*` para padding interno, `spacing-stack-*` para espaço vertical e `spacing-inline-*` para espaço horizontal.
- Raio: `radius-button` e `radius-input` 6px, `radius-card` 8px, `radius-modal` 12px, `radius-tooltip` 4px, `radius-badge` e `radius-tag` em pílula.
- Borda: `border-width-default` 1px em tudo. `border-width-focus` 2px no foco.
- Sombra: `shadow-xs` e `shadow-sm` em repouso, `shadow-md` no hover, `shadow-lg` para popovers e tooltips, `shadow-xl` para modais e `shadow-inner` para superfícies rebaixadas.

## Grid

Grades de layout registradas no Figma:

| Breakpoint | Colunas | Gutter | Alinhamento |
| --- | --- | --- | --- |
| Mobile 375px | 4 | 16px | centralizado |
| Tablet 768px | 8 | 16px | centralizado |
| Desktop 1280px | 12 | 24px | à esquerda, margem de 80px |
| Wide 1440px | 12 | 32px | centralizado |

Todas usam colunas de 64px. A grade base é de 8pt.

## Movimento

- Durações: `motion-duration-instant` 0ms, `-fast` 100ms (hover e press), `-normal` 200ms (foco e troca de estado), `-slow` 300ms, `-slower` 500ms (modais).
- Curvas: `motion-easing-default` para quase tudo, `-out` para elementos que entram, `-in` para os que saem e `-spring` para microinterações.
- Respeite `prefers-reduced-motion`.

## Estados e foco

- Hover escurece a ação (`color-action-primary-hover`) ou aplica `color-background-subtle`. Active usa `color-action-primary-active`.
- Disabled usa `color-background-subtle` com texto `color-foreground-muted`.
- O anel de foco é sólido: 2px em `color-action-primary`, com 2px de afastamento (13,9:1 no claro e 6:1 no escuro).

## Conteúdo e tom

- A interface fala em português do Brasil, trata o usuário por "você" e usa frases curtas e diretas: "Acesse sua conta para continuar onde você parou."
- Botões usam o infinitivo ("Entrar", "Cadastre-se agora"). Erros dizem o problema ("E-mail inválido").
- Maiúscula só no início da frase. Sem emoji na interface.

## Iconografia e marca

O arquivo do Figma não tem logo nem biblioteca de ícones. Escreva o nome do produto em texto, na fonte Open Sans Bold. Não desenhe uma marca.

## O que não veio do Figma

- **Tema escuro de espaço, raio e borda.** No Figma, esses tokens semânticos estão com 0 no modo Dark. Aqui os valores do modo Light valem para os dois temas.
- **Grid.** O texto de documentação do frame Grid diverge dos grid styles (ex.: tablet com gutter de 8px no texto e 16px no style). Esta tabela usa os styles.
- **Opacidade.** O overlay de modal usa 50% de opacidade, um valor escolhido aqui porque o Figma não define nenhum.
- **Componentes.** O arquivo não tem componentes do Figma. Os oito componentes (Button, Input, Card, Badge, Tag, Tooltip, Modal, Nav) foram construídos a partir da coleção Component e do frame Interaction States.
- As notas e os guias descrevem os tokens com palavras próprias.
