import React from 'react'
import {  Navlink } from '../home/style'
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import { Background } from './style'
const Navbar = () => {
  return (
    <Background>
     <div class="flex justify-between items-center w-[full] fixed top-0  left-0 right-0 ">
      <div class="flex  justify-start pl-8 items-center">
        <p class="text-white font-bold text-6xl leading-16  font-serif cursor-pointer ">Baratie</p>
      </div>


    <div class="flex gap">

      <div class="flex  justufy-evenly items-center gap-10 mr-10">
        <Navlink to="/" class="text-white cursor-pointer text-3xl underline decoration-solid font-patua hover:text-black">HOME</Navlink>
        <Navlink to="/menu" class="text-white cursor-pointer text-3xl underline decoration-solid font-patua hover:text-black">MENU</Navlink>
        <Navlink to="/menu" class="text-white cursor-pointer text-3xl underline decoration-solid font-patua hover:text-black">GALLARY</Navlink>
        <Navlink to="/menu" class="text-white cursor-pointer text-3xl underline decoration-solid font-patua hover:text-black">VISIT</Navlink>
   
      <div><img src={twitter} class="cursor-pointer" /></div>
      <div><img src={instagram} class="cursor-pointer"/></div>

      </div>
      </div>
    </div>
    </Background>
  )
}

export default Navbar