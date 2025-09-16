'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const iconButtonClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground hover:bg-primary-light focus:ring-primary-background',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-background',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-background hover:text-primary-foreground focus:ring-primary-background',
        ghost: 'bg-transparent text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-background',
      },
      size: {
        small: 'p-1',
        medium: 'p-2',
        large: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const IconButton = ({
  // Required parameters with defaults
  src = "/images/img_border.svg",
  alt = "Icon",
  border_border = "1px solid #4169e1",
  border_border_radius = "rounded-lg",
  fill_background_color = "bg-transparent",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  onClick,
  type = 'button',
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  // Build Tailwind classes for styling
  const styleClasses = [
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    !variant ? border_border_radius : '',
    !variant && border_border ? `border border-[${border_border?.split(' ')?.[2]}]` : '',
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        iconButtonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain"
      />
    </button>
  )
}

export default IconButton