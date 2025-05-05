
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ThreadVisualizer from '@/components/ThreadVisualizer';
import VisualizationControls from '@/components/VisualizationControls';
import ThreadStats from '@/components/ThreadStats';
import NodeDetailPanel from '@/components/NodeDetailPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const VisualizePage = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Thread Saved",
      description: "This thread has been saved to your dashboard"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container py-8">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Thread Visualization</h1>
          </div>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Bookmark className="h-4 w-4" /> Save Visualization
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs defaultValue="visualization">
              <TabsList className="mb-4">
                <TabsTrigger value="visualization">Visualization</TabsTrigger>
                <TabsTrigger value="raw-data">Raw Data</TabsTrigger>
              </TabsList>
              <TabsContent value="visualization">
                <ThreadVisualizer />
              </TabsContent>
              <TabsContent value="raw-data">
                <div className="bg-muted p-4 rounded-lg overflow-auto max-h-[600px]">
                  <pre className="text-xs">
                    {JSON.stringify(
                      { 
                        title: "Example Thread",
                        source: "reddit.com",
                        analytics: {
                          sentimentDistribution: {
                            positive: 35,
                            neutral: 25,
                            negative: 40
                          },
                          stanceDistribution: {
                            support: 35,
                            rebut: 40,
                            tangent: 25
                          }
                        }
                      }, 
                      null, 2
                    )}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <VisualizationControls />
            <ThreadStats />
          </div>
        </div>
        
        <div className="mt-6">
          <NodeDetailPanel />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisualizePage;
