
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
  color: "yellow" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  animation?: "float" | "float-alt" | "none";
  className?: string;
}

const Bubble = ({ 
  color, 
  size = "md", 
  animation = "float", 
  className,
  ...props 
}: BubbleProps) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-36 w-36",
    xl: "h-48 w-48"
  };

  const animationClasses = {
    float: "animate-float",
    "float-alt": "animate-float-alt",
    none: ""
  };

  return (
    <div
      className={cn(
        "rounded-full absolute z-10 blur-sm",
        `bg-bubble-${color}`,
        sizeClasses[size],
        animationClasses[animation],
        className
      )}
      {...props}
    />
  );
};

export default Bubble;
