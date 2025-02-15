import React from "react";
import { Slider } from "./ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";

interface FilterSidebarProps {
  categories?: { id: string; name: string }[];
  onCategoryChange?: (categories: string[]) => void;
  onPriceRangeChange?: (range: number[]) => void;
  onLanguageChange?: (language: string) => void;
  selectedCategories?: string[];
  priceRange?: number[];
  selectedLanguage?: string;
}

const FilterSidebar = ({
  categories = [
    { id: "Machine Learning", name: "Machine Learning" },
    { id: "Natural Language Processing", name: "Natural Language Processing" },
    { id: "Computer Vision", name: "Computer Vision" },
    { id: "Robotics", name: "Robotics" },
    { id: "Data Analytics", name: "Data Analytics" },
    { id: "Productivity", name: "Productivity" },
    { id: "Assistant", name: "Assistant" },
    { id: "Writing", name: "Writing" },
    { id: "Content Creation", name: "Content Creation" },
    { id: "Visualization", name: "Visualization" },
    { id: "Automation", name: "Automation" },
  ],
  onCategoryChange = () => {},
  onPriceRangeChange = () => {},
  onLanguageChange = () => {},
  selectedCategories = [],
  priceRange = [0, 1000],
  selectedLanguage = "English",
}: FilterSidebarProps) => {
  return (
    <div className="relative w-70 h-full bg-background/95 backdrop-blur-sm border-r border-border p-4 space-y-6 transform transition-transform duration-300">
      <ScrollArea className="h-[calc(100vh-2rem)]">
        <div className="space-y-6">
          <Accordion type="single" collapsible defaultValue="categories">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-lg font-semibold">
                Categories
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => {
                          const newCategories = checked
                            ? [...selectedCategories, category.id]
                            : selectedCategories.filter(
                                (id) => id !== category.id,
                              );
                          onCategoryChange(newCategories);
                        }}
                      />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price">
              <AccordionTrigger className="text-lg font-semibold">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider
                    defaultValue={priceRange}
                    max={1000}
                    step={10}
                    onValueChange={onPriceRangeChange}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="language">
              <AccordionTrigger className="text-lg font-semibold">
                Language
              </AccordionTrigger>
              <AccordionContent>
                <Select
                  value={selectedLanguage}
                  onValueChange={onLanguageChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Chinese">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FilterSidebar;
