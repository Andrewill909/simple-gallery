import React from 'react';

const ImageCard = ({ img }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-1">
      <div className="w-full max-h-full">
        <img className="object-cover h-52 w-full" src={img.photo} alt="Mountain" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-blue-2 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-2 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-2 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-2 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
};

export default ImageCard;
