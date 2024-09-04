import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const divVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      signIn: 'flex flex-col justify-between h-screen bg-white',
      authentication:
        'flex flex-col h-screen bg-white w-full max-w-md p-6 rounded-lg mx-auto text-black',
      findId: 'flex flex-col h-screen justify-center items-center',
      findPw: 'flex flex-col p-6 mt-10',
      submitDiv:
        'fixed bottom-0 left-0 right-0 px-4 py-4 disabled:bg-slate-300 border-t-2 bg-white',
      main: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  asChild?: boolean;
}

const Layout = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    return (
      <div
        className={cn(divVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Layout.displayName = 'Layout';

export { Layout, divVariants };
