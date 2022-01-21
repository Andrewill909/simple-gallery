import React, { useState } from 'react';
import { WithContext as ReactSearch } from 'react-tag-input';

const Searchbar = ({ setCustomTags, isLoading }) => {
  const [tags, setTags] = useState([]);

  const onDeletion = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const onAdditon = (tag) => {
    setTags([...tags, tag]);
  };

  const onClearTag = () => {
    setTags([]);
  };

  const handleSubmit = () => {
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
          placeholder="Search Image Tags (Enter)"
          classNames={{
            tag: 'bg-yellow-1 p-2 md:p-4 rounded-lg mx-2 md:mx-4 ring ring-black',
            tags: 'w-full',
            tagInput: 'flex justify-center',
            tagInputField: 'mt-12 w-full md:w-[50%] h-[3rem] text-center font-semibold outline-none ring ring-yellow-1 rounded-xl text-sm md:text-xl',
          }}
        />
      </div>
      <div className="mt-10 text-white flex justify-center">
        <button disabled={isLoading} onClick={handleSubmit} className="mr-4 p-4 bg-blue-2 hover:bg-yellow-1 hover:text-blue-2 rounded-xl transition delay-75 disabled:bg-gray-600">
          Search
        </button>
        <button onClick={onClearTag} className="p-4 bg-red-500 hover:bg-yellow-1 hover:text-blue-2 rounded-xl transition delay-75 ">
          Clear Tags
        </button>
      </div>
    </>
  );
};

export default Searchbar;
