import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  BarChart3,
  TrendingDown,
  Scale,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto py-12">
        {/* Exam Prep Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-6 border border-border">
          <GraduationCap className="w-4 h-4 text-primary" />
          Exam Preparation Mode
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Engineering Economics <br />
          <span className="text-primary">Master Study Notes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          A centralized dashboard for formulas, cash flow diagrams, and core
          economic concepts structured specifically for efficient exam review.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-16">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-md transition-all duration-200 text-center"
          >
            Open Study Notes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Reference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {/* Card 1 */}
          <div className="p-6 bg-card text-card-foreground rounded-xl border border-border shadow-sm flex flex-col gap-3">
            <div className="p-2 bg-muted rounded-lg w-fit text-primary">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Time Value of Money</h3>
              <p className="text-sm text-muted-foreground">
                Present worth, future worth, and uniform series cash flows.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-card text-card-foreground rounded-xl border border-border shadow-sm flex flex-col gap-3">
            <div className="p-2 bg-muted rounded-lg w-fit text-primary">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Depreciation & Taxes</h3>
              <p className="text-sm text-muted-foreground">
                Straight-line, MACRS, and after-tax economic analysis.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-card text-card-foreground rounded-xl border border-border shadow-sm flex flex-col gap-3">
            <div className="p-2 bg-muted rounded-lg w-fit text-primary">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Comparison Methods</h3>
              <p className="text-sm text-muted-foreground">
                NPV, IRR, and Benefit-Cost ratio analysis for projects.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border/40">
        Built for Next.js Docs • Engineering Economics Prep
      </footer>
    </div>
  );
}
