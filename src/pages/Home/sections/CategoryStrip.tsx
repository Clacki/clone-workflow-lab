import { CameraIcon } from '@heroicons/react/24/outline';
import { DeviceTabletIcon } from '@heroicons/react/16/solid';
import { ChartBarIcon } from '@heroicons/react/16/solid';

function CategoryStrip() {
  const categories = [
    {
      key: 'electronics',
      label: 'Electronics',
      icon: DeviceTabletIcon,
      href: '/category/electronics',
    },
    { key: 'furniture', label: 'Furniture', icon: ChartBarIcon, href: '/category/furniture' },
    { key: 'shoes', label: 'Shoes', icon: CameraIcon, href: '/category/shoes' },
    { key: 'ready-1', label: '준비중', icon: null, href: '#' },
    { key: 'ready-2', label: '준비중', icon: null, href: '#' },
    { key: 'ready-3', label: '준비중', icon: null, href: '#' },
  ];

  return (
    <section aria-labelledby="browse-category">
      <div>
        <h2 id="browse-category" className="text-6 mb-8 font-medium">
          Browse By Category
        </h2>

        <ul className="flex gap-8">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <li
                key={c.key}
                className="flex h-32 w-40 flex-col items-center justify-center bg-[#ededed]"
              >
                <span aria-hidden="true">{Icon ? <Icon className="size-6" /> : null}</span>
                <span>{c.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default CategoryStrip;
