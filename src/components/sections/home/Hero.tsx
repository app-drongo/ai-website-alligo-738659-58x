'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Sparkles, Code, Palette, Zap, Globe, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Create Professional Websites with Just a Prompt',
  subheadline:
    'Alligo transforms your ideas into stunning Next.js websites using AI. No coding required, unlimited possibilities.',
  primaryCtaText: 'Start Building Free',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80',
  heroImageAlt: 'AI website builder interface mockup',
  keyPoints: [
    'AI-powered website generation',
    'Visual drag-and-drop editor',
    'Professional Next.js output',
  ],
  badgeText: '✨ AI-Powered',
  statsLabel: 'Websites created',
  statsValue: '10,000+',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState('0');

  useEffect(() => {
    setIsVisible(true);

    // Animate stats counter
    let start = 0;
    const end = 10000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedStats('10,000+');
        clearInterval(timer);
      } else {
        setAnimatedStats(Math.floor(start).toLocaleString() + '+');
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="relative bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <Code className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-32 right-16 opacity-15 animate-pulse delay-1000">
          <Palette className="w-16 h-16 text-accent" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 animate-pulse delay-500">
          <Zap className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute bottom-20 right-12 opacity-15 animate-pulse delay-1500">
          <Globe className="w-14 h-14 text-accent" />
        </div>
        <div className="absolute top-1/2 left-8 opacity-10 animate-pulse delay-2000">
          <Rocket className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-1/3 right-8 opacity-15 animate-pulse delay-700">
          <Sparkles className="w-12 h-12 text-accent" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-24 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-50"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              <span data-editable="badgeText">{config.badgeText}</span>
            </Badge>
          </div>

          {/* Headlines */}
          <div
            className={`space-y-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span
                data-editable="headline"
                className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {config.headline}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span data-editable="subheadline">{config.subheadline}</span>
            </p>
          </div>

          {/* Key Points */}
          <div
            className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {config.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-lg text-muted-foreground">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span data-editable={`keyPoints[${idx}]`}>{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-xl font-semibold group shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryClick}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="border-2 border-border hover:bg-accent hover:text-accent-foreground px-10 py-6 text-xl font-semibold group backdrop-blur-sm"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>

          {/* Hero Image */}
          <div
            className={`relative max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/5 to-accent/5">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Floating Elements on Image */}
                  <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Next.js</span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">Visual Editor</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      <span className="text-sm font-medium">AI Powered</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div
            className={`flex items-center justify-center gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{animatedStats}</div>
              <div className="text-lg text-muted-foreground">
                <span data-editable="statsLabel">{config.statsLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}