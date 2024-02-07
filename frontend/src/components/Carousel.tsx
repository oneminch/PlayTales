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
        clickableClass: "bg-white/85 px-3 py-1 rounded-full shadow"
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full h-full rounded-lg"
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
