export interface FloatingStarProps {
  size?: 'small' | 'medium' | 'large';
  left: number;
  top: number;
  moveX: number;
  moveY: number;
  duration: number;
}

export const starSizeClasses = {
  small: 'w-1 h-1',
  medium: 'w-1.5 h-1.5',
  large: 'w-2 h-2'
} as const;

export const starOpacityClasses = {
  small: 'opacity-60',
  medium: 'opacity-70',
  large: 'opacity-80'
} as const;

