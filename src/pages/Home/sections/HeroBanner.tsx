/** @format */
import IphoneImage from '@/assets/images/main/IphoneImage.png';

export default function HeroBanner() {
  return (
    <section className="w-full">
      <div className="mx-auto flex h-[632px] max-w-[1440px] items-center px-[160px]">
        {/* left */}
        <div className="flex-1">
          <div className="max-w-[640px]">
            <p className="mb-3 text-sm tracking-wide text-white/60">Pro.Beyond.</p>

            <h1 className="leading-none">
              <span className="text-[64px] font-light tracking-tight text-white">IPhone 14 </span>
              <span className="text-[64px] font-semibold tracking-tight text-white">Pro</span>
            </h1>

            <p className="mt-3 max-w-[520px] text-sm text-white/55">
              Created to change everything for the better. For everyone
            </p>

            <button className="mt-6 inline-flex h-[56px] w-[191px] items-center justify-center gap-2 rounded-[6px] border border-white/35 px-[56px] py-[16px] text-sm text-white/85">
              Shop Now
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 justify-end">
          <img src={IphoneImage} alt="iPhone 14 Pro" className="w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
