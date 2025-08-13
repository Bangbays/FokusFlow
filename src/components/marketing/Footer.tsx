// src/components/marketing/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Icon from "@/components/AppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#blog" },
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Status", href: "#status" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <Link
                href="/marketing"
                className="flex items-center space-x-2 mb-6"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  FokusFlow
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Streamline your freelance projects with intuitive task
                management and visual status tracking.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-smooth"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon as any} size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h3 className="font-semibold text-foreground mb-4 capitalize">
                  {key}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} FokusFlow. All rights reserved.
            </span>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                Sign In
              </Link>
              <Link href="/register">
                <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-smooth">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
