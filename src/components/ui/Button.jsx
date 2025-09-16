'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground hover:bg-primary-light focus:ring-primary-background',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-background',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-background hover:text-primary-foreground focus:ring-primary-background',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const Button = ({
  // Required parameters with defaults
  text = "Contact Us",
  text_font_size = "text-md",
  text_font_family = "Lato",
  text_font_weight = "font-bold",
  text_line_height = "leading-relaxed",
  text_text_align = "left",
  text_color = "text-primary-background",
  border_border = "1px solid #4169e1",
  border_border_radius = "rounded-sm",
  effect_box_shadow = "shadow-[2px_4px_8px_#4169e1]",
  
  // Optional parameters (no defaults)
  fill_background_color,
  layout_width,
  padding,
  position,
  margin,
  layout_gap,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidFillBackground = fill_background_color && typeof fill_background_color === 'string' && fill_background_color?.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== ''

  const optionalClasses = [
    hasValidFillBackground ? `bg-[${fill_background_color}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
  ]?.filter(Boolean)?.join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    // Only apply these if not using variant system
    !variant ? border_border_radius : '',
    !variant ? effect_box_shadow : '',
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
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button