/** @format */

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">홈으로</Link>
    </div>
  );
}

export default NotFoundPage;
