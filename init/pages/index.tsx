import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import GridGallery from '../components/gridGallery';
// import ReactPlayer from 'react-player';

const IndexPage: NextPage = () => {
  return (
    <div>
      {/* Video */}
      <div className="relative w-screen h-screen">
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=YOUR_VIDEO_URL"
          width="100%"
          height="100%"
          playing
          loop
          muted
        /> */}
      </div>

      {/* Splash Area */}
      {/* <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Thank You</h1>
          <h2 className="mt-4 text-2xl font-semibold text-center">
            Congratulations on making a fourth consecutive grand final!
          </h2>
          <p className="mt-4 text-lg text-center">
            On behalf of all Melbourne City fans, thank you for representing our city and giving us so much joy over the last 4 seasons.
          </p>
        </div>
      </div> */}

      {/* Grid Gallery */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto">
          {/* <GridGallery /> */}
          <Image src='/public/players/9.jpg' alt='' width='45' height='45' />
        </div>
      </div>

      {/* Fan Messages */}
      <div className="py-16">
        <div className="container mx-auto">
          {/* Testimonial format of fan messages */}
          {/* Replace with your fan messages implementation */}
        </div>
      </div>

      {/* Banner for Scott Jamieson */}
      {/* <div className="relative w-screen h-screen">
        <Image
          src="/scott_jamieson_image.jpg"
          alt="Scott Jamieson"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute top-0 left-0 p-8 text-white">
          {/* Scott Jamieson stats area 
        </div>
      </div> */}

      {/* Message Area 
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto">
          {/* Duplicate of testimonial section with one message */}
          {/* Replace with your message area implementation 
        </div>
      </div>

      {/* Banner for Jamie Maclaren 
      <div className="relative w-screen h-screen">
        <Image
          src="/jamie_maclaren_image.jpg"
          alt="Jamie Maclaren"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute top-0 left-0 p-8 text-white">
          {/* Jamie Maclaren stats area 
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-200">
        <div className="container mx-auto">
          <p className="text-center">© 2023 Your Name</p>
          <p className="text-center">
            <a href="https://your-personal-site.com">Visit your personal site</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;