/** @format */
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import CategoryTabs from '@/components/product/CategoryTabs';
import ProductCard from '@/components/product/ProductCard';
import { UI_CATEGORIES } from '@/data/dummyData';

const LIMIT = 20; // 화면에 추가로 보여줄 단위
const STORE_FETCH_LIMIT = 200; // 처음에 크게 받아올 개수(쉬운 방식)

function uniqById(products: any[]) {
  return Array.from(new Map(products.map((p) => [p.id, p])).values());
}

async function fetchJson(url: string, signal?: AbortSignal) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

async function fetchStoreProducts(activeKey: string, signal?: AbortSignal) {
  const cat = UI_CATEGORIES.find((c) => c.key === activeKey) ?? UI_CATEGORIES[0];

  if (cat.key === 'all') {
    const data = await fetchJson(
      `https://dummyjson.com/products?limit=${STORE_FETCH_LIMIT}`,
      signal,
    );
    return data.products ?? [];
  }

  // 묶음 카테고리(여러 slug 합치기)
  const results = await Promise.all(
    cat.slugs.map(async (slug) => {
      const data = await fetchJson(
        `https://dummyjson.com/products/category/${slug}?limit=${STORE_FETCH_LIMIT}`,
        signal,
      );
      return data.products ?? [];
    }),
  );

  return uniqById(results.flat());
}

export default function StorePage() {
  const [active, setActive] = useState('all');

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [liked, setLiked] = useState(() => new Set<number>());

  const toggleLike = (id: number) =>
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError('');
    setPage(1);

    fetchStoreProducts(active, controller.signal)
      .then(setAllProducts)
      .catch((e) => {
        if (e?.name !== 'AbortError') setError(e?.message ?? 'Failed to load products');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [active]);

  const visible = useMemo(() => allProducts.slice(0, page * LIMIT), [allProducts, page]);
  const hasMore = visible.length < allProducts.length;

  const loadMore = () => setPage((p) => p + 1);
  return (
    <section className="px-6 py-8">
      <div className="mx-auto w-[1120px] max-w-full">
        <CategoryTabs categories={UI_CATEGORIES} activeKey={active} onChange={setActive} />

        {loading && <p className="py-6 text-gray-500">Loading...</p>}
        {error && <p className="py-6 text-red-500">{error}</p>}

        {!loading && !error && (
          <InfiniteScroll
            key={active}
            dataLength={visible.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<p className="py-6 text-gray-500">Loading ...</p>}
          >
            <div className="grid [grid-template-columns:repeat(4,268px)] gap-x-4 gap-y-4">
              {visible.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  thumbnail={p.thumbnail}
                  title={p.title}
                  price={p.price}
                  isLiked={liked.has(p.id)}
                  onToggleLike={toggleLike}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
}
