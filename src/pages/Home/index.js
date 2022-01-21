import React, { useState, useEffect } from 'react';
import { getFeed } from '../../api/feed';

//? Components
import Searchbar from '../../components/Searchbar';
import ImageContainer from '../../components/ImageContainer';
import ImageCard from '../../components/ImageCard/ImageCard';

const Home = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    (async () => {
      const feed = await getFeed();
      setImage(feed.data.data);
    })();
  }, []);

  return (
    <>
      <Searchbar />
      <ImageContainer>
        {image.map((img, idx) => {
          return <ImageCard key={idx} img={img} />;
        })}
      </ImageContainer>
    </>
  );
};

export default Home;
