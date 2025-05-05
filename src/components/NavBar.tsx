
import React from 'react';
import { Link } from "react-router-dom";
import { Home, Search, BookmarkCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-primary"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
              <circle cx="16" cy="8" r="2" fill="currentColor" />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
              <circle cx="8" cy="16" r="2" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold">ThreadMap</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <Link to="/explore" className="flex items-center text-muted-foreground hover:text-foreground">
              <Search className="w-4 h-4 mr-1" />
              Explore
            </Link>
            <Link to="/saved" className="flex items-center text-muted-foreground hover:text-foreground">
              <BookmarkCheck className="w-4 h-4 mr-1" />
              Saved
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
