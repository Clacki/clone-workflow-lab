/** @format */

import { Link } from 'react-router-dom';
import { items } from '@/data/items';
import ProductCard from '@/components/product/productCard';

function HomePage() {
  const featured = items.slice(0, 4);
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">Home</h1>
      <Link to="/products">전체 상품 보러가기</Link>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">추천 상품</h2>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
