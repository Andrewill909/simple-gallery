import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ perPage, itemCount, setCurPage }) => {
  const handleClick = (e) => {
    setCurPage(e.selected + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="wrapper my-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageCount={Math.ceil(itemCount / perPage)}
        pageRangedDisplayed={3}
        className="text-center flex justify-center items-center text-blue-3 font-bold font-mont-bold text-sm md:text-lg"
        pageClassName="bg-white mx-2 md:mx-4  rounded-lg flex justify-center items-center"
        previousClassName="bg-white rounded-lg mr-2 md:mr-4 text-base md:text-xl"
        nextClassName="bg-white rounded-lg ml-2 md:ml-4 text-base md:text-xl"
        activeClassName="bg-pink-1"
        pageLinkClassName="inline-block px-4 py-2"
        previousLinkClassName="inline-block px-4 py-2"
        nextLinkClassName="inline-block px-4 py-2"
        onPageChange={handleClick}
      />
    </div>
  );
};

export default Pagination;
