import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import "../../styles/category.css";


import { Pagination, Navigation } from "swiper";

export default function CategoryCard({ data }) {

 

  return (

    <>


      <h2 className="title">Gone in Flash</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {data.filter((item) => item.category === "tv").map((e) => (
          <div key={e.id} >

            <SwiperSlide className="mainn" >
              <Link to={`/category/${e.id}`} className="LinkTab" style={{ textDecoration: "none" }} >
                <div className="slider-div">
                  <img src={e.image_url} alt="productImage" />
                  <h4 className="name">{e.name}</h4>
                  <h5 className="desc">{e.desc}</h5>
                  <h4 className="price">{e.price} <span className="cutprice">{e.cutPrice}</span></h4>

                </div>
                </Link> 
            </SwiperSlide>

          </div>


        ))}




      </Swiper>




      <h2 className="title">ONLY HERE</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.filter((item) => item.category === "onlyhere").map((e) => (
          <div key={e.id}>

            <SwiperSlide  className="mainn">
              <Link to={`/category/${e.id}`} className="LinkTab" style={{ textDecoration: "none" }}>
                <div  className="slider-div">
                  <img src={e.image_url} alt="productImage" />
                  <h4 className="name">{e.name}</h4>
                  <h5 className="desc">{e.desc}</h5>
                  <h4 className="price">{e.price}</h4>
                </div>
              </Link>
            </SwiperSlide>

          </div>

        ))}




      </Swiper>
    </>
  );
}
