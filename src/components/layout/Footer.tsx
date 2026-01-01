import logo from '@/assets/images/common/Logo-white.png';
import iconTwitter from '@/assets/icons/Twitter.png';
import iconFacebook from '@/assets/icons/Facebook.png';
import iconTiktok from '@/assets/icons/Tiktok.png';
import iconInstagram from '@/assets/icons/Instagram.png';

function Footer() {
  const services = [
    'Bonus program',
    'Gift cards',
    'Credit and payment',
    'Service contracts',
    'Non-cash account',
    'Payment',
  ];

  const buyerHelp = [
    'Find an order',
    'Terms of delivery',
    'Exchange and return of goods',
    'Guarantee',
    'Frequently asked questions',
    'Terms of use of the site',
  ];

  return (
    <h1>
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-40">
          <div className="flex flex-col gap-16 md:flex-row md:justify-between">
            {/* Left */}
            <div className="max-w-[420px]">
              <img src={logo} alt="cyber logo" className="h-6 w-auto" />

              <p className="mt-6 text-[13px] leading-6 text-white/70">
                We are a residential interior design firm located in Portland. Our boutique-studio
                offers more than
              </p>

              <div className="mt-14 flex items-center gap-6">
                <img src={iconTwitter} alt="twitter" className="h-5 w-5 opacity-80" />
                <img src={iconFacebook} alt="facebook" className="h-5 w-5 opacity-80" />
                <img src={iconTiktok} alt="tiktok" className="h-5 w-5 opacity-80" />
                <img src={iconInstagram} alt="instagram" className="h-5 w-5 opacity-80" />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-14 md:flex-row md:gap-28">
              <div className="min-w-[240px]">
                <h3 className="text-[14px] font-semibold text-white">Services</h3>
                <ul className="mt-6 space-y-4 text-[13px] text-white/70">
                  {services.map((t) => (
                    <li key={t} className="cursor-default">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-[280px]">
                <h3 className="text-[14px] font-semibold text-white">Assistance to the buyer</h3>
                <ul className="mt-6 space-y-4 text-[13px] text-white/70">
                  {buyerHelp.map((t) => (
                    <li key={t} className="cursor-default">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </h1>
  );
}

export default Footer;
