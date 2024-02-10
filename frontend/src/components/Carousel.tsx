import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        clickableClass:
          "bg-gray-900/85 ring-1 ring-gray-600 px-3 py-1 rounded-full shadow"
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full h-full rounded-xl"
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
