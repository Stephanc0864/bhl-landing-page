const base = import.meta.env.BASE_URL;

export default function SolutionSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="absolute inset-0 flex px-[6vw] py-[5vh]">
        <div className="w-[50%] flex flex-col pr-[3vw]">
          <div className="flex items-center gap-[1vw] mb-[2vh]">
            <div className="w-[3vw] h-[0.3vh] bg-accent" />
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
              The Solution
            </p>
          </div>

          <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[3vh]">
            The Recovery Pod
          </h2>

          <div className="space-y-[2vh]">
            <div className="flex items-start gap-[1vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-accent mt-[0.7vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.4vw] font-semibold leading-tight">
                  500–750 sqft footprint
                </p>
                <p className="font-body text-muted text-[1.2vw]">
                  Fits spaces you're not monetizing today
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-accent mt-[0.7vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.4vw] font-semibold leading-tight">
                  $49,000 turnkey investment
                </p>
                <p className="font-body text-muted text-[1.2vw]">
                  Everything included — equipment, install, training
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-accent mt-[0.7vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.4vw] font-semibold leading-tight">
                  Under 90 days to launch
                </p>
                <p className="font-body text-muted text-[1.2vw]">
                  From agreement to first paying guest
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-accent mt-[0.7vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.4vw] font-semibold leading-tight">
                  $400+/sqft/yr revenue
                </p>
                <p className="font-body text-muted text-[1.2vw]">
                  Comparable to restaurant and bar spaces
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1vw]">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-accent mt-[0.7vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.4vw] font-semibold leading-tight">
                  Zero additional staff
                </p>
                <p className="font-body text-muted text-[1.2vw]">
                  3–4 existing staff certified by BH Labs
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-[2vh]">
            <p className="font-body text-muted text-[1.1vw] font-medium mb-[1vh]">
              7 Evidence-Based Modalities
            </p>
            <div className="flex flex-wrap gap-[0.6vw]">
              {["HBOT", "Red Light", "PEMF", "IR Sauna", "Compression", "Lymphatic"].map((m) => (
                <div key={m} className="bg-primary/10 rounded-[0.3vw] px-[0.7vw] py-[0.4vh]">
                  <p className="font-body text-primary text-[1vw] font-medium">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Images — smaller, contained, showing full devices */}
        <div className="w-[50%] grid grid-cols-2 grid-rows-2 gap-[1.2vw] pl-[1vw]">
          <div className="rounded-[0.8vw] overflow-hidden bg-white border border-primary/10 flex items-center justify-center p-[0.8vw]">
            <img
              src={`${base}hbot-chamber.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-contain"
              alt="HBOT Chamber"
            />
          </div>
          <div className="rounded-[0.8vw] overflow-hidden bg-white border border-primary/10 flex items-center justify-center p-[0.8vw]">
            <img
              src={`${base}redlight-therapy.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-contain"
              alt="Red Light Therapy"
            />
          </div>
          <div className="rounded-[0.8vw] overflow-hidden bg-white border border-primary/10 flex items-center justify-center p-[0.8vw]">
            <img
              src={`${base}infrared-sauna.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-contain"
              alt="Infrared Sauna"
            />
          </div>
          <div className="rounded-[0.8vw] overflow-hidden bg-white border border-primary/10 flex items-center justify-center p-[0.8vw]">
            <img
              src={`${base}compression-boots.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-contain"
              alt="Compression Therapy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
