import React from 'react'

function Skillbar({data}) {
    const {language , percentage , percentageWidth , percentagePosition} = data;
  return (
      <div className="w-full mt-10 lg:w-[100%] lg:ml-[25vw]">
        <div className="flex justify-between mb-5 text-xl">
          <h1>{language}</h1>
          <p className='hidden lg:block' style={{marginRight : percentagePosition}}>{percentage}</p>
        </div>
        <div className="lg:w-[50%] h-2 bg-white rounded">
          <div style={{width : percentageWidth}} className="h-2 bg-gray-700 rounded"></div>
        </div>
      </div>
  )
}

export default Skillbar;
