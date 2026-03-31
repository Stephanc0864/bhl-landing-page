import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Activity, ArrowRight, CheckCircle2, ChevronRight, 
  Hotel, Plus, TrendingUp, Users, Zap 
} from "lucide-react";
import heroImage from "@/assets/images/hero-hotel.png";
import hbotImage from "@/assets/images/hbot.png";
import redLightImage from "@/assets/images/red-light.png";
import saunaImage from "@/assets/images/sauna.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Hotels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Luxury hotel wellness spa" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <Hotel className="w-4 h-4" />
                <span>For Hospitality & Resorts</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
                Turn Idle Space Into <span className="text-primary italic">Wellness Revenue</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your hotel. Generate $15K+ monthly revenue with zero additional staff. Clinical biohacking meets luxury hospitality.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild data-testid="btn-hero-cta">
                  <a href="#contact">
                    Request a Revenue Projection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild data-testid="btn-hero-secondary">
                  <a href="#equipment">
                    View Equipment
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Math Section */}
        <section className="py-24 bg-card" id="roi">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">The New Standard of Amenity ROI</h2>
              <p className="text-muted-foreground text-lg">Wellness is no longer a cost center. It's your most profitable square footage.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Monthly Revenue",
                  value: "$21,000",
                  subtext: "Based on 200 rooms @ 70% occupancy with a $5/night wellness surcharge.",
                  icon: TrendingUp
                },
                {
                  title: "Payback Period",
                  value: "2.5 Months",
                  subtext: "On a ~$45K complete pod investment. Immediate cash flow positive.",
                  icon: Zap
                },
                {
                  title: "Required Staff",
                  value: "Zero",
                  subtext: "Self-guided protocols. Existing spa or gym staff can easily manage.",
                  icon: Users
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                  className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-2">{stat.title}</h3>
                  <div className="text-4xl md:text-5xl font-serif text-foreground mb-4">{stat.value}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="mt-12 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Total Annual Net Revenue Impact</h3>
              <div className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-4 text-secondary">+$252,000</div>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">Straight to your bottom line, year after year.</p>
            </motion.div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
              >
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                  Clinical Modalities,<br/>Premium Experience.
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-lg text-muted-foreground mb-8">
                  We don't just provide equipment; we curate an ecosystem of the world's most advanced recovery tech, designed for high-end environments.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    "HBOT (Hyperbaric Oxygen) Chamber",
                    "Medical-Grade Red Light Therapy",
                    "Full-Spectrum Infrared Sauna",
                    "Dynamic Lymphatic Drainage Suits",
                    "Targeted PEMF Devices"
                  ].map((item, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-2 aspect-video rounded-2xl overflow-hidden"
                >
                  <img src={hbotImage} alt="HBOT Chamber" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src={redLightImage} alt="Red Light Therapy" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src={saunaImage} alt="Infrared Sauna" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Turnkey Solution */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">A True Turnkey Partnership</h2>
              <p className="text-muted-foreground text-lg">We handle the complexity. You collect the revenue.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Design", desc: "Our in-house architect configures the layout perfectly for your available space." },
                { title: "Science-Backed", desc: "30+ protocols designed from peer-reviewed research for real results." },
                { title: "Full Support", desc: "Comprehensive 1-year warranty, technical support, and maintenance." },
                { title: "Staff Training", desc: "We train your existing hospitality staff to manage the pod seamlessly." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                  className="p-6 bg-background rounded-2xl border border-border"
                >
                  <Plus className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-3xl md:text-5xl font-serif mb-6"
                >
                  Trusted by Miami's Wellness Elite
                </motion.h2>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  With 5 successful wellness locations across Miami, we are the standard for premium recovery integration.
                </motion.p>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER}
                  className="space-y-4"
                >
                  {[
                    "Equinox Partnership Integrations",
                    "Reserve Padel Solemia",
                    "Dr. Johnny Salomon's Medical Facility",
                    "Multiple Luxury Condo Developments"
                  ].map((partner, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                      <Activity className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-primary-foreground">{partner}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="bg-background/5 p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-md">
                  <h3 className="text-2xl font-serif mb-6 text-primary-foreground">"The most requested amenity."</h3>
                  <p className="text-primary-foreground/80 italic mb-6">
                    Guests are no longer just looking for a treadmill; they want dedicated recovery. The BH Labs pod allowed us to upgrade our offering overnight and create a new, high-margin revenue stream.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">GM</span>
                    </div>
                    <div>
                      <div className="font-medium">General Manager</div>
                      <div className="text-primary-foreground/60 text-sm">Miami Luxury Resort</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm 
                type="hotel" 
                title="Get Your Revenue Projection" 
                subtitle="Request a custom proposal and financial model for your property."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
