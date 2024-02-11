import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";
import { Img } from "../../shared/Components/Img";

import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../../images";

import s from "./fourthPart.module.scss";

export const FourthPart = () => {
  return (
    <SiteSection title="Zespół Expert Cleaning" id="gallery">
      <Swiper
        className={s.swiper}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery1} alt="Przykład pracy" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery2} alt="Przykład pracy" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery3} alt="Przykład pracy" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery4} alt="Przykład pracy" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery5} alt="Przykład pracy" />
        </SwiperSlide>
        <SwiperSlide>
          <Img className={s.galleryImage} src={gallery6} alt="Przykład pracy" />
        </SwiperSlide>
      </Swiper>
    </SiteSection>
  );
};
