/** @format */
import { useEffect, useState } from 'react';
import { UI_CATEGORIES, fetchProductsByUiCategory } from '@/data/dummyData';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function ProductSection() {
  const [active, setActive] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [liked, setLiked] = useState(() => new Set());

  useEffect(() => {
    setLoading(true);
    setError('');
    fetchProductsByUiCategory(active)
      .then(setProducts)
      .catch((e) => setError(e?.message ?? 'Failed to load products'))
      .finally(() => setLoading(false));
  }, [active]);

  const toggleLike = (id) =>
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section className="px-6 py-8">
      <div className="mb-6 flex gap-6 text-sm">
        {UI_CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`border-b-2 pb-2 ${
              active === key ? 'border-black font-semibold' : 'border-transparent text-gray-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {loading && <p className="py-6 text-gray-500">Loading...</p>}
      {error && <p className="py-6 text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map(({ id, thumbnail, title, price }) => {
            const isLiked = liked.has(id);
            return (
              <article key={id} className="relative rounded-xl bg-[#f6f6f6] p-4">
                <button
                  type="button"
                  onClick={() => toggleLike(id)}
                  className="absolute top-4 right-4"
                  aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  {isLiked ? (
                    <HeartSolid className="h-6 w-6 text-[#ff0000]" aria-hidden="true" />
                  ) : (
                    <HeartOutline className="h-6 w-6 text-[#909090]" aria-hidden="true" />
                  )}
                </button>

                <div className="mb-3 flex h-32 items-center justify-center">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="max-h-32 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="line-clamp-2 min-h-[2.5rem] text-center text-sm font-medium">
                  {title}
                </h3>
                <p className="mt-2 text-center text-lg font-bold">${price}</p>

                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-black py-2 text-sm text-white"
                >
                  Buy Now
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
