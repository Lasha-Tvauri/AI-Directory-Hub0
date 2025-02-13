import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DirectoryHeaderProps {
  onSearch?: (query: string) => void;
  onLanguageChange?: (language: string) => void;
  currentLanguage?: string;
}

const DirectoryHeader = ({
  onSearch = () => {},
  onLanguageChange = () => {},
  currentLanguage = "English",
}: DirectoryHeaderProps) => {
  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "Spanish", code: "es", flag: "🇪🇸" },
    { name: "French", code: "fr", flag: "🇫🇷" },
    { name: "German", code: "de", flag: "🇩🇪" },
  ];

  return (
    <header className="w-full h-20 bg-background/80 backdrop-blur-sm border-b border-border px-6 flex items-center fixed top-0 z-50">
      <div className="flex-1 max-w-2xl relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Search AI tools..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default DirectoryHeader;
