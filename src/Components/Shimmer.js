import React from "react";

const ShimmerCard = ()=>{
    return(
        <div className="p-2 m-2 w-72">
            <div className="shimmerBg rounded-lg bg-gray-300 w-auto h-40"></div>
            <div className="flex justify-start items-start mt-2">
            <div className="bg-gray-300 rounded-full w-10  h-9 mt-2 mr-2"></div>
            <div className="flex flex-col w-full items-start">
            <div className="bg-gray-300 my-1 w-full h-3"></div>
            <div className="bg-gray-300 my-1 w-1/3 h-2"></div>
            <div className="bg-gray-300 my-1 w-1/2 h-2"></div>
        </div>
        </div>
        </div>
    )
}

const Shimmer = ()=>{ 
    return(
        <div className="flex flex-wrap justify-start ml-[280px]">
        {
            Array(20).fill().map((val, index)=>{
                return <ShimmerCard key={index}/>
            })
        }

        </div>
    )
}

export default Shimmer