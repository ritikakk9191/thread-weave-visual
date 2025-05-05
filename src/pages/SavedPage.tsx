
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Trash, Calendar, MessageSquare } from "lucide-react";

const SavedPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Saved Visualizations</h1>
          <p className="text-muted-foreground mt-1">
            Access and manage your saved thread visualizations
          </p>
        </div>
        
        <div className="grid gap-6">
          {/* Empty state */}
          <Card className="bg-muted/30">
            <CardContent className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-muted-foreground"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No saved visualizations</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You haven't saved any thread visualizations yet. Explore threads and save them to access them here.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link to="/">Import Thread</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/explore">Explore</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* This would normally be rendered conditionally, but for demo purposes we're showing a sample */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should Universal Basic Income be implemented?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Saved on May 3, 2025
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    138 comments
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/visualize">
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                    <Trash className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedPage;
