"use client"
import Link from "next/link";
export const BackButon = ({linkToRoute}:{linkToRoute:string})=>{
    return(
        <div className="w-[200px] bg-blue-600 rounded-lg p-2 flex justify-center hover:bg-blue-500">
            <Link className=" text-white" href={linkToRoute}>Back</Link>
        </div>
    )
}

export default BackButon