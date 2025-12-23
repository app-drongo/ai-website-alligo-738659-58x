'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState } from 'react';

const DEFAULT_PRICING = {
  title: 'Choose Your Plan',
  subtitle: "Start free, upgrade when you're ready to scale",
  billingToggle: true,
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for trying out Alligo',
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: 'zap',
      badge: '',
      features: ['3 AI-generated websites', 'Basic visual builder', 'Community support'],
      ctaText: 'Start Free',
      ctaHref: '/signup',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Best for growing businesses',
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: 'crown',
      badge: 'Most Popular',
      features: [
        'Unlimited AI websites',
        'Advanced visual builder',
        'Custom domains',
        'Priority support',
        'Analytics dashboard',
      ],
      ctaText: 'Start Pro Trial',
      ctaHref: '/signup?plan=pro',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For teams and agencies',
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: 'rocket',
      badge: '',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'White-label options',
        'API access',
        'Dedicated support',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact',
      popular: false,
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(true);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-6 w-6" />;
      case 'crown':
        return <Crown className="h-6 w-6" />;
      case 'rocket':
        return <Rocket className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {config.billingToggle && (
            <div className="flex items-center justify-center mt-8 gap-4">
              <span
                className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  isYearly ? 'bg-primary' : 'bg-muted'
                }`}
                role="switch"
                aria-checked={isYearly}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              </span>
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={plan.id}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <span data-editable={`plans[${idx}].badge`}>{plan.badge}</span>
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {getIcon(plan.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>

                <p className="text-muted-foreground mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.monthlyPrice === 0 ? '' : '/month'}
                    </span>
                  </div>
                  {isYearly && plan.yearlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.yearlyPrice}/year)
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
