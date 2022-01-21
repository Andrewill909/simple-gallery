import React, { useState } from 'react';
import { WithContext as ReactSearch } from 'react-tag-input';

const Searchbar = ({ setCustomTags }) => {
  const [tags, setTags] = useState([]);

  const onDeletion = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const onAdditon = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSubmit = () => {
    // console.log(tags);
    setCustomTags(tags.map((tag) => tag.text));
  };

  return (
    <>
      <div className="wrapper pt-32 flex justify-center">
        <ReactSearch
          tags={tags}
          handleAddition={onAdditon}
          handleDelete={onDeletion}
          inputFieldPosition="bottom"
          placeholder="Search by Image Tags"
          classNames={{
            tag: 'bg-yellow-1 p-2 md:p-4 rounded-lg mx-2 md:mx-4 ring ring-black',
            tags: 'w-full',
            tagInput: 'flex justify-center',
            tagInputField: 'mt-12 w-[50%] h-[3rem] text-center font-semibold outline-none ring ring-yellow-1 rounded-xl text-sm md:text-xl',
          }}
        />
      </div>
      <div className="mt-10 text-white flex justify-center">
        <button onClick={handleSubmit} className="p-4 bg-blue-2 hover:bg-yellow-1 hover:text-blue-2 rounded-xl transition delay-75">
          Search
        </button>
      </div>
    </>
  );
};

export default Searchbar;
