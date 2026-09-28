/* @ds-bundle: {"format":4,"namespace":"FoundationIA","components":[{"name":"Button"},{"name":"Input"},{"name":"Card"},{"name":"Badge"},{"name":"Tag"},{"name":"Tooltip"},{"name":"Modal"},{"name":"Nav"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function omit(p, keys) { var o = {}; for (var k in p) if (keys.indexOf(k) < 0) o[k] = p[k]; return o; }

  function Button(p) {
    var variant = p.variant || "primary";
    var rest = omit(p, ["variant", "className", "children", "icon", "fullWidth"]);
    return h("button", Object.assign({ type: "button" }, rest, {
      className: cx("fia-btn", "fia-btn--" + variant, p.fullWidth && "fia-btn--full", p.className)
    }), p.icon ? h("span", { className: "fia-btn__icon", "aria-hidden": true }, p.icon) : null, p.children);
  }

  var uid = 0;
  function Input(p) {
    var ref = React.useRef(null);
    if (ref.current === null) ref.current = p.id || "fia-input-" + (++uid);
    var id = ref.current;
    var msgId = id + "-msg";
    var msg = p.error || p.helperText;
    var rest = omit(p, ["label", "helperText", "error", "className", "id"]);
    return h("div", { className: cx("fia-field", p.error && "fia-field--error", p.disabled && "fia-field--disabled", p.className) },
      p.label ? h("label", { className: "fia-field__label", htmlFor: id }, p.label) : null,
      h("input", Object.assign({ className: "fia-input", type: "text" }, rest, {
        id: id, "aria-invalid": p.error ? true : undefined, "aria-describedby": msg ? msgId : undefined
      })),
      msg ? h("p", { id: msgId, className: p.error ? "fia-field__error" : "fia-field__helper" }, msg) : null);
  }

  function Card(p) {
    var interactive = !!p.onClick || !!p.href;
    var tag = p.href ? "a" : (p.onClick ? "button" : "div");
    var rest = omit(p, ["title", "description", "className", "children", "footer"]);
    return h(tag, Object.assign({}, rest, { className: cx("fia-card", interactive && "fia-card--interactive", p.className) }),
      p.title ? h("h3", { className: "fia-card__title" }, p.title) : null,
      p.description ? h("p", { className: "fia-card__description" }, p.description) : null,
      p.children,
      p.footer ? h("div", { className: "fia-card__footer" }, p.footer) : null);
  }

  function Badge(p) {
    return h("span", { className: cx("fia-badge", "fia-badge--" + (p.tone || "neutral"), p.className) }, p.children);
  }

  function Tag(p) {
    var rest = omit(p, ["variant", "className", "children", "onRemove"]);
    return h("span", Object.assign({}, rest, { className: cx("fia-tag", "fia-tag--" + (p.variant || "default"), p.className) }),
      p.children,
      p.onRemove ? h("button", { type: "button", className: "fia-tag__remove", "aria-label": "Remover", onClick: p.onRemove }, "×") : null);
  }

  function Tooltip(p) {
    var s = React.useState(!!p.open); var open = p.open != null ? p.open : s[0];
    var ref = React.useRef(null);
    if (ref.current === null) ref.current = "fia-tip-" + (++uid);
    var show = function () { s[1](true); }, hide = function () { s[1](false); };
    return h("span", { className: "fia-tooltip-wrap", onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide },
      React.isValidElement(p.children) ? React.cloneElement(p.children, { "aria-describedby": ref.current }) : p.children,
      h("span", { role: "tooltip", id: ref.current, className: cx("fia-tooltip", "fia-tooltip--" + (p.placement || "top"), open && "fia-tooltip--open") }, p.content));
  }

  function Modal(p) {
    React.useEffect(function () {
      if (!p.open || !p.onClose) return;
      var onKey = function (e) { if (e.key === "Escape") p.onClose(); };
      document.addEventListener("keydown", onKey);
      return function () { document.removeEventListener("keydown", onKey); };
    }, [p.open, p.onClose]);
    if (!p.open) return null;
    return h("div", { className: cx("fia-modal-root", p.inline && "fia-modal-root--inline") },
      h("div", { className: "fia-modal__overlay", onClick: p.onClose }),
      h("div", { className: "fia-modal", role: "dialog", "aria-modal": true, "aria-label": p.title },
        p.title ? h("h2", { className: "fia-modal__title" }, p.title) : null,
        h("div", { className: "fia-modal__body" }, p.children),
        p.actions ? h("div", { className: "fia-modal__actions" }, p.actions) : null));
  }

  function Nav(p) {
    var items = p.items || [];
    return h("nav", { className: cx("fia-nav", p.className), "aria-label": p.label || "Principal" },
      p.brand ? h("div", { className: "fia-nav__brand" }, p.brand) : null,
      h("ul", { className: "fia-nav__list" }, items.map(function (it, i) {
        var active = it.active || (p.activeKey != null && it.key === p.activeKey);
        return h("li", { key: it.key || i },
          h("a", { href: it.href || "#", onClick: it.onClick, className: cx("fia-nav__item", active && "fia-nav__item--active"), "aria-current": active ? "page" : undefined }, it.label));
      })),
      p.end ? h("div", { className: "fia-nav__end" }, p.end) : null);
  }

  window.FoundationIA = Object.assign(window.FoundationIA || {}, {
    Button: Button, Input: Input, Card: Card, Badge: Badge, Tag: Tag, Tooltip: Tooltip, Modal: Modal, Nav: Nav
  });
})();
