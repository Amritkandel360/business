import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <>
    <section className='top bg-green-100'>
        <div className='up'>
            <div className="container mx-auto py-6 flex justify-between items-center">
              <div>
               <a href='/'>  <img className='w-100' src="https://html.fleexstudio.com/seoc/assets/img/logo/logo1.png" /> </a>
                 </div> 
              <div>
                <nav>
                    <ul className='font-bold text-2xl color:black flex gap-5'>
                        <li className='flex items-center'>Home <IoIosArrowDown /></li>
                      <a href='about'> <li className='flex items-center'>About </li></a> 
                        <li className='flex items-center'>Services <IoIosArrowDown /></li>
                        <li className='flex items-center'>Blogs <IoIosArrowDown /></li>
                      <a href='contact'>  <li className='flex items-center'>Contact us </li></a>
                        <li className='flex items-center'>Pages <IoIosArrowDown /></li>
                    </ul>
                </nav>
                </div> 
                <div className='flex gap-4 items-center'>
            <div className="stroke-cyan-800"> <BsSearch /> </div> 
            <button className='rounded-full p-4 bg-blue-800 text-white height-10px font-bold'>Free consultation</button> 
            </div>
            </div>
           


        </div>


        </section>  

    </>
  )
}

export default Header
