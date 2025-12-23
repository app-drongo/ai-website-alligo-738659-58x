'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Palette, Code, Smartphone, Globe, Rocket } from 'lucide-react';

const DEFAULT_FEATURES = {
  title: 'Everything You Need to Build Amazing Websites',
  subtitle:
    'Powerful AI-driven tools and intuitive visual editing make website creation effortless',
  features: [
    {
      id: 'ai-prompts',
      icon: 'Zap',
      title: 'AI-Powered Generation',
      description: 'Transform simple prompts into stunning websites with our advanced AI engine',
      badge: 'Smart',
    },
    {
      id: 'visual-builder',
      icon: 'Palette',
      title: 'Visual Builder',
      description: 'Drag, drop, and customize every element with our intuitive visual editor',
      badge: 'Easy',
    },
    {
      id: 'nextjs-powered',
      icon: 'Code',
      title: 'Next.js Foundation',
      description: 'Built on modern React framework for lightning-fast performance and SEO',
      badge: 'Fast',
    },
    {
      id: 'responsive-design',
      icon: 'Smartphone',
      title: 'Mobile-First Design',
      description: 'Every website automatically adapts perfectly to all devices and screen sizes',
      badge: 'Responsive',
    },
    {
      id: 'instant-deploy',
      icon: 'Globe',
      title: 'One-Click Deployment',
      description: 'Publish your website instantly with global CDN and automatic SSL certificates',
      badge: 'Live',
    },
    {
      id: 'performance',
      icon: 'Rocket',
      title: 'Blazing Performance',
      description: 'Optimized code generation ensures your websites load in under 2 seconds',
      badge: 'Optimized',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const getIcon = (iconName: string) => {
    const icons = {
      Zap,
      Palette,
      Code,
      Smartphone,
      Globe,
      Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 text-muted-foreground rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">Ready to build your next website?</p>
            <p className="text-sm">
              Join thousands of creators who trust Alligo for their web presence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
