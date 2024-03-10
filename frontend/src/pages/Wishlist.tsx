import ListItem from "@/components/cards/ListItem";
import { useAuthContext } from "@/context/auth-context";
import Hero from "@/components/partials/Hero";
import { useWishlistContext } from "@/context/wishlist-context";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();
  const { isLoggedIn } = useAuthContext();

  let pageContent = null;
  if (!isLoggedIn) {
    pageContent = (
      <Hero
        className="bg-primary border border-secondary pt-12 pb-8"
        textLabel="Log In to Wishlist Games."
        actionLink={{ label: "Log In", url: "/login" }}
      />
    );
  } else {
    if (wishlist && wishlist.length > 0) {
      pageContent = (
        <article className="w-full min-h-96 pb-8">
          <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {wishlist.map((product) => (
              <li className="mx-auto mb-2" key={product.title}>
                <ListItem product={product} />
              </li>
            ))}
          </ul>
        </article>
      );
    } else {
      pageContent = (
        <Hero
          className="bg-primary border border-secondary pt-12 pb-8"
          textLabel="Wishlist Games to Keep Track of them Here."
          actionLink={{
            label: "Browse",
            url: "/"
          }}
        />
      );
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Your Wishlist</h1>
      <p className="text-primary-foreground">
        Keep Track of Tales You Want to Play.
      </p>
      {pageContent}
    </>
  );
};

export default Wishlist;
