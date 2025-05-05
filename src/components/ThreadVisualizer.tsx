
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Card, CardContent } from "@/components/ui/card";
import { sampleThreadData } from "@/data/sampleThread";

interface Node {
  id: string;
  name: string;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  stance: 'support' | 'rebut' | 'tangent';
  children?: Node[];
}

interface TreeVisualizerProps {
  data?: Node;
}

const ThreadVisualizer: React.FC<TreeVisualizerProps> = ({ data = sampleThreadData }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear SVG content
    
    const width = 800;
    const height = 600;
    const margin = { top: 40, right: 120, bottom: 40, left: 120 };
    
    // Create a hierarchical layout
    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);
    
    treeLayout(root);
    
    // Create a group element for the tree
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add links between nodes
    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal<d3.HierarchyPointLink<Node>, d3.HierarchyPointNode<Node>>()
        .x(d => d.y)
        .y(d => d.x)
      );
    
    // Add nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", d => `node sentiment-${d.data.sentiment}`)
      .attr("transform", d => `translate(${d.y},${d.x})`);
    
    // Add circles to nodes
    node.append("circle")
      .attr("r", 6);
    
    // Add labels to nodes
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.children ? -10 : 10)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name)
      .clone(true).lower()
      .attr("stroke", "white");
    
    // Add stance badges
    node.append("rect")
      .attr("class", d => `stance-badge stance-${d.data.stance}`)
      .attr("x", d => d.children ? -20 : 10)
      .attr("y", -14)
      .attr("width", 8)
      .attr("height", 8)
      .attr("rx", 2);
    
    // Customize the appearance based on sentiment and stance
    node.attr("class", d => `node sentiment-${d.data.sentiment} stance-${d.data.stance}`);
    
  }, [data]);

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardContent className="p-4 overflow-auto">
        <svg 
          ref={svgRef} 
          width="800" 
          height="600" 
          viewBox="0 0 800 600" 
          className="mx-auto"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </CardContent>
    </Card>
  );
};

export default ThreadVisualizer;
