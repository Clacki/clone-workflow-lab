/** @format */
import AripodsProMax from '@/assets/images/main/AirpodsProMax.png';
import MacBookPro from '@/assets/images/main/MacBookPro.png';
import PlayStation from '@/assets/images/main/PlayStation.png';
import VisionPro from '@/assets/images/main/VisionPro.png';

export default function FeatureGrid() {
  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <div className="grid w-full grid-cols-2">
          {/* LEFT */}
          <div className="grid">
            {/* PS5 */}
            <article className="relative h-[328px] overflow-hidden bg-white">
              <img
                src={PlayStation}
                alt="PlayStation 5"
                className="absolute left-0 block object-contain"
              />
              <div className="relative z-10 flex h-full items-center pr-10 pl-[45%]">
                <div>
                  <h3 className="text-[49px] font-semibold">Playstation 5</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-500">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine
                    your PlayStation experience.
                  </p>
                </div>
              </div>
            </article>

            {/* Left-bottom */}
            <div className="grid grid-cols-2">
              {/* AirPods */}
              <article className="relative h-[272px] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={AripodsProMax}
                  alt="Apple AirPods Max"
                  className="absolute top-1/2 left-0 block h-[110%] w-auto -translate-x-[55%] -translate-y-1/2 object-contain"
                />
                <div className="relative z-10 flex h-full items-center pr-6 pl-[52%]">
                  <div>
                    <p className="font-['Inter'] text-[29px] font-light tracking-[0]">Apple</p>
                    <h4 className="font-['Inter'] text-[29px] font-light tracking-[0]">AirPods</h4>
                    <span className="font-['Inter'] text-[29px] font-bold tracking-[0]">Max</span>
                    <p className="mt-2 text-xs leading-5 text-neutral-500">
                      Computational audio. Listen, it’s powerful.
                    </p>
                  </div>
                </div>
              </article>

              {/* Vision Pro */}
              <article className="relative h-[272px] overflow-hidden bg-[#2C2C2C]">
                <img
                  src={VisionPro}
                  alt="Apple Vision Pro"
                  className="absolute top-1/2 left-0 block h-[95%] w-auto -translate-x-[10%] -translate-y-1/2 object-contain"
                />
                <div className="relative z-10 flex h-full items-center pr-6 pl-[48%] text-white">
                  <div>
                    <p className="font-['Inter'] text-[29px] font-light tracking-[0] text-white">
                      Apple
                    </p>

                    <h4 className="font-['Inter'] text-[29px] font-light tracking-[0]">
                      Vision <span className="font-normal">Pro</span>
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-white/70">
                      An immersive way to experience entertainment.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* RIGHT */}
          <article className="relative min-h-[520px] overflow-hidden bg-[#EDEDED]">
            <img
              src={MacBookPro}
              alt="MacBook"
              className="absolute top-1/2 right-0 block h-[85%] w-auto -translate-y-1/2 object-contain"
            />
            <div className="relative z-10 flex h-full items-center pr-[45%] pl-10">
              <div className="max-w-[280px]">
                <h3 className="font-['Inter'] text-[64px] leading-none font-light">
                  Macbook <br />
                  <span className="font-semibold">Air</span>
                </h3>
                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  The new 15-inch MacBook Air makes room for more of what you love with a spacious
                  Liquid Retina display.
                </p>
                <button className="mt-4 inline-flex h-[56px] w-[191px] items-center justify-center gap-2 rounded-[6px] border border-neutral-400 px-[56px] py-[16px] text-sm font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
