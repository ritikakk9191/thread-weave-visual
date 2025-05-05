
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-base">ThreadMap</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Visualize online discussions as interactive argument trees.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-base">Product</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/extension" className="text-sm text-muted-foreground hover:text-foreground">Chrome Extension</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground">Guides</Link></li>
              <li><Link to="/api" className="text-sm text-muted-foreground hover:text-foreground">API</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 ThreadMap. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
