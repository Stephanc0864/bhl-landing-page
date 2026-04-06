import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Calculator, Menu, X } from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Hotels & Resorts", testId: "link-nav-hotels" },
    { href: "/fitness", label: "Fitness and Sports Club", testId: "link-nav-fitness" },
    { href: "/residential", label: "Luxury Residential", testId: "link-nav-residential" },
    { href: "/athletics", label: "University Athletics", testId: "link-nav-athletics" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto px-2 sm:px-4 lg:px-6 max-w-[1400px]">
        <div className="flex items-center h-20 lg:h-36 gap-4">
          {/* Logo — flush left */}
          <div className="flex-shrink-0 mr-auto lg:mr-6">
            <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
              <img src={logoDark} alt="BH Labs" className="w-14 h-14 lg:w-32 lg:h-32" />
              <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
            </Link>
          </div>

          {/* Sector nav — centered text, tighter spacing */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-all duration-200 px-4 py-2 rounded-md text-center min-w-[120px]",
                  location === link.href 
                    ? "text-white bg-primary shadow-md shadow-primary/30" 
                    : "text-muted-foreground/70 hover:text-foreground hover:bg-secondary/50"
                )}
                data-testid={link.testId}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons — centered text */}
          <div className="flex items-center gap-2 ml-auto lg:ml-6">
            {(location === "/" || location === "/residential" || location === "/fitness") && (
              <a
                href="#calculator"
                className="hidden lg:inline-flex h-12 items-center justify-center text-center rounded-full bg-emerald-600 px-6 text-sm font-bold text-white transition-all hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105"
                data-testid="link-nav-calculator"
              >
                <Calculator className="w-4 h-4 mr-2" />
                ROI Calculator
              </a>
            )}
            <a
              href="#contact"
              className="hidden lg:inline-flex h-12 items-center justify-center text-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              data-testid="link-nav-contact"
            >
              Contact Us
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 px-3 rounded-md transition-colors text-center",
                  location === link.href ? "text-primary bg-secondary/50" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-2 text-center py-2 px-3 rounded-md bg-primary text-primary-foreground text-base font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
