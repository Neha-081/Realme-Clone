import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "../../styles/category.css";

function TabGroup({ data }) {


  return (
    <>
{/* TAB 1 */}

      <div className="container namespan">
        <ul className="nav nav-tabs">
          <li className="active ">
            <span className="smartphone">SmartPhones</span>
            <span>
              <a data-toggle="tab" href="#home">
                Recommended
              </a>
            </span>
          </li>
          <li>
            <span>
              <a data-toggle="tab" href="#menu1">
                New Launches
              </a>
            </span>
          </li>

          <li>
            <span>
              <a data-toggle="tab" href="#menu2">
                Best Sellers
              </a>
            </span>
          </li>
          <li>
          
            <span className="viewMore">
            <Link to="/phoneproducts"  style={{textDecoration:"none",color:"#777777"}}  >
              
                View More →
              </Link>
            </span>
            
          </li>
        </ul>
        <div className="tabgrid">
          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              {/* RECOMMENDED  */}
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                // loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "recommended" && item.id >16 && item.id <21)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                         {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                           
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "recommended" && item.id >20 && item.id <25)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
            </div>

            {/* NEW LAUNCHES */}

            <div id="menu1" class="tab-pane fade">
              
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                // loop={true}

                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "newlaunches" && item.id >=29)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="greentag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "newlaunches" && item.id >24 && item.id <29)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
            </div>
            <div id="menu2" class="tab-pane fade">
    
    {/* BEST SELLERS */}
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={1}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "bestsellers" && item.id > 32 && item.id < 35
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div className="bestsellerdiv">
                
                          <div>
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
                            <div>
                              {" "}
                              <img src={e.image_url} alt="productImage" />
                            </div>
                      
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={1}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "bestsellers" && item.id > 34 && item.id <37
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                      <div className="bestsellerdiv">
                          <div>
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
                            <div>
                              {" "}
                              <img src={e.image_url} alt="productImage" />
                            </div>
                      
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "bestsellers" && item.id > 36
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                      <div className="bestsellerdiv">
                          <div>
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
                            <div>
                              {" "}
                              <img src={e.image_url} alt="productImage" />
                            </div>
                      
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
<br />
 {/* SMART LIFE */}
 <div className="container namespan smartlife">
     <h2 className="title">Smart Life</h2>
     <div className="tabgrid">
          <div className="tab-content" >
 <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={2}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "smartlife" && item.id > 38 &&  item.id < 41
                  )
                  .map((e) => (
                    <div key={e.id} >
                      <SwiperSlide>
                     
                        <div    style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover"
    }}>
                
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
                            <div>
                              {" "}
                              
                             
                              {/* <img src={e.image_url} alt="productImage" /> */}
                            </div>
                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
 

              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={2}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "smartlife" && item.id > 40 && item.id <43
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                        <div    style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover"
    }}>
                
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
                
                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />


{/* lower four div */}
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "smartlife" && item.id > 42)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              </div>
              </div>

 </div>






 {/* TAB 2 */}


 <div className="container namespan">
        <ul className="nav nav-tabs">
          <li className="active ">
            <span className="smartphone">Accessories</span>
            <span>
              <a data-toggle="tab" href="#audio">
                Audio
              </a>
            </span>
          </li>
          <li>
            <span>
              <a data-toggle="tab" href="#lifestyle">
                Lifestyle
              </a>
            </span>
          </li>

          <li>
            <span>
              <a data-toggle="tab" href="#others">
               Other Accessories
              </a>
            </span>
          </li>
        </ul>
        <div className="tabgrid">
          <div className="tab-content">
            <div id="audio" className="tab-pane fade in active">
              {/* AUDIO  */}
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={1}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "audio" && item.id > 62 && item.id < 65
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                        <div  style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover"
    }}>
                
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
 
                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              
              <br />
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "audio" && item.id > 64 && item.id <67
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <div style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover"
    }}>
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
            
                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              {/* lower four div */}
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "earbuds" && item.id > 54 && item.id < 59)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>

             
            </div>

            {/* LIFESTYLE */}

            <div id="lifestyle" class="tab-pane fade">
              
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                // loop={true}

                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "lifestyle" && item.id > 46 && item.id < 51)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="greentag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              <br />
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "lifestyle" && item.id >50  && item.id < 55)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>
                        {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
            </div>
            <div id="others" class="tab-pane fade">
    
    {/* OTHERS */}
    <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={1}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "others" && item.id > 66 && item.id <69
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                        <div style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover",color:"white"
    }}>
                
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>

                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              
              <br />
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={4}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter(
                    (item) => item.category === "others" && item.id > 68
                  )
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                        <div style={{backgroundImage: `url(${e.image_url})`,
      height: "100%",width:"100%",backgroundSize:"cover",color:"white"
    }}>
                
                          <div className="smartdiv">
                          {
                            e.tag? <h6 className="redtag">  {e.tag}</h6>:null
                         }
                            <h4 className="name">{e.name}</h4>
                            <h5 className="desc">{e.desc}</h5>
                            <h4 className="price">
                              <span className="from">From</span>
                              {e.price}{" "}
                              <span className="cutprice">{e.cutPrice}</span>
                            </h4>
                            </div>
 
                      
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
              
              <br />
              {/* lower four div */}
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}

                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {data
                  .filter((item) => item.category === "mouse" && item.id > 58 && item.id < 63)
                  .map((e) => (
                    <div key={e.id}>
                      <SwiperSlide>
                      <Link to={`/category/${e.id}`} className="LinkTab" style={{textDecoration:"none"}}> 
                        <div>

                          <img src={e.image_url} alt="productImage" />
                          <h4 className="name">{e.name}</h4>
                          <h5 className="desc">{e.desc}</h5>
                          <h4 className="price">
                            <span className="from">From</span>
                            {e.price}{" "}
                            <span className="cutprice">{e.cutPrice}</span>
                          </h4>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  ))}
              </Swiper>
               <br />

            
              
            </div>
          </div>
    <br />


                {/* ACTIVITY */}


                <h2 className="title">Activity</h2>
          <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={4}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
              >
               
                      
                        <div className="activitydiv">
                              <img src="https://image01.realme.net/general/20220222/1645503133335.jpg" alt="productImage" />
                              <img src="https://image01.realme.net/general/20220219/1645248807559.jpg" alt="productImage" />
                        </div>
                        <div className="activitydiv">
                              <img src="https://image01.realme.net/general/20211231/1640957957650.jpg" alt="productImage" />
                              <img src="https://image01.realme.net/general/20220215/1644939635039.jpg" alt="productImage" />
                        </div>
              </Swiper>
              <br />

             
        </div>

        
      </div>
<br />
<div id="lastimg">
  <h2>Dare to Leap</h2>
  <a href="https://www.realme.com/in/brand" ><button>Learn More</button></a>
  
</div>
    </>
  );
}

export default TabGroup;
