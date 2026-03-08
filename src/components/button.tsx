import React, { type ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    variant?: 'primary' | 'secondary'
}

function Button({ children, variant = 'primary' }: ButtonProps) {
    const base = 'px-6 py-3 rounded-lg font-semibold transition';
    const styles = {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    };
    return (
    <button className={`${base} ${styles[variant]}`}>
        {children}
    </button>
  )
}

export default Button