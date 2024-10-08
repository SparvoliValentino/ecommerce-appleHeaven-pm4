import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile,faLaptop, faTabletScreenButton, faHeadphonesSimple, faCamera, faDesktop, faHardDrive, faKeyboard } from '@fortawesome/free-solid-svg-icons';

export const CategoriesCards = ()=>{
    return(
        <div className=" flex w-full flex-wrap gap-3 p-2 justify-center md:flex md:justify-evenly md:w-full md:flex-wrap md:gap-4 md:p-3">
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/1' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Smartphones</a>
                    <a href="/product/Categories/1">
                    <FontAwesomeIcon
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                        icon={faMobile}
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/2' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Laptops</a>
                    <a href="/product/Categories/2">
                    <FontAwesomeIcon 
                        icon={faLaptop}
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"     
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/3' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Tablets</a>
                    <a href="/product/Categories/3">
                    <FontAwesomeIcon 
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                        icon={faTabletScreenButton} 
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/4' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Headphones</a>
                    <a href="/product/Categories/4">                   
                    <FontAwesomeIcon 
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                        icon={faHeadphonesSimple} 
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div  className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/5' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Cameras</a>
                    <a href="/product/Categories/5">
                    <FontAwesomeIcon
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out" 
                        icon={faCamera} 
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div  className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/6' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Monitors</a>
                    <a href="/product/Categories/6">
                    <FontAwesomeIcon
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out" 
                        icon={faDesktop} 
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div  className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/7' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Storage</a>
                    <a href="/product/Categories/7">
                    <FontAwesomeIcon 
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                        icon={faHardDrive} 
                    />
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[250px] rounded-3xl bg-gray-50 shadow-custom-inset group overflow-hidden">
                <div  className="flex flex-col justify-center items-center h-full relative">
                    <a href='/product/Categories/' className="text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-10">Accessories</a>
                    <a href="/product/Categories/8">
                    <FontAwesomeIcon 
                        className="w-[50px] h-[50px] text-gray-600 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                        icon={faKeyboard} 
                    />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default CategoriesCards;