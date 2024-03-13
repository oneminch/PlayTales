import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import type { ChildrenNodes } from "@/types";

const Carousel = ({ children }: ChildrenNodes) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        clickableClass:
          "bg-background/85 ring-1 ring-secondary px-3 py-1 rounded-full shadow"
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
