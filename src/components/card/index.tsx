import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
};
const paddingMap = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
};
const variantMap = {
  default: 'border-gray-200 border',
  outlined: 'border-gray-500  hover:border-gray-700 border',
  elevated: 'shadow  hover:shadow-xl',
};
const radiusMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export default function Card({ children, variant = 'default', padding = 'md', radius = 'md', className }: CardProps) {
  const CardClass = clsx('btn', variantMap[variant], paddingMap[padding], radiusMap[radius], className);

  return <div className={CardClass}>{children}</div>;
}
