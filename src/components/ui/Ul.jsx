'use client';
import { twMerge } from 'tailwind-merge';

const Ul = ({
  // Required parameters with defaults
  spacing = "normal", // 'small', 'normal', 'large'
  
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
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  const spacingClasses = {
    small: 'space-y-2',
    normal: 'space-y-4',
    large: 'space-y-6'
  }

  return (
    <ul
      className={twMerge(
        'list-none',
        spacingClasses?.[spacing] || spacingClasses?.normal,
        optionalClasses,
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

export default Ul