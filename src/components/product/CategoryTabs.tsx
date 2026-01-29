/** @format */
export default function CategoryTabs({ categories, activeKey, onChange }) {
  return (
    <div className="mb-6 flex gap-6 text-sm">
      {categories.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`border-b-2 pb-2 ${
            activeKey === key ? 'border-black font-semibold' : 'border-transparent text-gray-500'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
