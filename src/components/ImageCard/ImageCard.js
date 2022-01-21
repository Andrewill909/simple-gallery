import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCard = ({ img }) => {
  let date = new Date(img.published);
  let dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  return (
    <div className="min-w-full max-h-[50rem] max-w-sm rounded-lg overflow-hidden shadow-lg bg-white justify-self-center border-4 border-black flex flex-col justify-between">
      <div className="w-full max-h-full p-4 rounded-lg overflow-hidden">
        <LazyLoadImage wrapperClassName="object-cover h-52 w-full" src={img.photo} alt="Image" effect="blur" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-blue-2">{img.title.trim().length === 0 ? 'No Title' : img.title.slice(0, 20)}</div>
        <p className="text-blue-2 text-base font-semibold">Posted on : {dateStr}</p>
        <p className="text-blue-2 text-base font-semibold">{'Author : ' + img.author.replace(/(nobody@flickr\.com)|(\(")|("\))/g, '')}</p>
      </div>
      <div className="px-6 pt-4 pb-2 min-h-[8rem]">
        {img.tags.length > 0 ? (
          img.tags.slice(0, 4).map((tag, idx) => {
            return (
              <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-2 mr-2 mb-2">
                #{tag.slice(0, 20)}
              </span>
            );
          })
        ) : (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-2 mr-2 mb-2">NoTag</span>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
