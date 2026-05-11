export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export type UiCategory = {
  key: string;
  label: string;
  slugs: string[];
};

export type ProductResponse = {
  products?: Product[];
};
