import React from 'react';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];

    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <div className='bg-gray-100 p-4 mt-8 flex justify-center items-center gap-2 text-lg font-medium'>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${currentPage === 1 ? 'text-gray-400' : 'text-black hover:text-blue-600'}`}
      >
      <i className="fa-solid fa-arrow-left"></i>
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-200 text-gray-800'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${currentPage === totalPages ? 'text-gray-400' : 'text-black hover:text-blue-600'}`}
      >
      <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
