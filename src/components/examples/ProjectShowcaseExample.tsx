"use client"

import React from "react"
import { ProjectShowcase, ProjectCard } from "@/components/projects/ProjectShowcase"

// Sample project data
const sampleProjects: ProjectCard[] = [
  {
    id: '1',
    category: 'UX/UI DESIGN',
    title: 'Search and filtering: finding the perfect game feel effortless',
    description: 'A comprehensive search and filtering system designed to help users discover their ideal gaming experiences with intuitive controls and smart recommendations.',
    images: [
      'https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8'
    ],
    link: '/projects/game-search',
    tags: ['Search', 'Filtering', 'Gaming', 'UX Design']
  },
  {
    id: '2',
    category: 'UX/UI DESIGN',
    title: 'Real-world wellness activities right into users\' pockets',
    description: 'A mobile wellness app that brings real-world activities and mindfulness practices directly to users, promoting healthy habits and mental well-being.',
    images: [
      'https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D'
    ],
    link: '/projects/wellness-app',
    tags: ['Wellness', 'Mobile', 'Health', 'UI Design']
  },
  {
    id: '3',
    category: 'WEB DESIGN',
    title: 'Redesigning the tournament experience',
    description: 'A complete redesign of the tournament management system, focusing on user experience and streamlined workflows for organizers and participants.',
    images: [
      'https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D'
    ],
    link: '/projects/tournament-redesign',
    tags: ['Tournament', 'Redesign', 'Web', 'UX']
  },
  {
    id: '4',
    category: 'UX/UI DESIGN',
    title: 'Native personal details page',
    description: 'A native mobile interface for managing personal details, featuring clean design and intuitive user interactions.',
    images: [
      'https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D'
    ],
    link: '/projects/personal-details',
    tags: ['Native', 'Mobile', 'Personal', 'Details']
  },
  {
    id: '5',
    category: 'WEB DESIGN',
    title: 'Designed & implemented new website',
    description: 'A complete website redesign and implementation, focusing on modern aesthetics and optimal user experience across all devices.',
    images: [
      'https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8'
    ],
    link: '/projects/website-redesign',
    tags: ['Website', 'Redesign', 'Implementation', 'Web']
  },
  {
    id: '6',
    category: 'UX/UI DESIGN',
    title: 'Chaos dpt - Internal tool redesign',
    description: 'An internal tool redesign for the chaos department, improving workflow efficiency and user satisfaction.',
    images: [
      'https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D'
    ],
    link: '/projects/chaos-dpt',
    tags: ['Internal', 'Tool', 'Redesign', 'Workflow']
  }
]

// Example 1: Basic Usage
export function BasicProjectShowcase() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects where I've designed solutions to improve user experience and business metrics.
          </p>
        </div>
      </div>
      
      <ProjectShowcase 
        projects={sampleProjects}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
      />
    </div>
  )
}

// Example 2: Custom Configuration
export function CustomProjectShowcase() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
        </div>
      </div>
      
      <ProjectShowcase 
        projects={sampleProjects.slice(0, 4)}
        columns={{ mobile: 1, tablet: 2, desktop: 2 }}
        showDescription={false}
        showTags={true}
      />
    </div>
  )
}

// Example 3: Single Column Layout
export function SingleColumnProjectShowcase() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Case Studies
          </h2>
        </div>
      </div>
      
      <ProjectShowcase 
        projects={sampleProjects.slice(0, 3)}
        columns={{ mobile: 1, tablet: 1, desktop: 1 }}
        showDescription={true}
        showTags={true}
      />
    </div>
  )
}

// Main Example Component
export default function ProjectShowcaseExample() {
  return (
    <div className="space-y-16">
      <div className="text-center py-16 bg-gray-900">
        <h1 className="text-4xl font-bold mb-4 text-white">Project Showcase Examples</h1>
        <p className="text-gray-300">
          Clean, modern project cards inspired by Miguel Plaza's portfolio
        </p>
      </div>

      <BasicProjectShowcase />
      <CustomProjectShowcase />
      <SingleColumnProjectShowcase />
    </div>
  )
}
