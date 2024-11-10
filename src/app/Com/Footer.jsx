import React from 'react'
import Image from 'next/image'
import logo from './logo1.png'

 
function Footer() {
  return (
    <>
    <div className=' bg-slate-300'> 
    <div className="container mx-auto py-5">
      <div className="row">
      <div className="col-4">
      <Image
      src={logo}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
      By optimizing content, leveraging <br/>relevant keywords, and adhering to best practices,<br/> businesses can secure prominent position (SEO)
      </div>
      <div className="col-2">
     <p className='font-bold'> About Link</p>
      <ul>
        <li className=' '>Our Blog</li>
        <li className=' '>About Us</li>
        <li className=''>Services</li>
        <li className=''>Marketing</li>
        <li className=''>Testimonials</li>
        <li className=' '>Contact Us</li>
      </ul>

      </div>
      <div className="col-2">
     <p className='font-bold'>Get in touch</p>  

Infoseoc@gmail.com

8708 Technology Forest
Pl Suite 125 -G, The
Woodlands, TX 773

123-456-789
      </div>
      <div className="col-4  ">
        <form>
     <p className='font-bold'>Subscribe Our Newsletter</p> <br/>
    <input className='rounded-full' type='text' placeholder='  Enter Your email'></input> 
 <button className='rounded-full'>Subscribe</button>
 </form>
      </div>
      </div>
     </div>

    </div>
    

    </>
  )
}

export default Footer
