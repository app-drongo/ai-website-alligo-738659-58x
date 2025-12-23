'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState } from 'react';

const DEFAULT_CTA = {
  headline: 'Ready to Build Your Dream Website?',
  subheadline:
    'Join thousands of businesses already using Alligo to create stunning websites in minutes, not months.',
  primaryCtaText: 'Get Started Free',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Schedule Demo',
  secondaryCtaHref: '/demo',
  urgencyText: 'No credit card required • 14-day free trial',
  features: [
    'AI-powered website generation',
    'Visual drag-and-drop builder',
    'Professional templates included',
  ],
} as const;

type CtaProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CtaProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
          <CardContent className="p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Decorative Elements */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-primary/10 p-4 rounded-full">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span data-editable="headline">{config.headline}</span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                {config.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                  >
                    <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                    <span data-editable={`features[${idx}]`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  onClick={handlePrimaryClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                >
                  <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                  <ArrowRight
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                >
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>

              {/* Urgency Text */}
              <p className="text-sm text-muted-foreground">
                <span data-editable="urgencyText">{config.urgencyText}</span>
              </p>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl opacity-40"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
