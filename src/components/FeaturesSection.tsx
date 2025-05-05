
import React from 'react';
import { 
  Search, 
  TreePine, 
  MessageSquareText, 
  ArrowUpDown, 
  Save 
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Import Threads",
    description: "Simply paste any Reddit or Twitter thread URL to start analyzing"
  },
  {
    icon: <TreePine className="h-6 w-6 text-primary" />,
    title: "Interactive Visualizations",
    description: "See thread structures as beautiful, interactive argument trees"
  },
  {
    icon: <MessageSquareText className="h-6 w-6 text-primary" />,
    title: "Sentiment Analysis",
    description: "Color-coded nodes show sentiment: positive, neutral, or negative"
  },
  {
    icon: <ArrowUpDown className="h-6 w-6 text-primary" />,
    title: "Stance Detection",
    description: "Identify supporting arguments, rebuttals, and tangential comments"
  },
  {
    icon: <Save className="h-6 w-6 text-primary" />,
    title: "Save & Share",
    description: "Save your thread visualizations and share them with others"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="container py-16 md:py-24 bg-accent/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Key Features</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          ThreadMap combines powerful analysis tools with beautiful visualizations to help you understand complex discussions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
