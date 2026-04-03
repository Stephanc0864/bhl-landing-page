import { Header } from "@/components/layout/header";
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { FAQSection } from "@/components/ui/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ChevronDown,
  Hotel, TrendingUp, Users, Zap, DollarSign,
  Sparkles, Heart, Droplets, Camera
} from "lucide-react";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import redLightImage from "@/assets/images/redlight-therapy.jpg";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import compressionImage from "@/assets/images/compression-boots.jpg";
import pemfImage from "@/assets/images/pemf-device.jpg";
import pemfTreatmentImage from "@/assets/images/pemf-treatment.jpg";
import lymphaticImage from "@/assets/images/lymphatic-drainage.jpg";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import turnkeyDesignImage from "@/assets/images/turnkey-design.png";
import turnkeyTrainingImage from "@/assets/images/turnkey-training.png";
import turnkeyScienceImage from "@/assets/images/turnkey-science.png";
import turnkeySupportImage from "@/assets/images/turnkey-support.png";

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
      <SchemaMarkup page="hotels" />
      <Header />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="The Biohack Lab storefront — BH Labs Recovery Pod installation in Miami" 
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl"
            >
              <motion.div variants={FADE_UP} className="mb-4 md:mb-6">
                <img src={logoDark} alt="BH Labs Logo" className="w-24 h-24 md:w-48 md:h-48 mb-2 md:mb-4" width={400} height={400} />
              </motion.div>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <Hotel className="w-4 h-4" />
                <span>For Hotels & Resorts</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                Turn Underused Hotel Space Into a New <span className="text-primary italic">$25K+/Month Revenue Stream</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl leading-relaxed">
                BH Labs designs and installs turnkey Recovery Pods for hotels and resorts — without requiring additional headcount.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button size="lg" className="h-14 px-8 text-base" asChild data-testid="btn-hero-cta">
                  <a href="#calculator">
                    Calculate My Revenue Potential
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <a href="#contact">
                    Book a Strategy Call
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={FADE_UP} className="space-y-2">
                {[
                  "Turnkey install + staff training included",
                  "Typical payback in under 2 months",
                  "Trusted across 5 Miami wellness locations"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={FADE_UP} className="text-xs text-muted-foreground/60 mt-4 italic">
                Illustrative figures based on property size, occupancy, utilization, and pricing assumptions.
              </motion.p>
            </motion.div>
          </div>

          <motion.a
            href="#why-now"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold uppercase tracking-widest">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-10 h-10" />
            </motion.div>
          </motion.a>
        </section>

        {/* WHY THIS MATTERS NOW */}
        <section className="py-12 md:py-24 bg-background" id="why-now">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Why hotel operators are adding wellness revenue now</h2>
              <p className="text-muted-foreground text-lg">The hospitality wellness market is growing faster than traditional amenity segments. Properties with dedicated wellness offerings attract higher-value guests and unlock new ancillary revenue — without major operational burden.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: DollarSign, title: "Monetize Underused Space", desc: "Convert underperforming square footage into a self-sustaining revenue center generating $25K+/month." },
                { icon: TrendingUp, title: "Capture Wellness Demand", desc: "Wellness tourism will exceed $1 trillion globally (GWI 2024). Position your property to capture this premium segment." },
                { icon: Sparkles, title: "Differentiate Guest Experience", desc: "Offer a recovery and wellness amenity that most competing properties simply don't have yet." },
                { icon: Users, title: "Zero Additional Headcount", desc: "Your existing spa or hospitality staff can operate the pod. BH Labs handles training and certification." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <ROICalculator />

        {/* PROOF / CREDIBILITY */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground" id="proof">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-2xl md:text-3xl lg:text-5xl font-serif mb-4"
                >
                  Why hotel operators take this seriously
                </motion.h2>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  BH Labs has 5 successful wellness installations across Miami. Every installation is designed, equipped, and supported end-to-end — from architectural layout to staff certification.
                </motion.p>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER}
                  className="space-y-4 mb-8"
                >
                  {[
                    { name: "Equinox Partnership Integrations", detail: "Premium fitness" },
                    { name: "Reserve Padel Solemia", detail: "Sports & recreation" },
                    { name: "Dr. Johnny Salomon's Medical Facility", detail: "Medical wellness" }
                  ].map((partner, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <span className="font-medium text-primary-foreground">{partner.name}</span>
                        <span className="text-primary-foreground/60 text-sm ml-2">— {partner.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Case Study</span>
                  </div>
                  <p className="text-sm text-primary-foreground/60 italic leading-relaxed">
                    Case study placeholder — add property name, room count, launch timeline, utilization rate, and monthly revenue when available.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="bg-background/5 p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-md">
                  <div className="flex justify-center mb-6">
                    <img src={logoLight} alt="BH Labs" className="w-28 h-28 md:w-56 md:h-56" loading="lazy" width={400} height={400} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-primary-foreground leading-snug">
                    "Wellness tourists spend 41-175% more than average travelers."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">GWI</span>
                    </div>
                    <div>
                      <div className="font-medium">Global Wellness Institute</div>
                      <div className="text-primary-foreground/60 text-sm">Global Wellness Economy Report, 2024</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-primary-foreground/50 mt-4 italic text-center">
                  Sample projections are based on modeled assumptions such as room count, occupancy, guest utilization, and pricing strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT BY GUEST OUTCOME */}
        <section className="py-12 md:py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">What guest experiences does a Recovery Pod enable?</h2>
              <p className="text-lg text-muted-foreground">Seven modalities grouped by the wellness outcomes your guests are looking for — each contributing to premium positioning and repeat bookings.</p>
            </motion.div>

            {[
              {
                category: "Recovery & Performance",
                categoryIcon: Zap,
                description: "Appeals to fitness-minded travelers, executives recovering from travel fatigue, and guests seeking active recovery.",
                items: [
                  { name: "HBOT Chamber", desc: "Pressurized oxygen therapy for accelerated recovery, jet lag relief, and cellular regeneration. A high-demand modality for wellness-forward guests.", image: hbotImage },
                  { name: "PEMF Therapy", desc: "Pulsed electromagnetic field therapy for deep tissue recovery, pain relief, and post-travel restoration.", image: pemfImage },
                  { name: "Compression Therapy", desc: "Dynamic compression suits for enhanced circulation and faster physical recovery — popular with active travelers.", image: compressionImage }
                ]
              },
              {
                category: "Relaxation & Stress Relief",
                categoryIcon: Heart,
                description: "Appeals to leisure travelers, couples, and guests seeking spa-level wellness beyond traditional offerings.",
                items: [
                  { name: "Infrared Sauna", desc: "Full-spectrum infrared for deep relaxation, detoxification, and cardiovascular support — a premium spa differentiator.", image: saunaImage },
                  { name: "Red Light Therapy", desc: "Full-body red and near-infrared panels for skin rejuvenation, inflammation reduction, and stress relief.", image: redLightImage }
                ]
              },
              {
                category: "Circulation & Detox Support",
                categoryIcon: Droplets,
                description: "Appeals to health-conscious guests and wellness tourists seeking comprehensive detoxification and recovery protocols.",
                items: [
                  { name: "Lymphatic Drainage", desc: "Advanced pressotherapy combining compression and red light for enhanced circulation and full-body detoxification.", image: lymphaticImage },
                  { name: "Targeted PEMF", desc: "Localized electromagnetic therapy for specific muscle groups and targeted recovery — ideal for post-activity sessions.", image: pemfTreatmentImage }
                ]
              }
            ].map((group, gi) => (
              <div key={gi} className="mb-12 last:mb-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="flex items-center gap-3 mb-2"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <group.categoryIcon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-foreground">{group.category}</h3>
                </motion.div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-sm text-muted-foreground mb-6 max-w-2xl"
                >{group.description}</motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                      <div className="overflow-hidden bg-neutral-50 flex items-center justify-center max-h-[250px] md:max-h-[400px]">
                        <img src={item.image} alt={`${item.name} — BH Labs Recovery Pod`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 max-h-[250px] md:max-h-[400px]" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium text-foreground mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TURNKEY INSTALLATION — ADDRESS OPERATIONAL FEAR */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">You don't need a wellness team. We handle it.</h2>
              <p className="text-muted-foreground text-lg">BH Labs manages design, equipment, installation, and training. Your existing spa or hospitality staff can operate the pod from day one — with minimal disruption during setup.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Layout Design", desc: "Our in-house architect configures the pod layout to fit your available space — no guesswork, no expensive consultants.", image: turnkeyDesignImage, reassurance: "We adapt to your footprint" },
                { title: "Science-Backed Protocols", desc: "30+ recovery protocols designed from peer-reviewed research, packaged for a luxury hospitality environment.", image: turnkeyScienceImage, reassurance: "Clinically informed, guest-ready" },
                { title: "Full Support & Warranty", desc: "Comprehensive 1-year warranty, ongoing technical support, and maintenance — so your team can focus on guests.", image: turnkeySupportImage, reassurance: "We stay with you post-install" },
                { title: "Staff Training & Certification", desc: "We train and certify your existing spa staff to run every modality confidently. No additional hires required.", image: turnkeyTrainingImage, reassurance: "Your team, fully prepared" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                  className="bg-background rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} — BH Labs turnkey hotel wellness installation`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{feature.desc}</p>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{feature.reassurance}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OPPORTUNITY COST — PREMIUM, NOT FEAR-BASED */}
        <section className="py-16 bg-stone-50 border-y border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">What is the opportunity cost of leaving this space underused?</h2>
              <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">Every month without a wellness offering is revenue-generating square footage sitting idle. Here's what the numbers suggest.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">$324K</div>
                  <p className="text-sm text-muted-foreground">Estimated annual revenue opportunity from a single Recovery Pod installation</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">41-175%</div>
                  <p className="text-sm text-muted-foreground">Higher per-trip spending from wellness travelers vs. standard guests — <em>Global Wellness Institute, 2024</em></p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">&lt; 2 Months</div>
                  <p className="text-sm text-muted-foreground">Typical payback period — faster monetization than most hotel capital investments</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-6 italic">Figures are illustrative and based on modeled assumptions. Actual results vary by property.</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={[
          { question: "What type of hotel is the best fit for a Recovery Pod?", answer: "Recovery Pods work well in luxury hotels, boutique hotels, resorts, and wellness-oriented properties. The best fit is typically a property with 100+ rooms, an existing spa or wellness area (or plans for one), and guests who value premium amenities. That said, BH Labs works with you to assess guest fit during the feasibility call." },
          { question: "How much staff involvement is required day to day?", answer: "Minimal. BH Labs trains and certifies your existing spa or hospitality staff to operate every modality. There's no need to hire dedicated wellness technicians. Most properties integrate pod operation into their existing spa workflow." },
          { question: "What kind of space layout works best?", answer: "Our in-house architect designs a custom pod layout for your available space. Most installations require 400-800 square feet, but we can adapt to a range of footprints. We'll evaluate your space during the feasibility review." },
          { question: "How long does installation take?", answer: "A typical installation takes 2-4 weeks from layout approval to operational launch, depending on property logistics. BH Labs manages the full process — design, equipment delivery, installation, and staff training — to minimize disruption." },
          { question: "Do you help with pricing strategy and guest packaging?", answer: "Yes. BH Labs provides guidance on ADR surcharge strategy, a-la-carte session pricing, and guest wellness packaging to help maximize revenue from the first day of operation." },
          { question: "What happens after installation?", answer: "BH Labs provides a comprehensive 1-year warranty, ongoing technical support, and maintenance. We stay involved to ensure the pod operates smoothly and continues to generate revenue for your property." },
          { question: "Is this best as a spa add-on or standalone offering?", answer: "Both models work. Many properties integrate the Recovery Pod into their existing spa to expand their offering. Others position it as a standalone wellness center. BH Labs helps you evaluate the right approach based on your space, guest profile, and revenue goals." }
        ]} />

        {/* LEAD FORM */}
        <section className="py-12 md:py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm 
                title="Book a Strategy Call" 
                subtitle="Tell us about your property and we'll prepare a tailored revenue assessment for your space."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
