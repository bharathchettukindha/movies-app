import React from 'react';
import logo from '../assets/logo1.webp';

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[82vh] bg-cover flex items-end -mb-37 -mt-35"
      style={{ backgroundImage: `url(https://preview.redd.it/zzd6qewayd531.jpg?width=1080&crop=smart&auto=webp&s=dc703031e54346629721925dc8f4a2b2bfa80439)`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' , height: '100%' }}
    >
      <div className="text-white text-2xl text-center w-full bg-gray-900 p-0.5rem ">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
