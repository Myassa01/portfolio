import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const baseClasses =
  'inline-flex items-center gap-2 font-semibold text-sm rounded-xl px-6 py-3.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_var(--color-accent-soft)]',
  secondary:
    'bg-surface border border-line-strong text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5',
  ghost: 'text-ink-muted hover:text-ink hover:bg-white/5',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

export function LinkButton({ variant = 'primary', className = '', children, ...props }: LinkButtonProps) {
  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
