# Tooltip

Dica curta que aparece acima ou abaixo de um elemento no hover e no foco.

**O que você fornece**
- `content`: uma frase curta, sem informação essencial.
- `children`: um único elemento focável (botão ou link), que recebe `aria-describedby`.
- `placement` (`top` ou `bottom`). `open` força o tooltip aberto.

**Regras**
- Fundo `component-tooltip-background` (invertido), padding 4/8px, raio `component-tooltip-radius` (4px), sombra `shadow-lg`, texto em `label-md`.
- Entra em `motion-duration-fast` com `motion-easing-out`.
