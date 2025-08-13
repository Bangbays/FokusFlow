import Link from "next/link";
import Icon from "../AppIcon";

export default function LoginHeader() {
  return (
    <div className="text-center mb-8">
      <Link
        href="/marketing-landing-page"
        className="inline-flex items-center space-x-2 mb-6"
      >
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={24} color="white" />
        </div>
        <span className="text-2x1 font-semibold text-foreground">
          FokusFlow
        </span>
      </Link>

      <div className="space-y-2">
        <h1 className="text-3x1 font-semibold text-foreground">Welcome Back</h1>
        <p className="text-muted-foreground">
          Sign in to your account to continue managing your projects
        </p>
      </div>
    </div>
  );
}
