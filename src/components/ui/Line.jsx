'use client';
import { twMerge } from 'tailwind-merge';

const Line = ({
  // Required parameters with defaults
  fill_background_color = "bg-border-secondary",
  
  // Optional parameters (no defaults)
  layout_width,
  layout_height,
  margin,
  position,
  
  // Standard React props
  className,
  orientation = 'horizontal', // 'horizontal' or 'vertical'
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidHeight = layout_height && typeof layout_height === 'string' && layout_height?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : (orientation === 'horizontal' ? 'w-full' : 'w-[2px]'),
    hasValidHeight ? `h-[${layout_height}]` : (orientation === 'vertical' ? 'h-full' : 'h-[1px]'),
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  return (
    <div
      className={twMerge(
        fill_background_color,
        optionalClasses,
        className
      )}
      {...props}
    />
  )
}

export default Line