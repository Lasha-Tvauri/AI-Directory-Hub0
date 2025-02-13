import React, { useState } from "react";
import DirectoryHeader from "./DirectoryHeader";
import Hero from "./Hero";
import FilterSidebar from "./FilterSidebar";
import ToolsGrid, { Tool } from "./ToolsGrid";

export const defaultTools: Tool[] = [
  {
    id: "1",
    name: "AI Assistant Pro",
    description:
      "An intelligent AI assistant that helps with daily tasks and productivity.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=AP",
    categories: ["Machine Learning", "Productivity", "Assistant"],
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
    categories: ["Natural Language Processing", "Writing", "Content Creation"],
    pricing: "Subscription",
    languages: ["English", "German"],
    rating: 4.6,
  },
  {
    id: "3",
    name: "DataViz AI",
    description: "Transform your data into beautiful visualizations using AI.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DV",
    categories: ["Data Analytics", "Visualization"],
    pricing: "Enterprise",
    languages: ["English"],
    rating: 4.9,
  },
  {
    id: "4",
    name: "Vision Master",
    description:
      "Advanced computer vision solution for image and video analysis.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=VM",
    categories: ["Computer Vision", "Machine Learning"],
    pricing: "Free",
    languages: ["English", "Spanish"],
    rating: 4.7,
  },
  {
    id: "5",
    name: "RoboFlow",
    description:
      "Streamline your robotics workflow with AI-powered automation.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=RF",
    categories: ["Robotics", "Automation"],
    pricing: "Enterprise",
    languages: ["English", "German", "French"],
    rating: 4.9,
  },
];

interface HomeProps {
  initialLanguage?: string;
}

const Home = ({ initialLanguage = "English" }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handlePriceRangeChange = (range: number[]) => {
    setPriceRange(range);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DirectoryHeader onSearch={handleSearch} />
      <div className="fixed left-0 top-20 bottom-0 z-40">
        <div
          className="relative w-70 overflow-hidden h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${isSidebarOpen ? "0" : "-280px"})`,
          }}
        >
          <FilterSidebar
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={handlePriceRangeChange}
            selectedLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-2 py-6 rounded-r-md hover:bg-primary/90 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${isSidebarOpen ? "280px" : "0"})`,
          }}
        >
          <span className="vertical-text select-none">
            {isSidebarOpen ? "×" : "Filter"}
          </span>
        </button>
      </div>
      <div className="transition-all duration-300 ease-in-out">
        <div
          className="mt-20"
          style={{ marginLeft: isSidebarOpen ? "280px" : "0" }}
        >
          <Hero onSubscribe={(email) => console.log("Subscribed:", email)} />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ToolsGrid
              tools={defaultTools.filter((tool) => {
                const matchesSearch =
                  tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  tool.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
                const matchesCategories =
                  selectedCategories.length === 0 ||
                  tool.categories.some((cat) =>
                    selectedCategories.includes(cat),
                  );
                const matchesPrice =
                  tool.pricing === "Free"
                    ? priceRange[0] === 0
                    : tool.pricing === "Free / Premium"
                      ? priceRange[1] >= 500
                      : priceRange[1] >= 1000;
                const matchesLanguage =
                  tool.languages.includes(currentLanguage);

                return (
                  matchesSearch &&
                  matchesCategories &&
                  matchesPrice &&
                  matchesLanguage
                );
              })}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
