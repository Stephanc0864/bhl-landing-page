import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  GraduationCap,
  CalendarCheck,
  LayoutGrid,
  TrendingUp,
  Settings,
  Clock,
  Star,
  Trophy,
} from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function scrollToCalendar(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

function HubSpotMeetingEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="meetings-iframe-container bg-background rounded-2xl border border-border shadow-lg overflow-hidden mb-6"
      data-src="https://meetings.hubspot.com/stephan-coles/ic-rr?embed=true"
      style={{ minHeight: 650 }}
    />
  );
}

export default function ThankYou() {
  useEffect(() => {
    document.title = "Thank You | University Athletics Recovery Pod | BH Labs";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Thank you for requesting your Recovery Pod revenue projection. Book your strategy call with BH Labs."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={FADE_UP} className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>For University Athletics</span>
              </motion.div>

              <motion.h1
                variants={FADE_UP}
                className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-foreground mb-4 leading-[1.15]"
              >
                Thank You — Your Revenue Projection Request Has Been Received
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              >
                You're one step closer to transforming underused athletic facility space into a centralized recovery system for your entire program.
              </motion.p>

              <motion.p
                variants={FADE_UP}
                className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
              >
                A BH Labs representative will be in touch within 24 hours. In the meantime, book a strategy call below to fast-track your project.
              </motion.p>

              <motion.div variants={FADE_UP}>
                <Button size="lg" className="h-14 px-8 text-base" onClick={scrollToCalendar}>
                  Book My Strategy Call
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="booking" className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={FADE_UP} className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Next Step</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-3">
                  Book Your Strategy Call
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  In 30 minutes, we'll review your athletic facility layout, discuss recovery goals and athlete use cases, evaluate space requirements, and outline equipment configuration and rollout options.
                </p>
              </motion.div>

              <motion.div variants={FADE_UP}>
                <HubSpotMeetingEmbed />
              </motion.div>

              <motion.p variants={FADE_UP} className="text-center text-sm text-muted-foreground">
                Having trouble loading the calendar?{" "}
                <a
                  href="https://meetings.hubspot.com/stephan-coles/ic-rr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Open it directly
                </a>{" "}
                or email us at{" "}
                <a
                  href="mailto:info@thebiohacklab.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  info@thebiohacklab.com
                </a>
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
                Why Athletics Departments Add Recovery Pods
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Programs that install a BH Labs Recovery Pod unlock measurable advantages across every sport.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: LayoutGrid,
                  title: "Maximize Underused Athletic Space",
                  desc: "Convert underperforming training room square footage into a centralized recovery center that serves every sport program.",
                },
                {
                  icon: Star,
                  title: "Premium Student-Athlete Recovery",
                  desc: "Offer clinical-grade recovery modalities — HBOT, compression, red light, PEMF — that most competing programs don't have on-site.",
                },
                {
                  icon: Trophy,
                  title: "Competitive Edge in Positioning",
                  desc: "Differentiate your program in recruiting with an elite, visible commitment to athlete health and recovery infrastructure.",
                },
                {
                  icon: Settings,
                  title: "Turnkey Implementation",
                  desc: "BH Labs handles design, equipment, installation, and training for your existing athletic trainers — zero additional headcount required.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } },
                  }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={FADE_UP} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
                  What Happens on the Call
                </h2>
                <p className="text-muted-foreground text-base">
                  Here's exactly what we'll cover in your 30-minute strategy session.
                </p>
              </motion.div>

              <motion.div variants={STAGGER} className="space-y-4">
                {[
                  {
                    icon: LayoutGrid,
                    title: "Review Your Athletics Facility Layout",
                    desc: "We'll assess your available training room and facility space to determine optimal pod placement for maximum athlete access.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Evaluate Recovery Opportunity & Use Cases",
                    desc: "We'll identify which sports and recovery scenarios — daily training, injury rehab, return-to-play — will benefit most from on-site recovery.",
                  },
                  {
                    icon: Settings,
                    title: "Discuss Equipment Configuration",
                    desc: "We'll recommend the right combination of modalities based on your athlete population, sports mix, and recovery priorities.",
                  },
                  {
                    icon: Clock,
                    title: "Outline Timeline & Next Steps",
                    desc: "From proposal approval to installation — we'll map out the implementation roadmap tailored to your academic and athletic calendar.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } },
                    }}
                    className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex justify-center mb-6">
                <img src={logoDark} alt="BH Labs" className="w-20 h-20 invert" loading="lazy" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">
                Built on Real-World Wellness Operations
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                BH Labs operates 5 wellness locations across Miami and partners with leading brands including Equinox and Reserve Padel Solemia. Our commercial-grade Recovery Pods are installed in diverse settings — from Dr. Johnny Salomon's medical facility to premium fitness environments. Every installation reflects years of hands-on operational experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "5 Miami Locations",
                  "Equinox Partnership",
                  "Reserve Padel Solemia",
                  "Dr. Johnny Salomon",
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2 variants={FADE_UP} className="text-2xl md:text-3xl font-serif text-foreground mb-3">
                Secure Your Booking Time
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-base mb-6">
                Strategy call spots fill up quickly. Lock in your preferred time now.
              </motion.p>
              <motion.div variants={FADE_UP}>
                <Button size="lg" className="h-14 px-8 text-base" onClick={scrollToCalendar}>
                  Book My Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="py-8 border-t border-border bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} BH Labs. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
