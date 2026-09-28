# Modal

Diálogo sobre um overlay para confirmar ações ou pedir informação sem sair da tela.

**O que você fornece**
- `open`, `onClose` (chamado no clique fora e no Escape), `title`, `children` e `actions` (botões, com o primário por último).
- `inline` desenha o modal no fluxo da página, para documentação.

**Regras**
- Padding `component-modal-padding` (24px), gap `component-modal-gap` (16px), raio `component-modal-radius` (12px), sombra `shadow-xl`. Título em `heading-md`.
- O overlay usa `component-modal-overlay` com opacidade de 50%. Essa opacidade não existe no Figma: foi escolhida para esta implementação.
- O título é uma pergunta ou uma ação ("Sair da conta?"). Os botões dizem exatamente o que fazem ("Sair", e não "OK").
