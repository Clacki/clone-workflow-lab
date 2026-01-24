/** @format */
import { Link } from 'react-router-dom';

export default function PromoTile({
  title,
  imgSrc,
  href = '#',
  bgClass = 'bg-white',
  textClass = 'text-black',
  buttonVariant = 'light', // 'light' | 'dark'
}) {
  const btnClass =
    buttonVariant === 'dark'
      ? 'border border-white/40 text-white'
      : 'border border-black/40 text-black';

  return (
    <article className={`p-6 ${bgClass}`}>
      <div className="mb-6 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-full object-contain" />
      </div>

      <h3 className={`text-2xl font-medium ${textClass}`}>{title}</h3>

      <Link
        to={href}
        className={`mt-4 inline-flex h-10 items-center justify-center rounded-md px-6 text-sm ${btnClass}`}
      >
        Shop Now
      </Link>
    </article>
  );
}
