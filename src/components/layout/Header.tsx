import logo from '@/assets/images/common/logo.svg';
import iconHeart from '@/assets/icons/Favorites.svg';
import iconCart from '@/assets/icons/Cart.png';
import iconSearch from '@/assets/icons/search.png';

function Header() {
  return (
    <header className="h-[88px] border-b border-black/10">
      <div className="mx-auto h-full max-w-[1440px] px-[160px] py-[16px]">
        <div className="grid h-full grid-cols-[auto_372px_1fr_auto] items-center gap-[40px]">
          {/* 로고 */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="cyber" className="h-[24px] w-auto" />
          </a>

          {/* 검색 */}
          <div className="relative h-[56px]">
            <img
              src={iconSearch}
              alt=""
              className="pointer-events-none absolute top-1/2 left-[16px] h-[20px] w-[20px] -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full rounded-[8px] bg-[#F5F5F5] pr-[16px] pl-[44px] text-[14px] outline-none"
            />
          </div>

          {/* 투명 네비 (공간은 차지, 화면엔 안 보임) */}
          <nav className="invisible">
            <ul className="flex items-center justify-center gap-[32px] text-[14px]">
              <li>New</li>
              <li>Best</li>
              <li>Sale</li>
            </ul>
          </nav>

          {/* 아이콘 */}
          <div className="flex items-center gap-[24px]">
            <button type="button" className="h-[28px] w-[28px]">
              <img src={iconHeart} alt="wishlist" className="h-full w-full" />
            </button>
            <button type="button" className="h-[28px] w-[28px]">
              <img src={iconCart} alt="cart" className="h-full w-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
