interface GameTitle {
  id: string;
  title: string;
  posterImage: string;
  discount: number;
  price: number;
  screenshots: string[];
}

interface FilterInterface {
  label: string;
  options: { label: string; value: string }[];
}

export type { FilterInterface, GameTitle };
