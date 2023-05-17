import React from 'react';
import HomeIcon from '../../public/assets/icons/home.svg';
import CalendarIcon from '../../public/assets/icons/calender.svg';
import GalleryIcon from '../../public/assets/icons/gallery.svg';
import ChatIcon from '../../public/assets/icons/chat.svg';

const Footer: React.FC = () => {
  return (
    <div className="fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className="flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <li className="flex items-center font-medium flex-col px-2 py-1">
            <HomeIcon className="h-6 w-6 mb-1" />
            <p>Beranda</p>
          </li>
          <li className="flex items-center flex-col px-2 py-1">
            <CalendarIcon className="h-6 w-6 mb-1" />
            <p>Resepsi</p>
          </li>
          <li className="flex items-center flex-col px-2 py-1">
            <GalleryIcon className="h-6 w-6 mb-1" />
            <p>Galeri</p>
          </li>
          <li className="flex items-center flex-col px-2 py-1">
            <ChatIcon className="h-6 w-6 mb-1" />
            <p>Ucapan</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;