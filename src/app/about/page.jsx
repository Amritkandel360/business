import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function page() {
  return (
    <>
    <section className='top'>
        <div className='p-relative'><img className='w-100 ' src='https://html.fleexstudio.com/seoc/assets/img/bg/inner-header.png'/>
        
        <div className="container">
            <div className="row  ">
                <div className="col-lg-12 text-center p-absolute top -80 ">
                   
                    <h1  className='text-4xl '>About us</h1>
                    <p className='text-1xl'><a href='/'>Home</a><MdOutlineKeyboardArrowRight /> About</p>
                </div>
            </div>
        </div>
        
        </div>
    
        

    </section>
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
        </>
  )
}

export default page
