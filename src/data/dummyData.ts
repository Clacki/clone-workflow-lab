export const UI_CATEGORIES = [
  { key: 'all', label: 'All', slugs: [] },
  {
    key: 'clothes',
    label: 'Clothes',
    slugs: ['mens-shirts', 'womens-dresses', 'tops', 'womens-tops'],
  },
  {
    key: 'electronics',
    label: 'Electronics',
    slugs: ['smartphones', 'laptops', 'tablets', 'mobile-accessories'],
  },
  { key: 'furniture', label: 'Furniture', slugs: ['furniture', 'home-decoration'] },
  { key: 'shoes', label: 'Shoes', slugs: ['mens-shoes', 'womens-shoes'] },
];

async function fetchJson(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

function uniqById(products) {
  return Array.from(new Map(products.map((p) => [p.id, p])).values());
}

export function getUiCategory(key) {
  return UI_CATEGORIES.find((c) => c.key === key) ?? UI_CATEGORIES[0];
}
export async function fetchProductsByUiCategory(
  key: string,
  signal?: AbortSignal,
  limit: number = 8,
) {
  const cat = getUiCategory(key);

  if (cat.key === 'all') {
    const data = await fetchJson(`https://dummyjson.com/products?limit=${limit}`, signal);
    return data.products ?? [];
  }

  const results = await Promise.all(
    cat.slugs.map(async (slug) => {
      const data = await fetchJson(
        `https://dummyjson.com/products/category/${slug}?limit=${limit}`,
        signal,
      );
      return data.products ?? [];
    }),
  );

  return uniqById(results.flat()).slice(0, limit);
}
