interface GameItem {
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

interface CartPriceInterface {
  price: number;
  discount: number;
}

export type { CartPriceInterface, FilterInterface, GameItem };
