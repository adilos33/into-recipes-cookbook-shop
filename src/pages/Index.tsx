import React, { useEffect } from 'react';
import { FloatingIngredients } from '@/components/FloatingIngredients';

const AFFILIATE_COLLECTION_URL = "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleExploreClick = () => {
    window.open(AFFILIATE_COLLECTION_URL, '_blank', 'noopener');
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 header-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Into Recipes</h1>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Background with gradient */}
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />
        
        {/* Steam Effect */}
        <div className="steam-effect">
          <div className="steam-layer-1" />
          <div className="steam-layer-2" />
        </div>
        
        {/* Floating Ingredients */}
        <FloatingIngredients />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
            Into Recipes — World's Famous Cookbooks
          </h1>
          
          <div className="scroll-reveal mb-8" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Behind every famous dish lies a secret page. The world's most <strong className="text-foreground">famous cookbooks</strong> gather timeless <strong className="text-foreground">recipes</strong> that turn ordinary kitchens into places of wonder. From quick meals to royal banquets, discover where chefs and food lovers around the world find their inspiration — and bring it to your table today.
            </p>
          </div>
          
          <div className="scroll-reveal mb-6" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={handleExploreClick}
              className="btn-hero btn-pulse text-lg md:text-xl px-8 py-4 md:px-12 md:py-6"
            >
              Explore the World's Famous Cookbooks
            </button>
          </div>
          
          <div className="scroll-reveal" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm md:text-base text-muted-foreground opacity-80">
              Affiliate Disclosure: This link may earn a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Into Recipes. Affiliate links may earn a commission.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Famous cookbooks • World recipes • Buy cookbooks online • Culinary secrets • Chef recipes • Cooking inspiration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;