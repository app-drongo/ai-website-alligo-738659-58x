'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Palette, Code, Rocket, Users, Shield } from 'lucide-react';

const DEFAULT_BENEFITS = {
  sectionTitle: 'Why Choose Alligo for Your Next Website',
  sectionSubtitle:
    'Experience the future of web development with our AI-powered platform that combines intelligent automation with intuitive visual editing.',
  benefits: [
    {
      id: 'ai-powered',
      icon: 'Zap',
      title: 'AI-Powered Generation',
      description:
        'Transform simple prompts into stunning, fully-functional websites in minutes. Our advanced AI understands your vision and brings it to life.',
      highlight: '10x Faster',
    },
    {
      id: 'visual-builder',
      icon: 'Palette',
      title: 'Intuitive Visual Builder',
      description:
        'Fine-tune every detail with our drag-and-drop visual editor. No coding required, but full customization control at your fingertips.',
      highlight: 'No Code',
    },
    {
      id: 'nextjs-powered',
      icon: 'Code',
      title: 'Next.js Foundation',
      description:
        'Built on the latest Next.js technology for lightning-fast performance, SEO optimization, and enterprise-grade scalability.',
      highlight: 'Enterprise Ready',
    },
    {
      id: 'instant-deploy',
      icon: 'Rocket',
      title: 'Instant Deployment',
      description:
        'Go live in seconds with our optimized hosting infrastructure. Automatic SSL, CDN, and performance monitoring included.',
      highlight: 'One Click',
    },
  ],
} as const;

type BenefitsProps = Partial<typeof DEFAULT_BENEFITS>;

export default function Benefits(props: BenefitsProps) {
  const config = { ...DEFAULT_BENEFITS, ...props };

  const getIcon = (iconName: string) => {
    const icons = {
      Zap,
      Palette,
      Code,
      Rocket,
      Users,
      Shield,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return IconComponent;
  };

  return (
    <section id="benefits" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {config.benefits.map((benefit, idx) => {
            const IconComponent = getIcon(benefit.icon);

            return (
              <Card
                key={benefit.id}
                className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl font-semibold">
                          <span data-editable={`benefits[${idx}].title`}>{benefit.title}</span>
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1"
                        >
                          <span data-editable={`benefits[${idx}].highlight`}>
                            {benefit.highlight}
                          </span>
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        <span data-editable={`benefits[${idx}].description`}>
                          {benefit.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-muted text-muted-foreground rounded-2xl p-8 sm:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Build Your Dream Website?
              </h3>
              <p className="text-lg mb-8">
                Join thousands of creators who've already transformed their ideas into stunning
                websites with Alligo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free templates included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Launch in minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
