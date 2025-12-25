import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { items } from '../../data/items';

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    const id = Number(productId);
    if (Number.isNaN(id)) return null;
    return items.find((p) => p.id === id) ?? null;
  }, [productId]);

  useEffect(() => {
    if (!product) navigate('/not-found', { replace: true });
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.price.toLocaleString()}원</p>
    </div>
  );
}

export default ProductDetailPage;
