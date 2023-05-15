import React from 'react';
import Image from 'next/image';

const GridGallery: React.FC = () => {
  const imageCount = 18; // Number of images in the gallery

  const getImagePath = (index: number): string => `/players/${index}.png`;

  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from(Array(imageCount), (_, index) => (
        <div key={index} className="relative aspect-w-1 aspect-h-1">
          <Image
            src={getImagePath(index + 1)}
            alt={`Player ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GridGallery;