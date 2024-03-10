import Hero from "@/components/partials/Hero";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen space-y-4 bg-transparent">
      <main className="h-full grow flex items-center justify-center space-y-4">
        <Hero
          textLabel="This Page Doesn't Exist!"
          actionLink={{ label: "Go Home", url: "/" }}
        />
      </main>
    </div>
  );
};

export default NotFound;
