
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sampleThreads = [
  {
    id: '1',
    title: 'Should Universal Basic Income be implemented?',
    source: 'Reddit',
    comments: 138,
    sentiment: 'neutral',
    stance: { support: 45, rebut: 35, tangent: 20 },
    date: '2 days ago'
  },
  {
    id: '2',
    title: 'Is remote work more productive than office work?',
    source: 'Twitter',
    comments: 57,
    sentiment: 'positive',
    stance: { support: 65, rebut: 20, tangent: 15 },
    date: '1 week ago'
  },
  {
    id: '3',
    title: 'Debate: AI regulation policies',
    source: 'Reddit',
    comments: 203,
    sentiment: 'negative',
    stance: { support: 25, rebut: 60, tangent: 15 },
    date: '3 days ago'
  },
  {
    id: '4',
    title: 'Climate change solutions comparison',
    source: 'Twitter',
    comments: 72,
    sentiment: 'neutral',
    stance: { support: 40, rebut: 40, tangent: 20 },
    date: '5 days ago'
  },
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Explore Visualizations</h1>
          <p className="text-muted-foreground mt-1">
            Browse public thread visualizations or search for specific topics
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search visualizations..." 
                className="pl-9"
              />
            </div>
            <div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="reddit">Reddit</SelectItem>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="recent">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="comments">Most Comments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sampleThreads.map(thread => (
            <Card key={thread.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge variant="outline">{thread.source}</Badge>
                  <Badge 
                    className={
                      thread.sentiment === 'positive' ? 'bg-positive text-white' :
                      thread.sentiment === 'negative' ? 'bg-negative text-white' :
                      'bg-neutral text-white'
                    }
                  >
                    {thread.sentiment}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">{thread.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{thread.comments} comments</span>
                  <span>•</span>
                  <span>{thread.date}</span>
                </div>
                <div className="mt-3 w-full h-2 bg-muted rounded-full overflow-hidden flex">
                  <div 
                    className="bg-support h-full" 
                    style={{ width: `${thread.stance.support}%` }} 
                  />
                  <div 
                    className="bg-rebut h-full" 
                    style={{ width: `${thread.stance.rebut}%` }} 
                  />
                  <div 
                    className="bg-tangent h-full" 
                    style={{ width: `${thread.stance.tangent}%` }} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Visualization</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline">Load More</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;
