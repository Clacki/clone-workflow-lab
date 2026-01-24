import bannerImg from '@/assets/images/main/cta-back.png';

function CTABanner() {
  return (
    <section
      className="relative h-[448px] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* 가독성 오버레이 */}
      <div className="relative flex h-full flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-extralight">
          Big Summer <span className="font-semibold">Sale</span>
        </h2>
        <p className="mt-2 text-sm text-[#787878]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="mt-6 rounded border border-white/60 px-6 py-2">Shop Now</button>
      </div>
    </section>
  );
}

export default CTABanner;
