# Nav

Barra de navegação horizontal com marca, links e uma área à direita.

**O que você fornece**
- `brand`, `items` (`{key, label, href | onClick}`), `activeKey` e `end` (usuário ou ações).

**Regras**
- Fundo `component-nav-background` (invertido), padding 8/24px, gap `component-nav-gap` (16px).
- O item ativo usa `component-nav-item-active` (amarelo de destaque) e `aria-current="page"`.
- Contraste no tema escuro: o fundo fica branco e o amarelo ativo dá 1,4:1, como está no Figma.
