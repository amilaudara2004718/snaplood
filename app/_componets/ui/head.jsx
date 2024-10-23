import React from 'react';
import NavBar from './NavBar'; // Assuming NavBar is in the same folder

export default function Head({title}) {
  return (
    <div className="w-full"> {/* Ensure full width */}
   

      {/* Main Content */}
      <div className='flex flex-col p-2 items-center'>
        {/* Title */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 text-center'>
          {title} Video
        </h1>

        {/* Subtitle */}
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin text-white mb-6 text-center'>
          <span>Down</span><span className="text-blue-800">loader</span>
        </h2>
        
        {/* Short Description */}
        <p className='text-sm md:text-sm lg:text-sm font-thin text-gray-400 mb-2 text-center max-w-2xl'>
          Download videos effortlessly from multiple platforms. Get your favorite clips in just a few clicks with SnapLood, the ultimate free video downloader!
        </p>
      </div>
    </div>
  );
}
