'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';

const textAreaClasses = cva(
  'w-full resize-vertical transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input-background border-input-border text-text-disabled placeholder:text-text-placeholder',
        outline: 'bg-transparent border-2 border-primary-background text-text-primary placeholder:text-text-muted',
        filled: 'bg-background-card border-0 text-text-primary placeholder:text-text-muted',
      },
      size: {
        small: 'text-sm px-3 py-2 min-h-[80px]',
        medium: 'text-base px-4 py-3 min-h-[100px]',
        large: 'text-lg px-5 py-4 min-h-[120px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

const TextArea = forwardRef(({
  // Required parameters with defaults
  placeholder = "Tell us about your project or ask us any query..",
  text_font_size = "text-base",
  text_font_family = "Lato",
  text_font_weight = "font-normal",
  text_line_height = "leading-snug",
  text_text_align = "left",
  text_color = "text-text-disabled",
  fill_background_color = "bg-input-background",
  border_border = "1px solid #ffffff0c",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  rows = 4,
  ...props
}, ref) => {
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
    !variant ? fill_background_color : '',
    !variant ? border_border_radius : '',
    !variant && border_border ? `border border-[${border_border?.split(' ')?.[2]}]` : '',
  ]?.filter(Boolean)?.join(' ')

  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      rows={rows}
      style={customStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
})

TextArea.displayName = 'TextArea'

export default TextArea