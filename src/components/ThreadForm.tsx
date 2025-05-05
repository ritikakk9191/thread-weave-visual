
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ThreadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Input Required",
        description: "Please enter a thread URL",
        variant: "destructive",
      });
      return;
    }
    
    // Validate URL format
    if (!url.includes('reddit.com') && !url.includes('twitter.com') && !url.includes('x.com')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Reddit or Twitter/X URL",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // This would normally send a request to the backend, but for now we'll simulate it
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thread Imported",
        description: "Your thread has been successfully imported",
      });
      navigate('/visualize');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Import a Thread</h2>
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="url">URL Input</TabsTrigger>
            <TabsTrigger value="text" disabled>Text Input (Coming Soon)</TabsTrigger>
          </TabsList>
          <TabsContent value="url">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="thread-url" className="block text-sm font-medium mb-1">
                  Thread URL
                </label>
                <Input
                  id="thread-url"
                  type="url"
                  placeholder="https://www.reddit.com/r/example/comments/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Paste a Reddit or Twitter/X thread URL
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading}
              >
                {loading ? "Processing..." : "Import Thread"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="text">
            <div className="text-center py-6 text-muted-foreground">
              Text input functionality coming soon
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ThreadForm;
