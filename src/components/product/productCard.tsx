import { Link } from 'react-router-dom';
import type { Product } from '../../data/items';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <li className="rounded-xl border p-4">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          {product.image ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="mt-3">
          <p className="text-base font-semibold">{product.name}</p>
          <p className="mt-1 text-sm text-gray-600">{product.price.toLocaleString()}원</p>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
