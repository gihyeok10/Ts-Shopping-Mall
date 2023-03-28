import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const BannerComponent = () => {
  const items: string[] = [back1, back2, back3];

  return (
    <div>
      <Swiper
        id="banner"
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerComponent;

const back1 =
  "https://user-images.githubusercontent.com/103566149/228145341-c55777a9-c268-40af-a1c1-db03e3c4372b.png";
const back2 =
  "https://user-images.githubusercontent.com/103566149/228146554-3b8ef369-acac-49eb-97dc-df03254876b6.png";
const back3 =
  "https://user-images.githubusercontent.com/103566149/228146616-281ae26f-5fdd-47e0-8398-9287972bd2bf.png";
