'use client';
import { twMerge } from 'tailwind-merge';

const List = ({
  // Required parameters with defaults
  layout_gap = "gap-4",
  layout_direction = "flex-col",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  className,
  children,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  return (
    <div
      className={twMerge(
        'flex',
        layout_direction,
        layout_gap,
        optionalClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default List