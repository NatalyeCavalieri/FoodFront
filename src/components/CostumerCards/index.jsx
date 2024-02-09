import { Container, SlideControl, Card } from "./styles"
import { Button } from "../Button"

import { CiHeart } from "react-icons/ci"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import slideImage_1 from "../../assets/Mask group-1.png"
import slideImage_2 from "../../assets/Mask group-2.png"
import slideImage_3 from "../../assets/Mask group-3.png"
import slideImage_4 from "../../assets/Mask group-4.png"
import slideImage_5 from "../../assets/Mask group-5.png"

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
          <Card>
            <div>
              <CiHeart size={32} />
              <img src={slideImage_1} />
              <a href="#"> Salada Ravanello > </a>
              <p>R$ 49,97</p>
              <Button title="incluir" />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <div>
              <CiHeart size={32} />
              <img src={slideImage_2} />
              <a href="#"> Salada Ravanello > </a>
              <p>R$ 49,97</p>
              <Button title="incluir" />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <div>
              <CiHeart size={32} />
              <img src={slideImage_3} />
              <a href="#"> Salada Ravanello > </a>
              <p>R$ 49,97</p>
              <Button title="incluir" />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <div>
              <CiHeart size={32} />
              <img src={slideImage_4} />
              <a href="#"> Salada Ravanello > </a>
              <p>R$ 49,97</p>
              <Button title="incluir" />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <div>
              <CiHeart size={32} />
              <img src={slideImage_5} />
              <a href="#"> Salada Ravanello > </a>
              <p>R$ 49,97</p>
              <Button title="incluir" />
            </div>
          </Card>
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
