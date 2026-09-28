# Badge

Rótulo curto de status em pílula, com cinco tons: success, warning, error, info e neutral.

**O que você fornece**
- `tone` e `children`: uma ou duas palavras ("Ativo", "Pendente").

**Regras**
- Padding `component-badge-padding-y`/`-x` (4px), raio `component-badge-radius` (pílula), texto em `label-md`.
- Sempre escreva o status em texto: a cor sozinha não basta.
- Contraste no tema claro: o texto branco sobre success (2,4:1), error (3,3:1) e info (3,6:1) fica abaixo de 4,5:1. No tema escuro, o warning usa texto branco sobre amarelo (1,4:1). Os valores foram mantidos como estão no Figma.
