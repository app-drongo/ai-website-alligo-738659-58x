'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Code, Zap, Globe } from 'lucide-react';

const DEFAULT_ABOUT = {
  sectionTitle: 'Built by Developers, for Everyone',
  story:
    'Alligo was born from the frustration of seeing great ideas held back by technical barriers. Our team of experienced developers and AI researchers created a platform that democratizes web development, making professional website creation accessible to everyone.',
  mission:
    'To empower every entrepreneur, business owner, and creative professional with the tools to bring their digital vision to life, regardless of their technical background.',
  stats: [
    {
      icon: 'Users',
      value: '50,000+',
      label: 'Websites Created',
      description: 'Professional sites built with AI',
    },
    {
      icon: 'Code',
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable infrastructure',
    },
    {
      icon: 'Zap',
      value: '< 3 min',
      label: 'Average Build Time',
      description: 'From prompt to live site',
    },
    {
      icon: 'Globe',
      value: '120+',
      label: 'Countries',
      description: 'Global user base',
    },
  ],
  teamHighlight:
    'Our diverse team combines decades of web development experience with cutting-edge AI research',
  visionStatement:
    'We believe the future of web development is conversational, intuitive, and accessible to all',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };

  const getIcon = (iconName: string) => {
    const iconMap = {
      Users: Users,
      Code: Code,
      Zap: Zap,
      Globe: Globe,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Users;
    return <IconComponent className="h-8 w-8 text-primary" />;
  };

  return (
    <section id="about" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              <span data-editable="story">{config.story}</span>
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {config.stats.map((stat, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{getIcon(stat.icon)}</div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">
                  <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                </div>
                <div className="font-semibold text-sm mb-1">
                  <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <span data-editable={`stats[${idx}].description`}>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <p className="text-lg leading-relaxed">
                <span data-editable="mission">{config.mission}</span>
              </p>
            </div>

            <div>
              <Badge variant="outline" className="mb-4">
                Our Vision
              </Badge>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span data-editable="visionStatement">{config.visionStatement}</span>
              </p>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold">Built by Experts</h3>
              </div>
              <p className="leading-relaxed">
                <span data-editable="teamHighlight">{config.teamHighlight}</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground"
                >
                  AI Research
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground"
                >
                  Web Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground"
                >
                  UX Design
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted text-muted-foreground rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Vision?</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Join thousands of creators who've transformed their ideas into stunning websites with
            Alligo's AI-powered platform.
          </p>
        </div>
      </div>
    </section>
  );
}
