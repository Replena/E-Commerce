import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../ui/pagination.jsx";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 1;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i <= pagesToShow ||
      i > totalPages - pagesToShow ||
      (i >= currentPage - pagesToShow && i <= currentPage + pagesToShow)
    ) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
      pageNumbers.push("...");
    }
  }

  return (
    <Pagination className="my-5">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => onPageChange(1)}>
              First
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
          </PaginationItem>
        )}
        {pageNumbers.map((number, index) => (
          <PaginationItem key={index}>
            {number === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => onPageChange(number)}
                isActive={currentPage === number}
              >
                {number}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => onPageChange(totalPages)}>
              Last
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
