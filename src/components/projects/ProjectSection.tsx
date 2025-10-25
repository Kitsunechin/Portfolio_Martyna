import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

const ProjectSection = ({
  title,
  children,
  className,
  variant = "default"
}: ProjectSectionProps) => {
  return (
    <section className={cn(
      "py-16 px-6 md:px-10 relative overflow-hidden text-white z-10",
      className
    )}>
      <h2 className="text-2xl font-semibold mb-8 relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white/20 after:bottom-[-4px] after:left-0">
        {title}
      </h2>
      <div className="relative">
        {children}
      </div>
    </section>
  );
};

export default ProjectSection;
