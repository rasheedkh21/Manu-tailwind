import React from 'react'
import { Back, } from './style'
import back1 from "../../assets/back-1.png"
import back2 from "../../assets/back-2.png"
import back3 from "../../assets/back-3.png"
import back4 from "../../assets/back-4.png"
import back5 from "../../assets/back-5.png"
import back6 from "../../assets/back-6.png"
import back7 from "../../assets/back-7.png"
import back8 from "../../assets/back-8.png"
import back9 from "../../assets/back-9.png"


const Home = () => {
  return (
    <div class="flex-col bg-[#c4c4c4] ">
    <Back>
      <div class="flex justify-evenly items-center text-center underline decoration-solid font-normal text-white pt-96">

      <div class="flex justify-center items-center tetx-center underline decoration-solid font-normal text-white font-Oranienbaum text-8xl hover:text-black">EAT</div>
      <div class="flex justify-center items-center tetx-center underline decoration-solid font-normal text-white font-Oranienbaum text-8xl hover:text-black">DRINK</div>
      <div class="flex justify-center items-center tetx-center underline decoration-solid font-normal text-white font-Oranienbaum text-8xl hover:text-black">VISIT</div>

    </div>
    </Back>


      <div class="grid items-center justify-center  ">
        <div>
      <span class="text-black flex justify-center text-normal text-center mt-[50px] text-7xl">   Time, dedication, <br /> and darn good  eats.</span>
      </div>
      <div>
      <p class="text-black text-center mt-[20px] text-3xl w-[1230px] ">If breakfast is the most important meal of the day, then brunch is the most important 
  meal of the week. We treat it with the pomp and ceremony it deserves, using farm-
       fresh ingredients to craft food you'll spend the next six days dreaming about.
     </p>
     </div>
     <div class=" flex justify-center items-center mt-[50px]">
     <button class="justify-center items-center text-4xl bg-[#3B3131] cursor-pointer h-[75px] w-[350px] rounded-[12px] text-white hover:bg-[#555151] hover:text-black">OUR STORY</button>
     </div>
     </div>
 
     <div class=" flex-col justify-center items-center text-normal  bg-[#c4c4c4] h-[fit] w-[full]">
    <div class="grid grid-cols-3 grid-rows-3 justify-center items-center mt-[100px]">
      <img src={back1} alt="" class="w-[100%] h-[590px]"/>
      <img src={back2} alt="" class="w-[100%] h-[590px]" />
      <img src={back3} alt="" class="w-[100%] h-[590px]"/>
      <img src={back4} alt="" class="w-[100%] h-[590px]"/>
      <img src={back5} alt="" class="w-[100%] h-[590px]"/>
      <img src={back6} alt="" class="w-[100%] h-[590px]"/>
      <img src={back7} alt="" class="w-[100%] h-[590px]"/>
      <img src={back8} alt="" class="w-[100%] h-[590px]"/>
      <img src={back9} alt="" class="w-[100%] h-[590px]"/>
    </div>
    
    </div>
</div>
  )
}

export default Home