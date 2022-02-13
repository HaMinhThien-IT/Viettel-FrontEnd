import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import './SlideHome.css'
export default function SlideHome() {
  return(
    <div className="container containerSlide">
    <Swiper 
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="imageSlide"><img src="https://cdn2.viettelstore.vn/images/Advertises/CATE_41524001110022022.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className="imageSlide"><img src="https://cdn2.viettelstore.vn/images/Advertises/reno6-cate_85914332231012022.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide className="imageSlide"><img src="https://cdn2.viettelstore.vn/images/Advertises/a95-cate_29616042331012022.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide className="imageSlide"><img src="https://cdn2.viettelstore.vn/images/Advertises/reno6-cate_85914332231012022.jpeg" alt="" /></SwiperSlide>
    </Swiper>
  </div>
  ) 
  ;                                                                                 
}                                               