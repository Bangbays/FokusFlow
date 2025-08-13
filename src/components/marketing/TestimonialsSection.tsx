// src/components/marketing/TestimonialsSection.tsx
"use client";

import React from "react";
import Icon from "@/components/AppIcon";
import Image from "@/components/AppImage";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Freelance Web Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "FokusFlow transformed how I manage my client projects. The visual status tracking is a game-changer—I can see exactly what needs attention at a glance.",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "As someone juggling 8+ client projects, FokusFlow keeps me organized and professional. The clean interface makes project management actually enjoyable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Digital Marketing Consultant",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The real-time task updates and color-coded system help me stay on top of deadlines. My clients love the professional organization it brings to our projects.",
      rating: 5,
    },
  ];

  const stats = [
    { id: 1, number: "10,000+", label: "Active Freelancers", icon: "Users" },
    { id: 2, number: "50,000+", label: "Projects Managed", icon: "FolderOpen" },
    { id: 3, number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { id: 4, number: "24/7", label: "Support Available", icon: "Clock" },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                <Icon name={stat.icon as any} size={24} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>What Freelancers Say</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands of
            <span className="text-primary block">Professional Freelancers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join the community of successful freelancers who've streamlined
            their project management with FokusFlow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-elevation-2 transition-smooth"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Icon
                    key={index}
                    name="Star"
                    size={16}
                    className="text-warning fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-8 mt-16 pt-16 border-t border-border">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Shield" size={20} className="text-success" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Lock" size={20} className="text-success" />
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Award" size={20} className="text-success" />
            <span className="text-sm font-medium">SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
