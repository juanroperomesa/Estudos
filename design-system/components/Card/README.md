# Card

Superfície com borda que agrupa um título, uma descrição e conteúdo relacionado.

**O que você fornece**
- `title`, `description`, `children` para conteúdo livre e `footer` para badges, tags ou botões.
- `href` ou `onClick` transformam o card inteiro em link ou botão e ativam o hover `component-card-background-hover`.

**Regras**
- Padding `component-card-padding` (24px), gap `component-card-gap` (16px), raio `component-card-radius` (8px), borda de 1px em `component-card-border`.
- Título em `heading-sm`, descrição em `body-sm` com `component-card-description`.
- Não coloque botões dentro de um card que já é clicável.
