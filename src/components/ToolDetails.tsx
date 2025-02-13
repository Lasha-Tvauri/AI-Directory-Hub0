import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ToolDetailsProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  categories: string[];
  pricing: string;
  languages: string[];
  rating: number;
  websiteUrl?: string;
}

const ToolDetails = ({
  name,
  description,
  logo,
  categories,
  pricing,
  languages,
  rating,
  websiteUrl = "#",
}: ToolDetailsProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-24 h-24 rounded-xl object-contain bg-white p-2"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-lg">{rating}</span>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {pricing}
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-primary/20 text-primary-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Supported Languages</h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <Badge key={language} variant="outline">
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button
              className="w-full sm:w-auto"
              onClick={() => window.open(websiteUrl, "_blank")}
            >
              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
