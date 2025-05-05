
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ThreadStatsProps {
  totalComments?: number;
  averageSentiment?: number;
  supportPercentage?: number;
  rebutPercentage?: number;
  tangentPercentage?: number;
}

const ThreadStats: React.FC<ThreadStatsProps> = ({
  totalComments = 42,
  averageSentiment = 0.3,
  supportPercentage = 35,
  rebutPercentage = 40,
  tangentPercentage = 25
}) => {
  // Calculate sentiment label based on value (-1 to 1 scale)
  const getSentimentLabel = (value: number) => {
    if (value < -0.3) return "Negative";
    if (value > 0.3) return "Positive";
    return "Neutral";
  };

  // Calculate color class based on sentiment value
  const getSentimentColorClass = (value: number) => {
    if (value < -0.3) return "text-negative";
    if (value > 0.3) return "text-positive";
    return "text-neutral";
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Thread Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Comments</p>
            <p className="text-2xl font-bold">{totalComments}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Average Sentiment</p>
            <p className={`text-2xl font-bold ${getSentimentColorClass(averageSentiment)}`}>
              {getSentimentLabel(averageSentiment)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Stance Distribution</p>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden flex">
            <div 
              className="bg-support h-full" 
              style={{ width: `${supportPercentage}%` }} 
              title={`Support: ${supportPercentage}%`}
            />
            <div 
              className="bg-rebut h-full" 
              style={{ width: `${rebutPercentage}%` }} 
              title={`Rebut: ${rebutPercentage}%`}
            />
            <div 
              className="bg-tangent h-full" 
              style={{ width: `${tangentPercentage}%` }} 
              title={`Tangent: ${tangentPercentage}%`}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <div>
              <span className="inline-block w-3 h-3 bg-support rounded-full mr-1"></span>
              Support {supportPercentage}%
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-rebut rounded-full mr-1"></span>
              Rebut {rebutPercentage}%
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-tangent rounded-full mr-1"></span>
              Tangent {tangentPercentage}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreadStats;
