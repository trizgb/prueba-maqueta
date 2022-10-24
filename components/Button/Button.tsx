import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';

export interface ButtonProps {
  children: ReactNode;
  id?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  id,
  className = '',
  type = 'button',
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
}) => {
  const variantClass: any = {
    primary: 'primary',
    secondary: 'secondary',
  };

  const buttonClassName = `button button--${variantClass[variant]} ${className}`;

  const content = children;

  if (href) {
    return (
      <a
        id={id}
        className={buttonClassName}
        href={href}
        target={target}
        rel={rel}
        tabIndex={0}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={buttonClassName}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;
