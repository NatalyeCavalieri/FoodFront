import { Container, SlideControl } from "./styles"

import { Card } from '../Card'


import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"




export function CostumerCards() {
 
  return (
    <Container>
      <p>Refeições</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          760: {
            slidesPerView: 4,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SlideControl>
          <div className="button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>

          <div className="button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </SlideControl>
      </Swiper>
    </Container>
  )
}
