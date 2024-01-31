const Hero = () => {
  return (
    <section className="flex items-center justify-center rounded-lg h-48 my-6 bg-amber-300">
      <div className="relative w-24 h-32">
        <div className="absolute top-2 bottom-0 left-0 right-0 rounded-md bg-gray-50 origin-bottom -rotate-12 -translate-x-6 shadow-sm"></div>
        <div className="absolute top-2 bottom-0 left-0 right-0 rounded-md bg-gray-50 origin-bottom rotate-12 translate-x-6 shadow-sm"></div>
        <div className="absolute inset-0 rounded-md bg-white origin-bottom shadow"></div>
      </div>
    </section>
  );
};

export default Hero;
