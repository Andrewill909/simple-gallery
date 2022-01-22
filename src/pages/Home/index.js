import React, { useState, useEffect } from 'react';
import { getFeed } from '../../api/feed';

//? Components
import Searchbar from '../../components/Searchbar';
import ImageContainer from '../../components/ImageContainer';
import ImageCard from '../../components/ImageCard/ImageCard';
import SpinnerLoading from '../../components/SpinnerLoading';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const [image, setImage] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //? Pagination
  const [curPage, setCurPage] = useState(1);
  const [perPage] = useState(6);
  const skip = (curPage - 1) * perPage;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const feed = await getFeed({ tags });
      setImage(feed.data.data);
      setCurPage(1);
      setIsLoading(false);
    })();
  }, [tags]);

  return (
    <>
      <Searchbar setCustomTags={(tags) => setTags([...tags])} isLoading={isLoading} />
      <ImageContainer>
        {!isLoading && image.length < 1 && <h1 className="text-6xl text-center mx-auto mt-32 text-white col-span-10">Image not found</h1>}
        {isLoading ? (
          <SpinnerLoading />
        ) : (
          image.slice(skip, curPage * perPage).map((img, idx) => {
            return <ImageCard key={idx} img={img} />;
          })
        )}
      </ImageContainer>
      {!isLoading && image.length > 0 && <Pagination perPage={perPage} itemCount={image.length} setCurPage={setCurPage} />}
    </>
  );
};

export default Home;
