import Link from 'next/link';
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { Icon, type IconName } from './Icon';
import styles from './Button.module.css';

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  /** Trailing icon; defaults to none. */
  icon?: IconName;
  children: ReactNode;
}

const classes = ({ variant = 'primary', size = 'md', block }: BaseProps, extra?: string) =>
  cx(styles.button, styles[variant], size !== 'md' && styles[size], block && styles.block, extra);

const Trailing = ({ icon }: { icon?: IconName }) =>
  icon ? <Icon name={icon} size={16} className={styles.icon} /> : null;

type ButtonLinkProps = BaseProps & Omit<ComponentProps<typeof Link>, keyof BaseProps>;

export function ButtonLink({
  variant,
  size,
  block,
  icon,
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={classes({ variant, size, block, children }, className)} {...rest}>
      {children}
      <Trailing icon={icon} />
    </Link>
  );
}

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

export function Button({
  variant,
  size,
  block,
  icon,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classes({ variant, size, block, children }, className)}
      {...rest}
    >
      {children}
      <Trailing icon={icon} />
    </button>
  );
}
