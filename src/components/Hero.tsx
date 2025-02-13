import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface HeroProps {
  onSubscribe?: (email: string) => void;
}

const Hero = () => {
  return (
    <div className="w-full py-16 px-6 text-center space-y-6 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b border-border">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
        Find best AI tools with AI Directory Hub
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Discover and explore the most useful AI tools, organized and categorized
        for your convenience.
      </p>
    </div>
  );
};

export default Hero;
