import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-auto bg-black rounded-full border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
