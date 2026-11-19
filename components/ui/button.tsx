import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/common'

// Meridian adoption: shadcn's Button API is preserved (variant/size/asChild,
// plus kongkow's `ghost-action`) but the classes now render Meridian's `.ef-btn`
// component so buttons across every surface share one source of truth. `.ef-btn`
// supplies layout, radius, sizing, hover, focus-ring, disabled and active-scale.
const buttonVariants = cva(
  "ef-btn shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'ef-btn--primary',
        destructive: 'ef-btn--destructive',
        outline: 'ef-btn--outline',
        secondary: 'ef-btn--secondary',
        ghost: 'ef-btn--ghost',
        'ghost-action': 'ef-btn--ghost',
        link: 'ef-btn--link',
      },
      size: {
        default: 'ef-btn--md',
        sm: 'ef-btn--sm',
        lg: 'ef-btn--lg',
        icon: 'ef-btn--icon',
        'icon-sm': 'ef-btn--icon-sm',
        'icon-lg': 'ef-btn--icon-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
