/** @format */
import { useEffect, useState } from 'react';
import { UI_CATEGORIES, fetchProductsByUiCategory } from '@/data/dummyData';
import CategoryTabs from '@/components/product/CategoryTabs';
import ProductGrid from '@/components/product/ProductGrid';
import type { Product } from '@/types/product';

export default function ProductSection() {
  const [active, setActive] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [liked, setLiked] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    setLoading(true);
    setError('');

    fetchProductsByUiCategory(active)
      .then((list) => {
        setProducts(list.slice(0, 8));
      })
      .catch((e) => setError(e?.message ?? 'Failed to load products'))
      .finally(() => setLoading(false));
  }, [active]);

  const toggleLike = (id: number) =>
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section className="py-8">
      <CategoryTabs categories={UI_CATEGORIES} activeKey={active} onChange={setActive} />

      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        likedSet={liked}
        onToggleLike={toggleLike}
      />
    </section>
  );
}
