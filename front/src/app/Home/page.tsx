//Imagenes
import Image from "next/image";

import img from "../Img/macHome.png";
import product1 from "../Img/HomeAssets/appleWatch.png"; // Asegúrate de ajustar la ruta si es necesario

import CategoriesCards from "../Components/CategoriesCards/page";

export const Home = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mb-96 mx-auto flex flex-col justify-center">
                <div className=" justify-center flex md:flex md:relative md:justify-center">
                    <div className="w-1/2 flex flex-col justify-center items-center ml-4 md:max-w-lg md:absolute md:mt-[100px] md:mr-[400px] md:animate-slide-in-left">
                        <h1 className="text-xl text-white font-bold md:text-4xl md:font-bold md:tracking-tight md:text-white md:sm:text-6xl">
                            Welcome to Apple Heaven
                        </h1>
                        <p className="text-base text-white  mt-2 md:text-xl md:mt-4 md:text-gray-100">
                            Your tech paradise starts here: only the best from Apple, only at
                            Apple Heaven.
                        </p>
                        <a
                            href="/product"
                            className="mt-[20px] relative inline-block px-[30px] py-[15px] border-2 border-white uppercase text-white font-semibold text-base md:text-[20px] no-underline group"
                        >
                            <span className="relative z-10">Start shopping</span>
                            {/* <!-- Background animations --> */}
                            <span className="absolute top-[6px] left-[-2px] w-[calc(100%+4px)] h-[calc(100%-12px)] bg-[#262626] transition-transform duration-300 ease-in-out group-hover:scale-y-0"></span>
                            <span className="absolute top-[-2px] left-[6px] w-[calc(100%-12px)] h-[calc(100%+4px)] bg-[#262626] transition-transform duration-300 ease-in-out delay-500 group-hover:scale-x-0"></span>
                        </a>
                    </div>
                    <div className="justify-center md:ml-[180px] md:animate-slide-in-right">
                        <Image
                            src={img}
                            alt=""
                            className="w-[250px] md:w-[700px]"
                        />
                    </div>
                </div>
                <div className="mt-[40px] md:mt-0">
                    <CategoriesCards/>
                </div>
            </div>
        </div>
    );
};

export default Home;


