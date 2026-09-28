# Button

Botão de ação em três variantes: primary, secondary e ghost, mais o estado disabled.

**Quando usar**
- `primary` para a ação principal da tela. Use no máximo um por vista (ex.: "Entrar").
- `secondary` para uma ação alternativa de mesmo nível (ex.: "Continuar com Google").
- `ghost` para ações de baixa ênfase (ex.: "Cancelar" em modais).

**O que você fornece**
- `children`: o rótulo, curto e no infinitivo ("Entrar", "Salvar").
- `variant`, `disabled`, `onClick`, `type`. `icon` é opcional e vem antes do texto; `fullWidth` estica o botão (formulários mobile).

**Regras**
- Padding `component-button-padding-y`/`-x` (8/16px), raio `component-button-radius` (6px), texto em `label-lg`.
- Hover e active escurecem o primário (`action-primary-hover`, `-active`). Secundário e ghost ganham fundo `background-subtle` no hover.
- O foco usa um anel sólido de 2px em `color-action-primary` (13,9:1 no claro e 6:1 no escuro).
- Não use o botão desabilitado para esconder uma ação sem explicação: diga por que ela está indisponível.
