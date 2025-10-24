
import { useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.3, className = "" }: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${offset * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
