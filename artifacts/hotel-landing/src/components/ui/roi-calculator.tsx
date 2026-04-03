import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [units, setUnits] = useState(200);
  const [rate, setRate] = useState(5);
  const [occupancy, setOccupancy] = useState(70);
  const [sessionsPerDay, setSessionsPerDay] = useState(10);
  const [sessionPrice, setSessionPrice] = useState(20);
  const [operatingCost, setOperatingCost] = useState(450);
  const [showMethodology, setShowMethodology] = useState(false);

  const results = useMemo(() => {
    const investmentCost = 45000;
    const adrMonthly = units * (occupancy / 100) * rate * 30;
    const alaCarteMonthly = sessionsPerDay * sessionPrice * 30;
    const grossMonthly = adrMonthly + alaCarteMonthly;
    const totalMonthly = grossMonthly - operatingCost;
    const annual = totalMonthly * 12;
    const paybackMonths = totalMonthly > 0 ? investmentCost / totalMonthly : 0;
    return { adrMonthly, alaCarteMonthly, grossMonthly, totalMonthly, annual, paybackMonths, investmentCost };
  }, [units, rate, occupancy, sessionsPerDay, sessionPrice, operatingCost]);

  const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();
  const formatMonths = (n: number) => n < 1 ? "Under 1 Month" : n < 2 ? "Under 2 Months" : Math.ceil(n) + " Months";

  return (
    <section className="py-12 md:py-24 bg-card" id="calculator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>Revenue Estimator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Estimate your property's wellness revenue potential
          </h2>
          <p className="text-muted-foreground text-lg">Adjust the inputs to model projected returns for your property. Results are illustrative and update instantly.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-medium text-foreground">Your Property Details</h3>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-units" className="text-muted-foreground">Number of Rooms</label>
                  <span className="font-semibold text-foreground text-base">{units}</span>
                </div>
                <input id="hotel-units" type="range" min={50} max={500} value={units} onChange={(e) => setUnits(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Number of Rooms: ${units}`} />
                <p className="text-xs text-muted-foreground mt-1">Total guest rooms at the property</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-rate" className="text-muted-foreground">Wellness Surcharge per Night</label>
                  <span className="font-semibold text-foreground text-base">${rate}</span>
                </div>
                <input id="hotel-rate" type="range" min={2} max={15} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Wellness Surcharge per Night: $${rate}`} />
                <p className="text-xs text-muted-foreground mt-1">ADR surcharge applied to occupied rooms with wellness access</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-occupancy" className="text-muted-foreground">Average Occupancy Rate</label>
                  <span className="font-semibold text-foreground text-base">{occupancy}%</span>
                </div>
                <input id="hotel-occupancy" type="range" min={40} max={95} value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Occupancy Rate: ${occupancy}%`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-sessions" className="text-muted-foreground">Walk-In Sessions per Day</label>
                  <span className="font-semibold text-foreground text-base">{sessionsPerDay}</span>
                </div>
                <input id="hotel-sessions" type="range" min={0} max={30} value={sessionsPerDay} onChange={(e) => setSessionsPerDay(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Walk-In Sessions per Day: ${sessionsPerDay}`} />
                <p className="text-xs text-muted-foreground mt-1">Guest and non-guest a-la-carte recovery sessions</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-price" className="text-muted-foreground">Average Session Price</label>
                  <span className="font-semibold text-foreground text-base">${sessionPrice}</span>
                </div>
                <input id="hotel-price" type="range" min={10} max={75} value={sessionPrice} onChange={(e) => setSessionPrice(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Average Session Price: $${sessionPrice}`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-operating" className="text-muted-foreground">Monthly Operating Cost</label>
                  <span className="font-semibold text-foreground text-base">${operatingCost}</span>
                </div>
                <input id="hotel-operating" type="range" min={0} max={2000} step={50} value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Monthly Operating Cost: $${operatingCost}`} />
                <p className="text-xs text-muted-foreground mt-1">Estimated operating costs reflect basic staffing and utilization assumptions and may vary by property</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-900/30">
              <div>
                <h3 className="text-lg font-medium mb-6 text-emerald-200">Projected Returns</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">ADR Wellness Surcharge</div>
                      <div className="text-xl font-serif">{formatCurrency(results.adrMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">A-La-Carte Sessions</div>
                      <div className="text-xl font-serif">{formatCurrency(results.alaCarteMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                    </div>
                  </div>
                  <div className="h-px bg-emerald-600/50" />

                  <div className="bg-emerald-600/40 rounded-xl p-4 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 mt-0.5 text-emerald-300" />
                      <div>
                        <div className="text-sm text-emerald-200 font-medium">Estimated Monthly Revenue</div>
                        <div className="text-2xl md:text-4xl font-serif font-bold text-white">+{formatCurrency(results.totalMonthly)}<span className="text-base md:text-lg font-sans text-emerald-200">/mo</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Annual Net Revenue</div>
                      <div className="text-2xl font-serif">{formatCurrency(results.annual)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Estimated Payback Period</div>
                      <div className="text-xl font-serif">{formatMonths(results.paybackMonths)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs text-emerald-300/80 italic leading-relaxed">Illustrative estimate only. Final projections depend on room count, occupancy, pricing strategy, utilization, and operating model.</p>
                <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg" asChild>
                  <a href="#contact">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-6">
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMethodology ? "rotate-180" : ""}`} />
              How we calculate this
            </button>
            {showMethodology && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 bg-background border border-border rounded-xl p-5 text-sm text-muted-foreground space-y-2"
              >
                <p><strong className="text-foreground">ADR Revenue</strong> = Number of rooms × occupancy rate × wellness surcharge per night × 30 days</p>
                <p><strong className="text-foreground">A-La-Carte Revenue</strong> = Walk-in sessions per day × average session price × 30 days</p>
                <p><strong className="text-foreground">Net Monthly Revenue</strong> = (ADR Revenue + A-La-Carte Revenue) − Monthly Operating Cost</p>
                <p><strong className="text-foreground">Payback Period</strong> = ~$45,000 pod investment ÷ Net Monthly Revenue</p>
                <p className="text-xs italic mt-3">Sample projections are based on modeled assumptions such as room count, occupancy, guest utilization, and pricing strategy. Actual results will vary by property.</p>
              </motion.div>
            )}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">See what this could generate at your property?</h3>
            <p className="text-muted-foreground mb-6">Book a 15-minute feasibility call to review your layout, guest fit, and revenue potential.</p>
            <Button size="lg" className="h-14 px-8 text-base" asChild>
              <a href="#contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
