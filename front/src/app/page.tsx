import Image from "next/image";
import { FC } from "react";
// import Header from "./Components/Header/Header"
// import { Card } from "./Components/card/Card";

//Img
import backgroundImg from "./Img/landing_b.jpeg"

export const Home = () => {

  return(
    <div className="w-full flex justify-center">
      <div className="max-w-[1000px] flex justify-center p-4 ml-6">
        <div className="w-1/2 h-1/2">
          <Image src={backgroundImg} alt="Logo" className=" rounded-xl"></Image>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-white font-bold text-[50px] leading-[125px] text-left p-1 ml-4">
              <span className="block">Where</span>
              <span className="block">dreams and</span>
              <span className="block">technology</span>
              <span className="block">become reality</span>
          </h2>
          <div className="h-12 mt-3">
            <div className="w-1/2 bg-blue-700 h-auto ml-16 rounded-full p-5 flex justify-center hover:bg-blue-500">
              <a href="/Home" className="text-white font-semibold text-xl w-full text-center">Get started</a>
            </div>
            {/* <button className="ml-16 rounded-full bg-gray-50 w-60 h-12">Get started</button> */}
          </div>
        </div>
      </div>
    </div>
)
}

export default Home;
