import React from 'react';
import Image from 'next/image';

const GridGallery: React.FC = () => {
  const photoCount = 18;

  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from(Array(photoCount), (_, index) => (
        <div key={index} className="relative aspect-w-1 aspect-h-1">
          <Image
            src={`/players/${index + 1}.png`}
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