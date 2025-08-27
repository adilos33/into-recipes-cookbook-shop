import React, { useEffect, useRef } from 'react';
import { FloatingIngredients } from '@/components/FloatingIngredients';

// Import cookbook images
import cookbook1 from '@/assets/cookbook-1.jpg';
import cookbook2 from '@/assets/cookbook-2.jpg';
import cookbook3 from '@/assets/cookbook-3.jpg';
import cookbook4 from '@/assets/cookbook-4.jpg';
import cookbook5 from '@/assets/cookbook-5.jpg';
import cookbook6 from '@/assets/cookbook-6.jpg';

// Mock cookbook data (will be replaced with TikTok API later)
const cookbooks = [
  {
    id: 1,
    title: "Mediterranean Delights",
    image: cookbook1,
    price: "$24.99",
    badges: ["Bestseller", "Free Shipping"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
  {
    id: 2,
    title: "Asian Fusion Kitchen",
    image: cookbook2,
    price: "$19.99",
    badges: ["Flash Sale"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
  {
    id: 3,
    title: "Artisan Baking Secrets",
    image: cookbook3,
    price: "$29.99",
    badges: ["Premium", "Free Shipping"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
  {
    id: 4,
    title: "Plant-Based Gourmet",
    image: cookbook4,
    price: "$22.99",
    badges: ["Healthy", "Bestseller"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
  {
    id: 5,
    title: "Quick Weeknight Meals",
    image: cookbook5,
    price: "$16.99",
    badges: ["Quick & Easy"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
  {
    id: 6,
    title: "Dessert Mastery",
    image: cookbook6,
    price: "$26.99",
    badges: ["Premium", "Sweet Treats"],
    tiktokUrl: "https://www.tiktok.com/t/ZPHGKJdN85LvA-qTvEg/",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  const scrollToProducts = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 header-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Into Recipes</h1>
            <nav className="hidden md:flex space-x-6">
              <button onClick={scrollToProducts} className="text-muted-foreground hover:text-foreground transition-colors">
                Browse Cookbooks
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Into Recipes
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Cookbooks Showcase
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Handpicked cookbooks. Open in TikTok Shop.
          </p>
          <button 
            onClick={scrollToProducts}
            className="btn-hero animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Browse Cookbooks
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        
        {/* Affiliate Disclosure */}
        <section className="scroll-reveal mb-12">
          <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-primary">Affiliate Disclosure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Some links on this page are affiliate links. If you purchase through them, I may earn a commission at no extra cost to you. 
              <span className="block mt-2 text-sm">
                <strong>Tip:</strong> If TikTok's in-app browser blocks the link, choose "Open in external browser."
              </span>
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section ref={cardsRef} className="scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Cookbooks</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cookbooks.map((cookbook, index) => (
              <div 
                key={cookbook.id} 
                className="cookbook-card scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={cookbook.image} 
                    alt={cookbook.title}
                    className="cookbook-image w-full"
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  {cookbook.badges.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {cookbook.badges.map((badge, i) => (
                        <span 
                          key={i}
                          className={`px-2 py-1 text-xs font-medium rounded-md ${
                            badge === "Flash Sale" ? "bg-primary text-primary-foreground" :
                            badge === "Bestseller" ? "bg-secondary text-secondary-foreground" :
                            badge === "Premium" ? "bg-accent text-accent-foreground" :
                            "bg-muted text-muted-foreground"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{cookbook.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">{cookbook.price}</span>
                  </div>
                  
                  <a 
                    href={cookbook.tiktokUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="btn-tiktok w-full text-center block"
                  >
                    Buy on TikTok Shop
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Into Recipes. Affiliate links may earn a commission.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;