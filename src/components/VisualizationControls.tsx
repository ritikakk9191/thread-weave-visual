
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Download, Share } from 'lucide-react';

const VisualizationControls: React.FC = () => {
  return (
    <div className="bg-background border border-border rounded-lg p-4 space-y-4">
      <h3 className="font-medium mb-2">Display Options</h3>
      
      <div>
        <Label htmlFor="layout-type" className="text-sm">Layout Type</Label>
        <Select defaultValue="tree">
          <SelectTrigger id="layout-type" className="mt-1">
            <SelectValue placeholder="Choose layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tree">Tree</SelectItem>
            <SelectItem value="radial">Radial</SelectItem>
            <SelectItem value="force">Force Directed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="color-by" className="text-sm">Color By</Label>
        <Select defaultValue="sentiment">
          <SelectTrigger id="color-by" className="mt-1">
            <SelectValue placeholder="Choose coloring" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sentiment">Sentiment</SelectItem>
            <SelectItem value="stance">Stance</SelectItem>
            <SelectItem value="depth">Depth</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label className="text-sm">Node Size</Label>
        <Slider 
          defaultValue={[50]} 
          max={100} 
          step={1} 
          className="mt-2" 
        />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="show-labels" className="text-sm">Show Labels</Label>
        <Switch id="show-labels" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="show-preview" className="text-sm">Show Text Preview</Label>
        <Switch id="show-preview" defaultChecked />
      </div>
      
      <div className="pt-2">
        <h3 className="font-medium mb-2">Actions</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Share className="w-4 h-4 mr-2" /> Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisualizationControls;
