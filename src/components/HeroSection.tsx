
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Visualize Online Discussions as Interactive Argument Trees
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          ThreadMap transforms chaotic Reddit and Twitter threads into clear, visual argument maps. 
          See how ideas connect, clash, and evolve in real-time.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Try It Now <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            See Examples
          </Button>
        </div>
      </div>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
        <div className="relative backdrop-blur-sm bg-background/70 border border-border rounded-3xl p-6 animate-zoom-in shadow-lg">
          <div className="aspect-video w-full max-w-5xl mx-auto bg-muted rounded-lg flex items-center justify-center">
            <div className="text-xl font-medium text-muted-foreground">
              Thread Visualization Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
