# Input

Campo de texto com label, texto de ajuda e mensagem de erro, nos estados default, filled, focus, error e disabled.

**O que você fornece**
- `label` (sempre, a não ser que haja outro rótulo visível), `placeholder` com exemplo real ("seu@email.com").
- `helperText` para instruções; `error` para a mensagem de erro, que substitui o helper e marca `aria-invalid`.
- Qualquer atributo nativo de `<input>` (`type`, `value`, `onChange`, `disabled`, `name`).

**Regras**
- Label em `label-lg`, texto digitado em `body-md`, helper e erro em `body-sm`. O espaço entre eles é `component-input-gap` (8px).
- No foco, a borda vai para 2px (`component-input-border-width-focus`) em `component-input-border-focus`.
- O texto de erro diz o que está errado e como corrigir ("E-mail inválido").
- Contraste: o placeholder e o helper usam `foreground-muted` (cerca de 2,1:1 no tema claro) e o erro usa `feedback-error` (3,3:1). Os dois ficam abaixo de 4,5:1, como está no Figma.
