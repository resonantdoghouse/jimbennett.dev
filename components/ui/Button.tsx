import React from "react";
import { useSound } from "../../hooks/useSound";
import { SoundType } from "../../types";

interface ButtonProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  soundType?: SoundType;
  variant?: "primary" | "icon";
}

const Button: React.FC<ButtonProps> = ({
  children,
  as = "button",
  soundType = "click",
  variant = "primary",
  className = "",
  ...props
}) => {
  const { playSound } = useSound();

  const handleMouseEnter = () => {
    playSound("hover");
  };

  const handleClick = (e: React.MouseEvent) => {
    playSound(soundType);
    if (props.onClick)
      props.onClick(
        e as React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
      );
  };

  const baseStyles =
    "transition-all duration-200 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-secondary focus-visible:ring-offset-2";

  const variants = {
    primary: `
      inline-flex items-center gap-2 px-7 py-3.5 
      bg-accent text-white border-2 border-accent 
      font-mono font-bold text-sm tracking-wide
      pixel-clip
      hover:bg-card hover:text-accent hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent-secondary)]
      active:translate-y-0 active:shadow-none
    `,
    icon: `
      p-2 rounded border-2 border-border text-text-main bg-transparent
      hover:bg-accent hover:text-white hover:border-accent
      flex items-center justify-center
    `,
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <a
        className={combinedClass}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
