import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const divVariants = cva('font-NanumSquare', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      signIn: 'flex flex-col justify-between h-screen bg-white',
      main: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  asChild?: boolean
}

const Layout = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    return (
      <div
        className={cn(divVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Layout.displayName = 'Layout'

export { Layout, divVariants }
