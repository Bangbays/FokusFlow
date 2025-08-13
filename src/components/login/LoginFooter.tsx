import Link from "next/link";
import Icon from "../AppIcon";

export default function LoginFooter() {
  return (
    <div className="mt-8 text-center space-y-4">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-muted-foreground">Don't have an account?</span>
        <Link
          href="/user-registration"
          className="text-primary hover:text-primary/80 font-medium transition-smooth"
        >
          Sign up
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1 h-px bg-border"></div>
        <span className="text-xs text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border"></div>
      </div>

      <Link
        href="/marketing-landing-page"
        className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
      >
        <Icon name="ArrowLeft" size={16} />
        <span>Back to home</span>
      </Link>

      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Shield" size={14} />
          <span>Your data is protected with SSL encryption</span>
        </div>
      </div>
    </div>
  );
}
