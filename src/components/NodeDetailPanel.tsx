
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NodeDetailPanelProps {
  node?: {
    id: string;
    name: string;
    text: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    stance: 'support' | 'rebut' | 'tangent';
    timestamp?: string;
    upvotes?: number;
  };
}

const NodeDetailPanel: React.FC<NodeDetailPanelProps> = ({ node }) => {
  if (!node) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg">Node Details</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12 text-muted-foreground">
          Select a node to see details
        </CardContent>
      </Card>
    );
  }

  // Map sentiment to text and color
  const sentimentMap = {
    positive: { text: 'Positive', className: 'bg-positive text-white' },
    neutral: { text: 'Neutral', className: 'bg-neutral text-white' },
    negative: { text: 'Negative', className: 'bg-negative text-white' }
  };

  // Map stance to text and color
  const stanceMap = {
    support: { text: 'Support', className: 'bg-support text-white' },
    rebut: { text: 'Rebut', className: 'bg-rebut text-white' },
    tangent: { text: 'Tangent', className: 'bg-tangent text-white' }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{node.name}</CardTitle>
          <div className="space-x-2">
            <Badge className={sentimentMap[node.sentiment].className}>
              {sentimentMap[node.sentiment].text}
            </Badge>
            <Badge className={stanceMap[node.stance].className}>
              {stanceMap[node.stance].text}
            </Badge>
          </div>
        </div>
        {node.timestamp && (
          <p className="text-xs text-muted-foreground">{node.timestamp}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/40 p-3 rounded-md">
          <p className="text-sm">{node.text}</p>
        </div>
        
        {node.upvotes !== undefined && (
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Upvotes:</span>{' '}
              <span className="font-medium">{node.upvotes}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NodeDetailPanel;
