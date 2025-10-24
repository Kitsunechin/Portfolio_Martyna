"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

// Types and Interfaces
export interface ProjectCard {
  id: string
  category: string
  title: string
  description?: string
  images: string[]
  link?: string
  tags?: string[]
}

export interface ProjectShowcaseProps {
  projects: ProjectCard[]
  className?: string
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  showCategory?: boolean
  showDescription?: boolean
  showTags?: boolean
}

// Individual Project Card Component
const ProjectCard: React.FC<{
  project: ProjectCard
  showCategory: boolean
  showDescription: boolean
  showTags: boolean
  index: number
}> = ({ project, showCategory, showDescription, showTags, index }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleClick}
      whileHover={{ y: -4 }}
    >
      <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
        {/* Category Tag */}
        {showCategory && (
          <div className="px-6 pt-6 pb-2">
            <span className="inline-block px-3 py-1 bg-[#DDC7FF] text-black text-xs font-medium uppercase tracking-wider rounded-full">
              {project.category}
            </span>
          </div>
        )}

        {/* Project Images */}
        <div className="px-6 pb-4">
          <div className={cn(
            "grid gap-3",
            project.images.length === 1 && "grid-cols-1",
            project.images.length === 2 && "grid-cols-2",
            project.images.length >= 3 && "grid-cols-2"
          )}>
            {project.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className={cn(
                  "relative overflow-hidden rounded-lg bg-gray-700",
                  project.images.length === 1 && "aspect-video",
                  project.images.length === 2 && "aspect-square",
                  project.images.length >= 3 && imageIndex === 0 && "col-span-2 aspect-video",
                  project.images.length >= 3 && imageIndex > 0 && "aspect-square"
                )}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${imageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="px-6 pb-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#DDC7FF] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          {showDescription && project.description && (
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Tags */}
          {showTags && project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link Indicator */}
          {project.link && (
            <div className="flex items-center text-[#DDC7FF] text-sm font-medium group-hover:text-white transition-colors duration-300">
              <span>View project</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Main Project Showcase Component
export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  className,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  showCategory = true,
  showDescription = true,
  showTags = true
}) => {
  const gridCols = {
    mobile: `grid-cols-${columns.mobile || 1}`,
    tablet: `md:grid-cols-${columns.tablet || 2}`,
    desktop: `lg:grid-cols-${columns.desktop || 3}`
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={cn(
          "grid gap-8",
          gridCols.mobile,
          gridCols.tablet,
          gridCols.desktop
        )}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              showCategory={showCategory}
              showDescription={showDescription}
              showTags={showTags}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Export default
export default ProjectShowcase
