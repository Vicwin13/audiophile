import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'left',
  iconAlt = 'icon',
  iconWidth = 20,
  iconHeight = 20,
  fullWidth = false,
  href,
  target,
  rel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[var(--main-orange)] text-white hover:bg-[var(--sec-orange)] focus:ring-[var(--main-orange)]',
    secondary: 'bg-transparent hover:bg-black text-black hover:text-white font-(--manrope) border border-black focus:ring-[var(--sec-black)]',
    filled: 'bg-black text-white hover:bg-white hover:text-black',
    outline: ' text-black hover:text-[var(--main-orange)]  font-(--manrope)',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'w-[160px] h-[48px] py-[15px] px-[31px] text-sm',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${widthClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const iconElement = icon && (
    <Image
      src={icon}
      alt={iconAlt}
      width={iconWidth}
      height={iconHeight}
      className="object-contain"
    />
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{iconElement}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{iconElement}</span>}
    </>
  );

  if (href) {
    if (disabled) {
      return (
        <span aria-disabled className={combinedClasses}>
          {content}
        </span>
      );
    }
    // security for new tab links
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <Link href={href} target={target} rel={safeRel} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;