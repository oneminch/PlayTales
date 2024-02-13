import PurchaseItemCard from "@/components/cards/PurchaseItem";
import { GameItem } from "@/types";

const games = [
  {
    id: "sw-outlaws",
    title: "Star Wars Outlaws",
    posterImage: "/images/sw-outlaws.png",
    discount: 0,
    price: 69.99,
    screenshots: [
      "/images/sw-outlaws-1.jpg",
      "/images/sw-outlaws-2.jpg",
      "/images/sw-outlaws-3.jpg"
    ]
  },
  {
    id: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    posterImage: "/images/the-witcher-3-wild-hunt.png",
    discount: 10,
    price: 59.99,
    screenshots: [
      "/images/the-witcher-3-wild-hunt-1.jpg",
      "/images/the-witcher-3-wild-hunt-2.jpg",
      "/images/the-witcher-3-wild-hunt-3.jpg",
      "/images/the-witcher-3-wild-hunt-4.jpg"
    ]
  }
];

const Account = () => {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <h1 className="text-3xl font-bold">Your Account</h1>
      <article className="w-full grid grid-cols-3 gap-x-4 grid-rows-[auto_1fr] grid-flow-dense pb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-8 w-full row-span-2 col-span-2 space-y-4">
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Purchases</h3>
            <ul className="flex flex-col">
              {games.slice(0, 3).map((game: GameItem) => (
                <li
                  className="h-36 border-b border-gray-200/75 last:border-none"
                  key={game.title}
                >
                  <PurchaseItemCard game={game} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Account;
