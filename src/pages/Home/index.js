import React, { useState, useEffect } from 'react';
import { getFeed } from '../../api/feed';

//? Components
import Searchbar from '../../components/Searchbar';
import ImageContainer from '../../components/ImageContainer';
import ImageCard from '../../components/ImageCard/ImageCard';

const Home = () => {
  const [image, setImage] = useState([]);
  const [tag, setTag] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const feed = await getFeed({ tag });
      setImage(feed.data.data);
      setIsLoading(false);
    })();
  }, [tag]);

  return (
    <>
      <Searchbar />
      <ImageContainer>
        {!isLoading && image.length < 1 && <h1 className="text-6xl text-center mx-auto mt-32 text-white">Image not found</h1>}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32 text-white">Loading</h1>
        ) : (
          image.map((img, idx) => {
            return <ImageCard key={idx} img={img} />;
          })
        )}
      </ImageContainer>
    </>
  );
};

export default Home;
