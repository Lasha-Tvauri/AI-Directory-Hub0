import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface ToolCardProps {
  name?: string;
  description?: string;
  logo?: string;
  categories?: string[];
  pricing?: string;
  languages?: string[];
  rating?: number;
}

const ToolCard = ({
  name = "AI Tool Name",
  description = "A powerful AI tool that helps you accomplish amazing things with ease and efficiency.",
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=AT",
  categories = ["Machine Learning", "Automation"],
  pricing = "Free",
  languages = ["English", "Spanish"],
  rating = 4.5,
}: ToolCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className="w-96 h-70 bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
          <CardHeader className="space-y-2">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <CardTitle className="text-xl">{name}</CardTitle>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-600">{rating}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm line-clamp-2">
              {description}
            </CardDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold">Pricing</h4>
            <p className="text-sm text-gray-600">{pricing}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Supported Languages</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {languages.map((language) => (
                <Badge key={language} variant="outline" className="text-xs">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ToolCard;
