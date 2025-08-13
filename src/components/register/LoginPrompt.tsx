import React from "react";
import Link from "next/link";

export default function LoginPrompt() {
  return (
    <div className="text-center pt-6 border-t border-border">
      <p className="text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary hover:text-primary/80 font-medium transition-smooth"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
