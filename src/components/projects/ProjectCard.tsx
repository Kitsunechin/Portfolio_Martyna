
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Bubble from "@/components/ui/Bubble";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  tags?: string[];
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  slug, 
  image, 
  tags = [],
  index
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-6 items-center py-10",
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
        />
        {isEven ? (
          <Bubble 
            color="green" 
            size="lg"
            animation="float-alt"
            className="bottom-[-40px] right-[-40px] opacity-80 -z-10"
          />
        ) : (
          <Bubble 
            color="yellow" 
            size="lg"
            animation="float"
            className="bottom-[-40px] left-[-40px] opacity-80 -z-10"
          />
        )}
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-medium text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-sm bg-gray-800 text-white rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/project/${slug}`}>
          <Button 
            variant="outline" 
            className="mt-4 border-[#DDC7FF] hover:bg-[#DDC7FF] hover:text-black transition-colors"
          >
            View project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
