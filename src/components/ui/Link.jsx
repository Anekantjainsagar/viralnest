'use client';
import NextLink from'next/link';
import { twMerge } from 'tailwind-merge';

const Link = ({
  // Required parameters with defaults
  href = "/",
  text_font_size = "text-base",
  text_font_family = "Lato",
  text_font_weight = "font-medium",
  text_line_height = "leading-normal",
  text_text_align = "left",
  text_color = "text-text-muted",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  className,
  children,
  onClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    'transition-colors duration-200 hover:text-primary-background',
  ].filter(Boolean).join(' ')

  return (
    <NextLink
      href={href}
      onClick={onClick}
      style={customStyles}
      className={twMerge(
        styleClasses,
        optionalClasses,
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link