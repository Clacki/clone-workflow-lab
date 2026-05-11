import PromoTile from '@/components/product/PromoTile';
import img65 from '@/assets/images/promo-tile/image65.png';
import img67 from '@/assets/images/promo-tile/image67.png';
import img68 from '@/assets/images/promo-tile/image68.png';
import img69 from '@/assets/images/promo-tile/image69.png';
import type { PromoTileProps } from '@/components/product/PromoTile';

const tiles = [
  { title: 'Clothes', imgSrc: img65, bgClass: 'bg-white' },
  {
    title: 'Electronics',
    imgSrc: img67,
    bgClass: 'bg-[#F9F9F9]',
  },
  {
    title: 'Furniture',
    imgSrc: img68,

    bgClass: 'bg-[#EAEAEA]',
  },
  {
    title: 'Shoes',
    imgSrc: img69,

    bgClass: 'bg-[#2c2c2c]',
    textClass: 'text-white',
    buttonVariant: 'dark',
  },
] satisfies PromoTileProps[];

function PromoTilesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4">
      {tiles.map((t) => (
        <PromoTile key={t.title} {...t} />
      ))}
    </section>
  );
}

export default PromoTilesSection;
