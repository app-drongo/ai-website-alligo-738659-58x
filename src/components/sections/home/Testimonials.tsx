'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'Trusted by Thousands of Businesses',
  subtitle: 'See what our customers are saying about Alligo',
  testimonials: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      content:
        'Alligo transformed how we build landing pages. What used to take weeks now takes minutes. The AI understands exactly what we need.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Sarah Chen profile photo',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'StartupLab',
      content:
        "The visual builder combined with AI prompts is incredible. We've launched 12 websites in the past month - all looking professional and unique.",
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Marcus Rodriguez profile photo',
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'InnovateCorp',
      content:
        'Finally, a website builder that actually understands design. Our conversion rates increased by 40% after switching to Alligo-built pages.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Emily Watson profile photo',
    },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.avatarAlt}
                      data-editable-src={`testimonials[${idx}].avatarUrl`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].name`}>{testimonial.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].role`}>{testimonial.role}</span>
                      {' at '}
                      <span data-editable={`testimonials[${idx}].company`}>
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <span className="text-sm">Rated 5/5 by 2,000+ customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
