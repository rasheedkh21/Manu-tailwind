import React from 'react'
import { Eat } from './style';
import insta from "../../assets/insta.png"
import twit from "../../assets/twit.png"
const Menu = () => {
  return (
    <div class="flex-col justify-center items-center h-[fit] w-[full] bg-[#c4c4c4]">
      <h1 class="text-8xl text-center text-serif">OUR MENU</h1>
      <div class="flex justify-center items-center gap-[10px] mt-[50px] ">
        <p class="text-Overlock text-4xl hover:text-white hover:underline decoration-solid cursor-pointer">BREAKFAST</p>
        <div></div>
        <p class="text-Overlock text-4xl hover:text-white hover:underline decoration-solid cursor-pointer">LUNCH</p>
        <div></div>
        <p class="text-Overlock text-4xl hover:text-white hover:underline decoration-solid cursor-pointer">DINNER</p>
        <div></div>
        <p class="text-Overlock text-4xl hover:text-white hover:underline decoration-solid cursor-pointer">DRINKS</p>
        <div></div>
      </div>

      <div class="grid grid-cols-2 grid-rows-2  gap-[60px] justify-center items-center mt-[60px]">

        <div class="flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-[70px] mt-[50px]">
            <h1 class="text-4xl text-serif text-[#3B3131]">Buttermilk Flapjacks</h1>
            <p class="text-3xl text-[#9E1E1E] text-center text-serif">$16</p>
          </div>
          <div>
            <p class="text-3xl text-[#3B3131] text-center text-serif mt-[40px] ">Two flapjacks served with molasses and our signature sassafras-infused whipped cream.</p>
          </div>
          <div class="border-solid border-2 border-[#000] border-580 mt-[60px]"></div>
        </div>

        <div class="flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-[70px] mt-[50px]">
            <h1 class="text-4xl text-serif text-[#3B3131]">Hotcakes & Sausage</h1>
            <p class="text-3xl text-[#9E1E1E] text-center text-serif">$12</p>
          </div>
          <div>
            <p class="text-3xl text-[#3B3131] text-center text-serif mt-[40px] ">Cornmeal and molasses hotcakes served with sweet fennel pork sausage.</p>
          </div>
          <div class="border-solid border-2 border-[#000] border-400 mt-[60px]"></div>
        </div>

        <div class="flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-[70px] mt-[50px]">
            <h1 class="text-4xl text-serif text-[#3B3131]">Buckwheat Cakes Honey </h1>
            <p class="text-3xl text-[#9E1E1E] text-center text-serif">$17</p>
          </div>
          <div>
            <p class="text-3xl text-[#3B3131] text-center text-serif mt-[40px] ">Two thick buckwheat cakes served with honey and our signature sassafras-infused whipped cream.</p>
          </div>
        </div>

        <div class="flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-[70px] mt-[50px]">
            <h1 class="text-4xl text-serif text-[#3B3131]">Grits & Strawberries</h1>
            <p class="text-3xl text-[#9E1E1E] text-center text-serif">$16</p>
          </div>
          <div>
            <p class="text-3xl text-[#3B3131] text-center text-serif mt-[40px] ">Corn grits and local beans known as Arizona Strawberries. Served with onion, garlic,poblano, and ham gravy.</p>
          </div>
        </div>

      </div>
      <div class="flex justify-center items-center">
      <button class="text-center text-3xl bg-[#3B3131] text-white w-[300px] h-[86px] rounded-[12px] hover:bg-[#696262] hover:text-black">FULL MENU</button>
      </div>
      <div>
        position
      </div>
      <Eat>
        <h2 class="text-7xl text-white">EAT TOGETHER</h2>
        <p class="text-4xl text-white ">Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour - dessert.</p> <br /> <br />
        <div class="flex justify-center items-center mt-[20px] text-5xl text-white hover:underline decoration-solid cursor-pointer bg-[#383737] w-[500px] h-[80px] rounded-[46px]">MAKE RESERVATION</div>
      </Eat>
      <div class="flex justify-around">
        <div class="flex-col justify-center items-center">
          <h1 class="text-3xl text-[#000 font-bold font-serif]">CONTACT</h1>
          <p class="text-xl text-[#000 font-bold font-serif]">Sambas Region  </p>
          <p class="text-xl text-[#000 font-bold font-serif]">Blue Near Grand Line </p>
        </div>
        <div class="flex-col justify-center items-center">
          <h1 class="text-3xl text-[#000 font-bold font-serif]">BARATIE</h1>
          <div class=" flex justify-evenly items-center">
            <div><img src={twit} class="cursor-pointer"/></div>
            <div><img src={insta} class="cursor-pointer"/></div>
          </div>
          <p class="text-xl text-[#000 font-bold font-serif]">@example.com</p>
          <p class="text-xl text-[#000 font-bold font-serif]">(555) 888-9999</p>
        </div>
        <div class="flex-col justify-center items-center">
          <h1 class="text-3xl text-[#000 font-bold font-serif]">HOURS</h1>
          <p class="text-xl text-[#000 font-bold font-serif]">Monday-Sunday</p>
          <p class="text-xl text-[#000 font-bold font-serif]">10a.m-10p.m </p>
        </div>
      </div>
    </div>
  )
}

export default Menu;