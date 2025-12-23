'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'Alligo',
  brandTagline: 'AI Website Builder',
  navItems: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  ctaText: 'Start Building',
  ctaHref: '/signup',
  loginText: 'Sign In',
  loginHref: '/login',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const handleLoginClick = () => {
    navigate(config.loginHref);
  };

  return (
    <section
      id="navigation"
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={() => navigate('/')}
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="brandTagline"
              >
                {config.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoginClick}
              data-editable-href="loginHref"
              data-href={config.loginHref}
              className="text-muted-foreground hover:text-foreground"
            >
              <span data-editable="loginText">{config.loginText}</span>
            </Button>
            <Button
              size="sm"
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Brand */}
                <div className="flex items-center space-x-2 pb-4 border-b border-border">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground" data-editable="brandName">
                      {config.brandName}
                    </span>
                    <span className="text-xs text-muted-foreground" data-editable="brandTagline">
                      {config.brandTagline}
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {config.navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      data-editable-href={`navItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={handleLoginClick}
                    data-editable-href="loginHref"
                    data-href={config.loginHref}
                    className="w-full"
                  >
                    <span data-editable="loginText">{config.loginText}</span>
                  </Button>
                  <Button
                    onClick={handleCTAClick}
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
