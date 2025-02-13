import React from "react";
import ToolCard from "./ToolCard";

interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  categories: string[];
  pricing: string;
  languages: string[];
  rating: number;
}

interface ToolsGridProps {
  tools?: Tool[];
}

const ToolsGrid = ({ tools = defaultTools }: ToolsGridProps) => {
  return (
    <div className="bg-gray-50 p-6 w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            name={tool.name}
            description={tool.description}
            logo={tool.logo}
            categories={tool.categories}
            pricing={tool.pricing}
            languages={tool.languages}
            rating={tool.rating}
          />
        ))}
      </div>
    </div>
  );
};

const defaultTools: Tool[] = [
  {
    id: "1",
    name: "AI Assistant Pro",
    description:
      "An intelligent AI assistant that helps with daily tasks and productivity.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=AP",
    categories: ["Productivity", "Assistant"],
    pricing: "Free / Premium",
    languages: ["English", "Spanish", "French"],
    rating: 4.8,
  },
  {
    id: "2",
    name: "Neural Writer",
    description:
      "Advanced AI writing assistant for content creation and editing.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=NW",
    categories: ["Writing", "Content Creation"],
    pricing: "Subscription",
    languages: ["English", "German"],
    rating: 4.6,
  },
  {
    id: "3",
    name: "DataViz AI",
    description: "Transform your data into beautiful visualizations using AI.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DV",
    categories: ["Data Analysis", "Visualization"],
    pricing: "Enterprise",
    languages: ["English"],
    rating: 4.9,
  },
];

export default ToolsGrid;
