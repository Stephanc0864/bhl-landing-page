import { Header } from "@/components/layout/header";
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { FAQSection } from "@/components/ui/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building, CheckCircle2, TrendingUp, ShieldCheck, ChevronDown,
  Leaf, Zap, Clock, ArrowRight, DollarSign, Star, Camera,
  Heart, Droplets, Sparkles
} from "lucide-react";
import heroImage from "@/assets/images/hero-residential.png";
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

export default function Residential() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup />
      <Header />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Luxury residential building with wellness amenity space"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
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
                <Building className="w-4 h-4" />
                <span>For Luxury Residential & HOAs</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                The Amenity That <span className="text-primary italic">Pays for Itself</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl leading-relaxed text-left">
                Install a turnkey BH Labs Recovery Pod that creates a new wellness fee revenue stream, increases perceived property value, and helps your building stand out — without requiring dedicated staff.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <a href="#calculator">
                    Calculate ROI
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <a href="#contact">
                    Request a Meeting
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={FADE_UP} className="space-y-2">
                {[
                  "Turnkey install + resident-ready setup",
                  "New fee-based wellness amenity revenue",
                  "No dedicated staff required"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={FADE_UP} className="text-xs text-muted-foreground/60 mt-4 italic">
                Illustrative figures based on unit count, fee structure, participation assumptions, and operating costs.
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
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Why residential properties are adding wellness amenities now</h2>
              <p className="text-muted-foreground text-lg">Premium wellness creates differentiation, supports resident satisfaction, and opens a new revenue stream — without requiring a full spa buildout.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: DollarSign, title: "New Wellness Fee Revenue", desc: "Create a fee-based amenity that generates recurring monthly income — funded by residents, not the operating budget." },
                { icon: TrendingUp, title: "Perceived Property Value", desc: "Wellness-integrated properties position as premium. This positions wellness as a measurable amenity investment, not just a lifestyle upgrade." },
                { icon: Star, title: "Competitive Differentiation", desc: "Pools and gyms are expected. A wellness recovery amenity is a differentiator that competing properties likely don't have yet." },
                { icon: Zap, title: "Low Operational Burden", desc: "Self-guided protocols mean no dedicated staff. Existing building staff can manage access and operations from day one." }
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
                  Why property decision-makers take this seriously
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  BH Labs has 5 successful wellness installations across Miami — from luxury fitness brands to medical facilities. Every installation is designed, equipped, and supported end-to-end.
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
                    Case study placeholder — add property type, unit count, amenity footprint, fee model, payback period, and operator quote when available.
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
                    "Wellness-integrated properties see increased perceived value, resident satisfaction, and competitive positioning."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Industry Insight</div>
                      <div className="text-primary-foreground/60 text-sm">Global Wellness Institute, 2025</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-primary-foreground/50 mt-4 italic text-center">
                  Projections are based on modeled assumptions. Actual results vary by property.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROPERTY VALUE / AMENITY STRATEGY */}
        <section className="py-12 md:py-24 bg-background" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
              >
                <motion.h2 variants={FADE_UP} className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-6">
                  How does a Recovery Pod support property value and resident experience?
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-lg text-muted-foreground mb-4 leading-relaxed text-left">
                  According to the <strong className="text-foreground">Global Wellness Institute (2025)</strong>, wellness-integrated properties see increased perceived value and competitive positioning. A Recovery Pod positions wellness as a measurable amenity investment, not just a lifestyle upgrade.
                </motion.p>
                <motion.p variants={FADE_UP} className="text-sm text-muted-foreground mb-8 italic">
                  Property value impact depends on market, cap rate, fee structure, and comparable amenities. Figures are illustrative.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={FADE_UP} className="bg-card p-6 rounded-2xl border border-border">
                    <Sparkles className="w-8 h-8 text-primary mb-4" />
                    <div className="text-lg font-serif text-foreground mb-1">Amenity Differentiation</div>
                    <div className="text-sm text-muted-foreground">Premium recovery is a differentiator competing buildings likely don't offer — supporting renewal, resale, and leasing appeal.</div>
                  </motion.div>
                  <motion.div variants={FADE_UP} className="bg-card p-6 rounded-2xl border border-border">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <div className="text-lg font-serif text-foreground mb-1">Resident Satisfaction</div>
                    <div className="text-sm text-muted-foreground">A visible, premium wellness amenity signals quality and supports higher resident satisfaction at renewal and resale.</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-full bg-secondary/30 absolute -inset-4 blur-3xl -z-10" />
                <img src={saunaImage} alt="Premium infrared sauna in luxury residential wellness pod" className="rounded-2xl shadow-xl border border-border/50" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT BY RESIDENT OUTCOME */}
        <section className="py-12 md:py-24 bg-card" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">What does the resident wellness experience include?</h2>
              <p className="text-lg text-muted-foreground">A complete wellness amenity designed to increase perceived value, resident satisfaction, and modern luxury appeal.</p>
            </motion.div>

            {[
              {
                category: "Recovery & Stress Relief",
                categoryIcon: Heart,
                description: "Appeals to residents seeking relaxation, recovery from exercise, and daily stress reduction — a premium lifestyle amenity that drives consistent usage.",
                items: [
                  { name: "Infrared Sauna", desc: "Full-spectrum infrared for deep relaxation, detoxification, and cardiovascular support — the signature experience residents associate with luxury wellness.", image: saunaImage },
                  { name: "Red Light Therapy", desc: "Full-body red and near-infrared panels for skin rejuvenation, inflammation reduction, and stress recovery — a daily-use amenity with broad appeal.", image: redLightImage },
                  { name: "Compression Therapy", desc: "Dynamic compression suits for enhanced circulation and post-activity recovery — popular with active residents and fitness enthusiasts.", image: compressionImage }
                ]
              },
              {
                category: "Daily Wellness & Rejuvenation",
                categoryIcon: Sparkles,
                description: "Appeals to wellness-conscious residents looking for consistent, accessible recovery protocols that fit into their daily routines.",
                items: [
                  { name: "HBOT Chamber", desc: "Pressurized oxygen therapy for accelerated recovery and enhanced vitality — a high-value modality that positions the amenity as truly premium.", image: hbotImage },
                  { name: "PEMF Therapy", desc: "Pulsed electromagnetic field therapy for cellular recovery, pain relief, and overall wellbeing — a research-backed modality for daily use.", image: pemfImage }
                ]
              },
              {
                category: "Circulation & Detox Support",
                categoryIcon: Droplets,
                description: "Supports comprehensive detoxification and regeneration — appeals to health-conscious residents seeking advanced wellness protocols.",
                items: [
                  { name: "Lymphatic Drainage", desc: "Advanced pressotherapy combining compression and red light for enhanced circulation and full-body detoxification — a spa-level experience.", image: lymphaticImage },
                  { name: "Targeted PEMF", desc: "Localized electromagnetic therapy for specific recovery areas — supports residents dealing with soreness, tension, or targeted recovery needs.", image: pemfTreatmentImage }
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
                      className="group rounded-2xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow"
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

        {/* INSTALLATION */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">You don't need a wellness department. We handle it.</h2>
              <p className="text-muted-foreground text-lg">BH Labs manages design, equipment, installation, and training. Your building staff can support the amenity from day one — with minimal disruption to residents during setup.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { image: turnkeyDesignImage, title: "Custom Layout Design", desc: "Our in-house architect optimizes the pod layout for your available amenity space — whether it's a spare room, unused area, or existing wellness zone.", reassurance: "Optimized for your footprint" },
                { image: turnkeyScienceImage, title: "Equipment & Installation", desc: "All seven modalities delivered, installed, and calibrated on-site with minimal disruption to residents and building operations.", reassurance: "Minimal resident disruption" },
                { image: turnkeyTrainingImage, title: "Staff Onboarding", desc: "Comprehensive training for your building staff on equipment operation, resident guidance, and 30+ self-guided recovery protocols.", reassurance: "Your team, fully prepared" },
                { image: turnkeySupportImage, title: "Ongoing Support", desc: "1-year comprehensive warranty, technical support, and same-day service availability from our Miami-based team.", reassurance: "We stay with you post-install" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden bg-neutral-50 flex items-center justify-center" style={{ maxHeight: '250px' }}>
                    <img src={step.image} alt={step.title} className="w-full h-full object-contain" style={{ maxHeight: '250px' }} loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step {i + 1}</div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{step.reassurance}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE / OPERATIONS */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
                className="space-y-8"
              >
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-serif">Designed for simple building operations</motion.h2>
                <motion.p variants={FADE_UP} className="text-primary-foreground/80 text-lg">
                  We know property managers are busy. The Recovery Pod is a completely turnkey, low-maintenance amenity — no dedicated wellness staff required.
                </motion.p>

                <div className="space-y-6 mt-8">
                  {[
                    { icon: ShieldCheck, title: "1-Year Comprehensive Warranty", desc: "Full coverage on all equipment from our Miami-based team with rapid response service." },
                    { icon: Zap, title: "Technical Support & Maintenance", desc: "Ongoing technical support with same-day service availability — so your team can focus on residents." },
                    { icon: Leaf, title: "Self-Guided Resident Protocols", desc: "30+ research-backed protocols residents can use safely without supervision. Guided access, not staff-intensive." }
                  ].map((feature, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-primary-foreground mb-1">{feature.title}</h4>
                        <p className="text-primary-foreground/70 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <img src={hbotImage} alt="Resident using HBOT chamber in luxury condo wellness pod" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
                  <div className="text-primary-foreground">
                    <div className="font-serif text-2xl mb-2">"A massive draw for new buyers."</div>
                    <div className="text-sm opacity-80">— Operator quote placeholder (add name, role, and property type when available)</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OPPORTUNITY COST */}
        <section className="py-16 bg-stone-50 border-y border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">What is the opportunity cost of not offering a premium wellness amenity?</h2>
              <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">Every month without a wellness offering is potential revenue and competitive positioning sitting idle.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Renewals</div>
                  <p className="text-sm text-muted-foreground">Resident comparison happens at renewal. Amenity differentiation supports retention and perceived value.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Competition</div>
                  <p className="text-sm text-muted-foreground">Competing properties are upgrading amenities. Premium wellness is emerging as a differentiator in luxury residential.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Revenue</div>
                  <p className="text-sm text-muted-foreground">Underused amenity space represents untapped fee-based revenue potential — recoverable with the right strategy.</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-6 italic">Figures are illustrative and based on modeled assumptions. Actual results vary by property.</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={[
          { question: "How much wellness fee revenue can a Recovery Pod generate?", answer: "Revenue depends on your unit count, fee structure, and resident adoption. As an illustrative example, a 150-unit property at $30/month with 70% participation could generate approximately $3,000/month in net revenue. BH Labs provides a custom estimate during the strategy call." },
          { question: "What is the estimated payback period?", answer: "Payback periods are illustrative and depend on fee structure, participation, and operating costs. Typical modeled scenarios show payback within 12-18 months at conservative assumptions. BH Labs can model your specific scenario." },
          { question: "Does a Recovery Pod support property value?", answer: "The Global Wellness Institute (2025) notes that wellness-integrated properties see increased perceived value and competitive positioning. Actual impact depends on your market, cap rate, and comparable amenities." },
          { question: "How much space is actually required?", answer: "Most installations require 400-800 square feet of amenity space. Our in-house architect designs a custom layout optimized for your available footprint — whether it's a spare room, unused area, or existing wellness zone." },
          { question: "Can residents use it without supervision?", answer: "Yes. The Recovery Pod includes 30+ self-guided, research-backed protocols designed for safe, independent use. Building staff can manage access and provide basic guidance after BH Labs training." },
          { question: "How is access managed in a shared building?", answer: "Access can be managed through your existing building access system — key fobs, concierge check-in, or scheduling software. BH Labs provides guidance on access management during the planning process." },
          { question: "Is this best for condos, apartments, or HOAs?", answer: "Recovery Pods work well in all three. The fee model varies — HOAs can add a wellness fee to dues, apartments can include it in premium units, and condos can implement it through board-approved amenity fees. BH Labs helps you identify the right structure." },
          { question: "What utility or maintenance requirements should we plan for?", answer: "The Recovery Pod requires standard electrical outlets (no special power), adequate ventilation, and minimal ongoing maintenance. BH Labs provides a comprehensive 1-year warranty and ongoing technical support with same-day service availability." },
          { question: "Does the property need dedicated wellness staff?", answer: "No. The pod is designed for self-guided use with existing building staff providing basic access management. BH Labs trains your team on equipment operation and resident protocols." },
          { question: "How long does installation take?", answer: "A typical installation takes 2-4 weeks from layout approval to operational launch. BH Labs manages the full process — design, delivery, installation, and staff training — with minimal disruption to residents." },
          { question: "What happens after installation?", answer: "BH Labs provides a comprehensive 1-year warranty, ongoing technical support, and maintenance from our Miami-based team. We stay involved to ensure the amenity operates smoothly and delivers value." }
        ]} />

        {/* LEAD FORM */}
        <section className="py-12 md:py-24 bg-card relative overflow-hidden" id="contact">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/20 rounded-tr-full blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm
                title="Request a Meeting"
                subtitle="Tell us about your property and we'll prepare a tailored wellness amenity assessment and revenue estimate."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
