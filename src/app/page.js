"use client"

import Image from "next/image";
import React, { useRef, useState, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination,aos } from 'swiper/modules';
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import { Placeholder } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <section className="hero1 py-5 ">

      <a href="/"><img  className="hero1-ball" src="https://html.fleexstudio.com/seoc/assets/img/elements/elements1.png"/></a>
        <div className="container">
          <div className="row">
            <div className="col-6 position-relative ">

              <div className="hero1-header1">
              <div data-aos="zoom-out-left"></div>
                < h5 className="bg-slate-400 inline-block p-1 position:absolute  ">
                  Top #1 SEO & Marketing Agency

                </h5>

                <div className="py-5   position:absolute top-20 left-10">
                  <div className="text-7xl font-bold">Elevate Your Brand</div>
                  <div className="text-7xl font-bold">With Expert SEO &</div>
                  <div className="text-7xl font-bold">Digital Marketing</div>
                  <p className="py-7">Welcome to SEOC where we specialize in revolutionizing your online<br />
                    presence through expert SEO and digital marketing solutions.</p>
                </div>

              </div>

              <div className="flex gap-20">
                <a href="/contact"> <button className=" bg-slate-900 rounded-pill text-white font-bold p-2 position:absolute">Start Ranking Now</button></a>

                <button className="rounded-pill bg-slate-400 px-3 font-bold text-white">Contact Now</button>
              </div>

            </div>
            <div className="col-6 position-relative">
              <div className=" position-absolute z-index:-1 right-6 top-2" >
                <img className="w-[100%]" src="https://html.fleexstudio.com/seoc/assets/img/bg/header-imgbg.png" />
              </div>
              <div className=" z-index-2">
                <img className="w-[100%]   top-0 " src="https://html.fleexstudio.com/seoc/assets/img/all-images/header-img1.png" />
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className="swipper  bg-gray-400">
        <div className=" container width-40px">
          <div className="row">
            <div className="col-lg-2">
              <div className="font-bold text-3xl">Trusted by<br />
                Top Companies</div>
            </div>
            <div className="col-lg-10">
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                //centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"


              >
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img1.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img2.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img3.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img4.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img5.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img6.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img7.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img8.png" /></SwiperSlide>
                <SwiperSlide><img className="w-[100] items-center p-4" src="https://html.fleexstudio.com/seoc/assets/img/elements/brand-img9.png" /></SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </section>
      -===== ABOUT AREA START  =======--
      <section className="solution bg-EFEBF7">
        <div className="container mx-auto">
          <div className="row  ">
            <div className="col-lg-4 position-relative">
              <img className="w-[100%] position-relative top-20 right-0 z-index:-2 " src="https://html.fleexstudio.com/seoc/assets/img/all-images/about-img1.png" />
              <img className="  position-relative bottom-15 start-10  animate-[wiggle1_10s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/elements/star1.png" />

            </div>
            <div className="col-lg-4  ">
              <div className="rotate ">
                <a href="">
                  <img className="position-relative top-20 start-6  animate-[wiggle1_10s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/elements/elements4.png" />
                  <img className="position-relative top-0 start-20  animate-[wiggle_10s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/icons/arrow.svg" />
                </a>
              </div>
              <div className="position-relative top-40 start-10">
                <h2 className="font-bold text-4xl">Comprehensive SEO<br />
                  & Digital Marketing<br />
                  Solutions.</h2>
                <p className="py-4 font-5">Welcome to SEOC your trusted partner for comprehensive<br /> SEO and digital marketing solutions. With our proven <br />expertise and innovative strategies the digital landscape.</p>

                <a href=""><button className="btn-rotate  text-white bg-blue-800 p-3 rounded-pill">Learn more</button></a>
              </div>

            </div>
            <div className=" col-lg-4 ">
              <div className="right-rotate ">
                <img className=" w-[200px] position-relative top-10 start-50  animate-[wiggle1_10s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/elements/elements5.png" />
                <img className="w-[400px] position-relative top-0 start-19" src="https://html.fleexstudio.com/seoc/assets/img/all-images/about-img2.png" />
              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="service bg-[#b191f1]">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 position-relative">
              <div className="">
                <h1 className="text-4xl font-bold text-center py-6">Popular Digital Marketing Services<br />
                  To Build Your Business</h1>
                <p className="text-center">Our expert team specializes in delivering tailored solutions designed to elevate<br />
                  your brand and drive measurable results.</p>
              </div>
              <div className="position-absolute top-15 left-40 pb-10">
                <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png" />
              </div>
              <div className="position-absolute top-15 right-40 top-10 transform-rotate">
                <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 py-3 flex-wrap g-3">
              <div className="service-all boxes flex justify-center">
                <div className="height:40px bg-pink-200 py-4">
                  <a href="service1.html">
                    <h3 className="py-6 font-bold text-center text-2xl">Search Engine Optimization <br /> (SEO)</h3></a>
                  <div className="">
                    <img className="items-center mx-auto" src="	https://html.fleexstudio.com/seoc/assets/img/icons/service-icon1.svg" />
                  </div>
                  <div className="py-3 text-center">
                    <p>Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.</p>
                  </div>
                </div>
                <div className="height:40px bg-purple-300 py-4">
                  <a href="service1.html">
                    <h3 className="py-6 font-bold text-center text-2xl ">Pay-Per-Click (PPC)<br /> Advertising</h3></a>
                  <div className=" justify-center">
                    <img className="mx-auto" src="	https://html.fleexstudio.com/seoc/assets/img/icons/service-icon2.svg" />
                  </div>
                  <div className="p-3 text-center ">
                    <p>Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.</p>
                  </div>
                </div>
                <div className="height:40px bg-yellow-200 py-4 ">
                  <a href="service1.html">
                    <h3 className="py-6 font-bold text-2xl text-center">Social Media Marketing<br /></h3></a>
                  <div className="">
                    <img className="mx-auto py-3" src="		https://html.fleexstudio.com/seoc/assets/img/icons/service-icon3.svg" />
                  </div>
                  <div className="p-3 text-center">
                    <p>Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.</p>
                  </div>
                </div>
                <div className="height:40px bg-green-200 py-4">
                  <a href="service1.html">
                    <h3 className="py-6 font-bold text-2xl text-center">Website Design and development</h3></a>
                  <div className="">
                    <img className="mx-auto py-3 " src="	https://html.fleexstudio.com/seoc/assets/img/icons/service-icon4.svg" />
                  </div>
                  <div className="p-3">
                    <p>Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure website.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial bg-[#6d6e6e]">
        <div className="container mx-auto">
          <div className="test-text text-center py-7 relative">
            <h1 className=" text-3xl">Tailored Solutions, Proven Results,<br />
              And Exceptional Service</h1>
            <p className="py-3">We pride ourselves on delivering a value proposition that goes beyond expectations. Our <br />          approach is centered on understanding your business inside</p>
            <img className=" absolute top-20 end-10 animate-[wiggle_1s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/elements/star1.png" />
            <img className=" absolute  buttom-15 start-20 animate-[wiggle1_10s_ease-in-out_infinite]" src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png" />
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="relative">
                <img className=" test-img1 w-[100]" src="https://html.fleexstudio.com/seoc/assets/img/all-images/service-img1.png" />
                <div className="test-cnt1 font-3xl text-white position-absolute top-56 left-10">
                  <h3>Our Values</h3>
                  <a href="service1.html">
                    <h4 className="font-serif text-3xl">Explore our eunique value proposition & How<br />we drive Business Grothes</h4>
                  </a>
                  <p className="py-4">we're committed to delivering exceptional value to our clients. We understand that every<br />
                    business is unique, personalized approach to every project we undertake.</p>


                </div>
                <a href="service1.html">
                  <button className="tst-btn rounded-pill"> Learn More <i class="bi bi-arrow-up-right-circle"></i> <i class="bi bi-arrow-up-right-circle-fill"></i></button>
                </a>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-lg-12 bg-green-300 ">
                  <div className="test-rcont">

                    <h3 className="pt-10 font-bold text-2xl ">Our misssion</h3>
                    <p className="font-bold text-2xl pt-3">
                      <a href="service1.html">We strive to be more than just a service<br /> provider; we aim to be trusted SEOC
                      </a></p>
                    <p className="py-3 text-1xl">By staying true to our mission and values, we are<br /> committed to helping businesses of all sizes achieve their goals, realize their<br /> potential shape.</p>
                  </div>

                </div>
                <div className="col-lg-12 bg-red-200 my-4">
                  <div className="test-rcount2">
                    <h3 className="pt-10 text-2xl font-bold">Our Vision</h3>
                    <h1 className="py-3">We aspire to create a world where every business owner feels empowered</h1>
                    <p className="py-3">By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits bg-#E7F6F2">
        <div className="container mx-auto relative">
<h1 className="text-center text-3xl font-semibold py-5">Benefits of SEO & Digital Marketing</h1>
<p className="py-3 text-center">By investing in strategic SEO and digital marketing initiatives, businesses can<br/>
unlock a myriad of benefits.</p>
<div className="absolute top-20 left-0"><img  src="	https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/></div>

        </div>
         <div className="row  cngslide">
          <div className="flex gap-1 gallery container"> 
<div className="img-box"> <h2>Website Design & Development</h2>my <p>competition, and relevance helps prioritize which keywords to target. Equally important is considering the search intent behind each keyword—whether</p></div>
<div className="img-box"> <h2>SEO</h2> </div>
<div className="img-box"> <h2>PPC Advertising</h2> </div>
<div className="img-box"> <h2>Social Media Marketing</h2> </div>
<div className="img-box"> <h2>Content Marketing</h2></div>
<div className="img-box"> <h2>Email Marketing</h2></div>
<div className="img-box"> <h2>Analytic and Reporting</h2> </div>

          </div>


         </div>
      </section>
     
      <section className="clientview bg-#E7F6F2">
        <div className="container mx-auto relative">
<h1 className="text-center text-4xl font-semibold py-5">What Our Client Say<br/>
On Google Reviews</h1>
<p className="py-2 text-center text-[20px]"> Don't just take our word for it. Hear what our satisfied clients<br/>
have to say about their experience partnering with SEOC
</p>
<div className="absolute top-20 left-0"><img  src="	https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/></div>

        </div>
        <div className="reviewslider">
< div className="row">
  <div className="container flex g-2">
  <div className="col-lg-4">
  <div className="border-solid ">
<p className="float- start">It’s always both thrilling and anxiety-inducing when you get to meet with your CEO. On the one hand, it’s an opportunity to impress them, show off your skills, and maybe even get some good career advice.
On the other hand, if the meeting goes poorly, the CEO could regard you as unimpressive, dull, or far worse. 
</p>
  </div>
  </div>
  <div className="col-lg-5 offset-1">
    <img src="https://th.bing.com/th/id/OIP.AS6OCFywaMmXG7Mt0yXPpwHaDt?rs=1&pid=ImgDetMain"/>
  </div>
  </div>
</div>
        </div>
        
      </section>
      <section className="  bg-slate-200 mt-3">
        <div className="container  innovation  p-relative">
        <div>
          <h1 className="text-3xl font-bold text-center py-5">Insights & Innovations:<br/>
          Our Latest Blog Posts</h1>
          <p className="text-center text-[21px] font-serif">Explore our blog to discover actionable insights, success stories, and<br/>
          expert advice that can help drive growth for your business</p>
        </div>
        <div className="inno-image2">
          <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/>
        </div>
        <div className="inno-img">
          <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/>
        </div>

        <div className="inno-image py-3 ">
          <div className="row flex">
            <div className="col-lg-4">
              <div>
                <img className="inno-1" src="https://html.fleexstudio.com/seoc/assets/img/all-images/blog-img1.png"/>
                <div className="text bg-slate-50">
                <div className="flex gap-3 "><p className="items-center  flex gap-3 text-2xl"><BsFillPersonFill /> Ben Stokes</p> <p  className="items-center  flex gap-3 text-2xl"><FaRegCalendarAlt /> 16 Aus 2023</p></div>
                <p className="py-2 font-bold text-2xl">10 Essential SEO Tips to Boost Your Website's Ranking</p>
                <p>Are you looking to improve your website's visibility and attract more organic traffic?</p>
                <button className=" flex gap-1 font-bold pl-5 py-3 items-center">Read More <GoArrowUpRight /></button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="https://html.fleexstudio.com/seoc/assets/img/all-images/blog-img2.png"/>
              <div className="text bg-slate-50">
                <div className="flex gap-3 "><p className="items-center  flex gap-3 text-2xl"><BsFillPersonFill /> Ben Stokes</p> <p  className="items-center  flex gap-3 text-2xl"><FaRegCalendarAlt /> 16 Aus 2023</p></div>
                <p className="py-2 font-bold text-2xl">10 Essential SEO Tips to Boost Your Website's Ranking</p>
                <p>Are you looking to improve your website's visibility and attract more organic traffic?</p>
                <button className=" flex gap-1 font-bold pl-5 py-3 items-center">Read More <GoArrowUpRight /></button>
                  </div>
            </div>
            <div className="col-lg-4">
              <img src="https://html.fleexstudio.com/seoc/assets/img/all-images/blog-img3.png"/>
              <div className="text bg-slate-50">
                <div className="flex gap-3 "><p className="items-center  flex gap-3 text-2xl"><BsFillPersonFill /> Ben Stokes</p> <p  className="items-center  flex gap-3 text-2xl"><FaRegCalendarAlt /> 16 Aus 2023</p></div>
                <p className="py-2 font-bold text-2xl">10 Essential SEO Tips to Boost Your Website's Ranking</p>
                <p>Are you looking to improve your website's visibility and attract more organic traffic?</p>
                <button className=" flex gap-1 font-bold pl-5 py-3 items-center">Read More <GoArrowUpRight /></button>
                  </div>
            </div>
          </div>

        </div>
        </div>
      </section>
      <section className="  bg-slate-200 mt-3">
        <div className="container  innovation  p-relative">
        <div>
          <h1 className="text-3xl font-bold text-center py-5">Get In Touch With Us Today</h1>
          <p className="text-center text-[21px] font-serif">We're here to help! If you have any questions or would like to discuss<br/>
          how our SEO and digital marketing services can benefit your business,</p>
        </div>
        <div className="inno-image2">
          <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/>
        </div>
        <div className="inno-img">
          <img src="https://html.fleexstudio.com/seoc/assets/img/elements/star2.png"/>
        </div>

        <div className="inno-image py-3 ">
          <div className="row flex">
            
          <div className="col-lg-5">
<div className="bg-black text-white ">
  <h1 className="pt-3 pl-5 text-3xl">Contact Info</h1>
  <p className="pl-5 py-4">We're here to help! If you have any questions or would like to<br/> discuss how our SEO and digital marketing services can <br/>benefit your business,</p>
  <hr/>
  <div className="contactinfo flex gap-4 m-3">
    <div>
      <img src="	https://html.fleexstudio.com/seoc/assets/img/icons/location2.svg"/>
    </div>
    <div className="content">
      <h1>Our Location</h1>
      <a href="">8708 Technology Forest Pl Suite <br className="d-lg-block d-none"/>1208-The woodland kathmandu</a>
    </div>
  </div>
  <div className="contactinfo flex gap-4 m-3">
    <div>
      <img src="	https://html.fleexstudio.com/seoc/assets/img/icons/phone2.svg"/>
    </div>
    <div className="content">
      <h1>Phone number</h1>
      <a href="tel:9867183155">123-456-7890 <br className="d-lg-block d-none"/>123-456-7890</a>
    </div>
  </div>
  <div className="contactinfo flex gap-4 m-3">
    <div>
      <img src="	https://html.fleexstudio.com/seoc/assets/img/icons/email2.svg"/>
    </div>
    <div className="content pb-6">
      <h1>Email address</h1>
      <a href="mailto:xyz321@gmail.com">abc24@gmail.com <br className="d-lg-block d-none"/>xyz321@gmail.com</a>
    </div>
  </div>
 
</div>

          </div>
          <div className="col-lg-7  bg-slate-50">
            <div className="container mx-auto">
            <div className="text-start py-4">
            <h1 className="font-bold text-black">Get in Touch</h1>
              <p>We're here to help! If you have any questions or would like to discuss<br/>
            how our SEO and digital marketing services can benefit your business,</p>
            </div>
            
              <form>
            <div className="row ">
              <div className="col-6">
                <input type="text" placeholder="First name" className="form-control"></input>
                
              </div>
              <div className="col-6">
                <input type="text" placeholder="Last Name " className="form-control"></input>
                
              </div>
<div className="py-4 gap-3">
  <div className="row">
<div className="col-6">
                <input type="text" placeholder="Email" className="form-control"></input>
                
              </div>
              <div className="col-6">
                <input type="text" placeholder="Phone no. " className="form-control"></input>
                
              </div>
              </div>
              <div className="row py-4">
                <div className="col-lg-12">
                <select class="form-select" aria-label="Default select example">
  <option selected>Our services</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

                </div>
                <div className="py-4">
                <div class="mb-3">
  
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
  <div className="pt-5">
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            </div>
</div>
                </div>
              </div>
</div>
            </div>
            
              </form> 
              </div>
              </div>
   
           
          </div>

        </div>
        </div>
      </section>

    </>
  );
}
