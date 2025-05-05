
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ThreadForm from '@/components/ThreadForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <div className="py-16 container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Try It Now</h2>
            <p className="text-xl text-muted-foreground mt-4">
              Enter a Reddit or Twitter thread URL to see ThreadMap in action
            </p>
          </div>
          <ThreadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
