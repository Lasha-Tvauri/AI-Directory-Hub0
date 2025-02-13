import React, { useState } from "react";
import DirectoryHeader from "./DirectoryHeader";
import FilterSidebar from "./FilterSidebar";
import ToolsGrid from "./ToolsGrid";

interface HomeProps {
  initialLanguage?: string;
}

const Home = ({ initialLanguage = "English" }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

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
    <div className="flex h-screen bg-gray-100">
      <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-70 overflow-hidden">
        <FilterSidebar
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
          selectedLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      <div className="flex-1 ml-70">
        <DirectoryHeader
          onSearch={handleSearch}
          onLanguageChange={handleLanguageChange}
          currentLanguage={currentLanguage}
        />
        <main className="mt-20 p-6">
          <ToolsGrid />
        </main>
      </div>
    </div>
  );
};

export default Home;
