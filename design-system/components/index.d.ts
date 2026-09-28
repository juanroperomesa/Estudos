import * as React from "react";

/** Foundation-IA components, exposed on window.FoundationIA. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: main action (one per view). secondary: alternative action. ghost: low-emphasis. Default "primary". */
  variant?: "primary" | "secondary" | "ghost";
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Stretch to the container width. */
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label above the field. */
  label?: string;
  /** Help text shown under the field. Hidden when `error` is set. */
  helperText?: string;
  /** Error message; turns the border red and sets aria-invalid. */
  error?: string;
}
export declare function Input(props: InputProps): JSX.Element;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Row under the content: badges, tags or buttons. */
  footer?: React.ReactNode;
  /** Makes the whole card a link. */
  href?: string;
  /** Makes the whole card a button. */
  onClick?: React.MouseEventHandler;
}
export declare function Card(props: CardProps): JSX.Element;

export interface BadgeProps {
  /** Default "neutral". */
  tone?: "success" | "warning" | "error" | "info" | "neutral";
  children: React.ReactNode;
  className?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default "default". */
  variant?: "default" | "brand";
  /** Shows a remove button when set. */
  onRemove?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;

export interface TooltipProps {
  /** Tooltip text. */
  content: React.ReactNode;
  /** The trigger: one focusable element. */
  children: React.ReactElement;
  /** Default "top". */
  placement?: "top" | "bottom";
  /** Force open (controlled). */
  open?: boolean;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

export interface ModalProps {
  open: boolean;
  /** Called on overlay click and Escape. */
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  /** Buttons row, right-aligned. */
  actions?: React.ReactNode;
  /** Render in the flow instead of fixed to the viewport (for docs and previews). */
  inline?: boolean;
}
export declare function Modal(props: ModalProps): JSX.Element | null;

export interface NavItem { key?: string; label: React.ReactNode; href?: string; onClick?: React.MouseEventHandler; active?: boolean; }
export interface NavProps {
  brand?: React.ReactNode;
  items: NavItem[];
  /** Key of the active item. */
  activeKey?: string;
  /** Right-side slot: user, actions. */
  end?: React.ReactNode;
  /** aria-label, default "Principal". */
  label?: string;
  className?: string;
}
export declare function Nav(props: NavProps): JSX.Element;
