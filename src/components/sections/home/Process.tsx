'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Palette, Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PROCESS = {
  title: 'From Idea to Website in 3 Simple Steps',
  subtitle:
    'Transform your vision into a stunning website with our AI-powered platform and intuitive visual builder',
  ctaText: 'Start Building Now',
  ctaHref: '/signup',
  steps: [
    {
      id: '1',
      icon: 'MessageSquare',
      title: 'Describe Your Vision',
      description:
        'Simply tell our AI what kind of website you want. Describe your business, style preferences, and goals in natural language.',
      features: [
        'Natural language prompts',
        'Smart content generation',
        'Industry-specific templates',
      ],
    },
    {
      id: '2',
      icon: 'Palette',
      title: 'AI Generates Your Site',
      description:
        'Watch as our advanced AI creates a complete website tailored to your needs, including layout, content, and design elements.',
      features: ['Instant website generation', 'Professional layouts', 'Optimized for all devices'],
    },
    {
      id: '3',
      icon: 'Rocket',
      title: 'Customize & Launch',
      description:
        "Use our visual builder to fine-tune every detail. Drag, drop, and edit until it's perfect, then launch with one click.",
      features: ['Visual drag-and-drop editor', 'Real-time preview', 'One-click publishing'],
    },
  ],
} as const;

type ProcessProps = Partial<typeof DEFAULT_PROCESS>;

export default function Process(props: ProcessProps) {
  const config = { ...DEFAULT_PROCESS, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      MessageSquare: MessageSquare,
      Palette: Palette,
      Rocket: Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || MessageSquare;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="process" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 lg:gap-12 mb-16">
          {config.steps.map((step, idx) => (
            <div key={step.id} className="relative">
              {/* Connector Line */}
              {idx < config.steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-24 w-px h-20 bg-border transform -translate-x-1/2" />
              )}

              <Card className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Content */}
                    <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          {getIcon(step.icon)}
                        </div>
                        <Badge variant="secondary" className="text-sm font-medium">
                          Step {step.id}
                        </Badge>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold">
                        <span data-editable={`steps[${idx}].title`}>{step.title}</span>
                      </h3>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <span data-editable={`steps[${idx}].description`}>{step.description}</span>
                      </p>

                      <ul className="space-y-3">
                        {step.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span data-editable={`steps[${idx}].features[${featureIdx}]`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Element */}
                    <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-muted rounded-lg p-8 lg:p-12 text-center">
                        <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                          {getIcon(step.icon)}
                        </div>
                        <div className="text-6xl lg:text-7xl font-bold text-primary/20">
                          {step.id}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
