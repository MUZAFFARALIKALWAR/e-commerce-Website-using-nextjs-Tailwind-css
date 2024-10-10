/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from "next/image"
function Herro(){
    return(
        <div className="w-full flex justify-center items-center">
            <div className="sm:full md:w-full lg:w-[80%] flex justify-evenly">
                <div className='border-r-2 border-neutral-100 p-5 sm:hidden md:hidden lg:block pb-0 '>
                    <ul>
                        <li className='leading-loose hover:underline cursor-pointer'>Woman&apos;s Fashion  <FontAwesomeIcon icon={faChevronRight} className='text-xs ml-2'></FontAwesomeIcon></li>
                        <li className='leading-loose hover:underline cursor-pointer'>Men&apos;s Fashion  <FontAwesomeIcon icon={faChevronRight} className='text-xs ml-8'></FontAwesomeIcon></li>
                        <li className='leading-loose hover:underline cursor-pointer'>Electronics</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Home & Lifestyle</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Medicine</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Sports & Outdoor</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Baby&apos;s & Toys</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Groceries & Pets</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Health & Beauty</li>
                        
                    </ul>
                </div>
                <div className=' sm:pt-0 md:pt-0 lg:pt-6'>
                 <Image className='sm:w-[900px] md:w-[900px] lg:w-[700px] h-full' width={600} height={400} src={"/images/home-pic/herro.png"} alt={"herro imgae"}></Image>
                </div>
            </div>
        </div>
    )
}
export default Herro