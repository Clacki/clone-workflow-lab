/** @format */
import ProductCard from '@/components/product/ProductCard';

export default function ProductGrid({ products, loading, error, likedSet, onToggleLike }) {
  if (loading) return <p className="py-6 text-gray-500">Loading...</p>;
  if (error) return <p className="py-6 text-red-500">{error}</p>;

  return (
    <div className="grid [grid-template-columns:repeat(4,268px)] justify-center gap-x-4 gap-y-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          thumbnail={p.thumbnail}
          title={p.title}
          price={p.price}
          isLiked={likedSet.has(p.id)}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
}
