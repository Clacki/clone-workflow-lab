/** @format */
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

type ProductCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
};

export default function ProductCard({
  id,
  thumbnail,
  title,
  price,
  isLiked,
  onToggleLike,
}: ProductCardProps) {
  return (
    <article className="relative flex h-108 w-67 min-w-50 flex-col gap-4 rounded-[9px] bg-[#f6f6f6] px-4 py-6">
      <button
        type="button"
        onClick={() => onToggleLike(id)}
        className="absolute top-4 right-4"
        aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        {isLiked ? (
          <HeartSolid className="h-6 w-6 text-[#ff0000]" aria-hidden="true" />
        ) : (
          <HeartOutline className="h-6 w-6 text-[#909090]" aria-hidden="true" />
        )}
      </button>
      <div className="flex flex-1 items-center justify-center">
        <img src={thumbnail} alt={title} className="max-h-40 w-auto object-contain" />
      </div>

      <h3 className="line-clamp-2 min-h-10 text-center text-sm font-medium">{title}</h3>

      <p className="text-center text-lg font-bold">${price}</p>
      <button
        type="button"
        className="mx-auto mt-auto flex h-12 w-47 items-center justify-center gap-2 rounded-lg bg-black px-16 py-3 text-sm text-white"
      >
        Buy Now
      </button>
    </article>
  );
}
