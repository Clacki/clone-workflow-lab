/** @format */

import ProductCard from '../../components/product/productCard';
import { items } from '../../data/items';

function ProductListPage() {
  const products = items;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="mt-1 text-sm text-gray-600">총 {products.length}개</p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-gray-600">
          등록된 상품이 없습니다.
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductListPage;
