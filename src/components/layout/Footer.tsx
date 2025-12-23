'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  // Company Section
  companyTitle: 'Company',
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],

  // Legal Section
  legalTitle: 'Legal',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Section
  socialTitle: 'Connect',
  socialLinks: [
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'Discord', href: 'https://discord.com', icon: 'discord' },
  ],

  // Brand
  brandName: 'Alligo',
  brandTagline: 'Build stunning websites in minutes with AI-powered prompts and visual editing',

  // Copyright
  copyrightText: '© 2024 Alligo. All rights reserved.',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates on new features and AI improvements.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'discord':
        return <MessageSquare className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span data-editable="brandName">{config.brandName}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              <span data-editable="brandTagline">{config.brandTagline}</span>
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  data-editable="newsletterPlaceholder"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="companyTitle">{config.companyTitle}</span>
            </h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="legalTitle">{config.legalTitle}</span>
            </h4>
            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="socialTitle">{config.socialTitle}</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {config.socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(social.href)}
                  className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground rounded-md transition-colors"
                  aria-label={social.label}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                >
                  {getSocialIcon(social.icon)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('/privacy')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-editable-href="privacyHref"
              data-href="/privacy"
            >
              Privacy
            </button>
            <button
              onClick={() => handleLinkClick('/terms')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-editable-href="termsHref"
              data-href="/terms"
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
