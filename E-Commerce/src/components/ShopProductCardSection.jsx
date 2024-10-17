import React, { useState } from "react";
import Products from "./Products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import data from "../data/data.json";

function ShopProductCardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = data.product.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Products itemsPerPage={itemsPerPage} currentPage={currentPage} />

      <Pagination className="my-5">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(1)}>
                First
              </PaginationLink>
            </PaginationItem>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(totalPages)}>
                Last
              </PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ShopProductCardSection;
