import React, { useState } from "react";
import Image from "next/image";
const Pagination = ({ totalItems, itemsPerPage, onPageChange }: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`pagination-button ${currentPage === i ? "active" : ""}`}
          >
            {i}
          </button>
        );
      }
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className="pagination-button"
      >
        1
      </button>;

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`pagination-button  font-semibold text-gray-500 font-noto ${
              currentPage === i ? "active" : ""
            }`}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        buttons.push(
          <span
            key="ellipsis2"
            className=" font-semibold text-xl text-gray-500 pagination-ellipsis"
          >
            ...
          </span>
        );
        buttons.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className="text-gray-500  font-semibold pagination-button font-noto"
          >
            {totalPages}
          </button>
        );
      }
    }
    // return buttons;
    return (
      <div className="flex items-end justify-end gap-2 font-noto">
        {/* {renderPaginationButtons()} */}
        {buttons}
      </div>
    );
  };

  return (
    <div className="pagination flex  items-center gap-4">
      {totalItems > itemsPerPage && (
        <>
          {currentPage !== 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className=" rotate-180"
            >
              <Image
                src="/icons/minirightarrow.svg"
                width={8}
                height={8}
                className="mt-0"
                alt="right"
              />
            </button>
          )}
          {renderPaginationButtons()}
          {currentPage !== totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className=""
            >
              <Image
                src="/icons/minirightarrow.svg"
                width={8}
                height={8}
                className="mt-1"
                alt="right"
              />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
