/** @format */

import { Link } from 'react-router-dom';
import { items } from '../../data/items';

function HomePage() {
  const featured = items.slice(0, 2);

  return (
    <div>
      <h1>Home</h1>

      <h2>추천 상품</h2>
      <ul>
        {featured.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.name} / {p.price.toLocaleString()}원
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/products">전체 상품 보러가기</Link>
    </div>
  );
}

export default HomePage;
