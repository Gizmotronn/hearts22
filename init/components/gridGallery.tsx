import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    '8.jpg',
    '9.jpg',
    '23.jpg'
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div
          key={photo}
          className="relative aspect-w-1 aspect-h-1"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={`/players/${photo}`}
              alt={photo}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;