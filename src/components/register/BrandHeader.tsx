import React from "react";
import Link from "next/link";
import Icon from "../AppIcon";

export default function BrandHeader() {
  return (
    <div className="text-center mb-8">
      <Link
        href="/marketing"
        className="inline-flex items-center space-x-3 mb-6"
      >
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-elevation-2">
          <Icon name="Zap" size={24} color="white" />
        </div>
        <span className="text-2xl font-bold text-foreground">FokusFlow</span>
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Create Your Account
        </h1>
        <p className="text-muted-foreground text-lg">
          Join thousands of freelancers managing their projects efficiently
        </p>
      </div>
    </div>
  );
}
