export default function ExperienceSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            The Guest Experience
          </p>
        </div>

        <h2 className="font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
          The Guest Journey
        </h2>

        {/* Three tiers side by side — clean, no images */}
        <div className="flex gap-[2vw] flex-1">
          {/* Tier 1 — Morning Activation */}
          <div className="flex-1 bg-white/5 rounded-[1vw] border border-white/10 p-[2.5vw] flex flex-col">
            <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1.5vh]">
              Morning Activation
            </p>
            <p className="font-display text-white text-[2vw] font-bold mb-[2vh]">
              Quick Recovery
            </p>
            <div className="flex items-baseline gap-[0.8vw] mb-[3vh]">
              <p className="font-display text-accent text-[3vw] font-bold">45 min</p>
              <p className="font-body text-white/50 text-[1.5vw]">$75–$90</p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-[1.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">1</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Red Light Therapy</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1.5vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">2</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">IR Sauna</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1.5vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">3</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Compression</p>
                </div>
              </div>
            </div>

            <p className="font-body text-white/30 text-[1vw] mt-auto pt-[2vh] italic">
              Energize &amp; recover before the day begins
            </p>
          </div>

          {/* Tier 2 — Signature Recovery (featured) */}
          <div className="flex-1 bg-accent/10 rounded-[1vw] border-2 border-accent/30 p-[2.5vw] flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 h-[0.4vh] bg-accent rounded-t-[1vw]" />
            <div className="flex items-center gap-[1vw] mb-[1.5vh]">
              <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase">
                Signature Recovery
              </p>
              <span className="bg-accent text-primary rounded-full px-[0.6vw] py-[0.2vh] text-[0.8vw] font-bold">
                Most Popular
              </span>
            </div>
            <p className="font-display text-white text-[2vw] font-bold mb-[2vh]">
              Full Pod Experience
            </p>
            <div className="flex items-baseline gap-[0.8vw] mb-[3vh]">
              <p className="font-display text-accent text-[3vw] font-bold">60 min</p>
              <p className="font-body text-white/50 text-[1.5vw]">$110–$140</p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-[1.2vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">1</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Red Light Therapy</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">2</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">PEMF</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">3</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Infrared Sauna</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">4</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Compression</p>
                </div>
              </div>
            </div>

            <p className="font-body text-white/30 text-[1vw] mt-auto pt-[2vh] italic">
              The complete recovery protocol
            </p>
          </div>

          {/* Tier 3 — Full Longevity */}
          <div className="flex-1 bg-white/5 rounded-[1vw] border border-white/10 p-[2.5vw] flex flex-col">
            <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1.5vh]">
              Full Longevity
            </p>
            <p className="font-display text-white text-[2vw] font-bold mb-[2vh]">
              Pod + HBOT + IV
            </p>
            <div className="flex items-baseline gap-[0.8vw] mb-[3vh]">
              <p className="font-display text-accent text-[3vw] font-bold">90+ min</p>
              <p className="font-body text-white/50 text-[1.5vw]">$200–$300+</p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-[1.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">1–4</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Full 4-modality sequence</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1.5vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">5</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">HBOT (60 min)</p>
                </div>
                <div className="ml-[1.25vw] w-[0.15vw] h-[1.5vh] bg-accent/30" />
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[1.2vw] font-bold">6</span>
                  </div>
                  <p className="font-body text-white text-[1.3vw]">Optional IV Therapy</p>
                </div>
              </div>
            </div>

            <p className="font-body text-white/30 text-[1vw] mt-auto pt-[2vh] italic">
              The ultimate longevity experience
            </p>
          </div>
        </div>

        <div className="mt-[2vh]">
          <p className="font-body text-white/30 text-[1.1vw] italic">
            Proprietary protocol sequencing is BHL's intellectual property. The order matters — each modality primes the body for the next.
          </p>
        </div>
      </div>
    </div>
  );
}
