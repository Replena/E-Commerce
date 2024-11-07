import React, { useState, useEffect } from "react";
import Products from "../Products.jsx";
import PaginationComponent from "./PaginationComponent.jsx";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "./FilterSection.jsx";
import { setFilter, setOffset } from "../../redux/actions/productActions";
import { fetchProducts } from "@/redux/actions/thunkActions.js";

function ShopProductCardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();
  const { productList, filter, total } = useSelector((state) => state.product);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const queryString = {
      sort,
      offset: (currentPage - 1) * 12,
      search: filterText || filter,
    };

    dispatch(fetchProducts(new URLSearchParams(queryString).toString()));
  }, [dispatch, sort, filterText, currentPage, filter]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(setOffset((pageNumber - 1) * 12));
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterClick = () => {
    dispatch(setFilter(filterText));
    dispatch(setOffset(0));
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSort(value);
    dispatch(setOffset(0));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / 12);

  return (
    <div className="container">
      <FilterSection
        totalItems={total}
        displayedItemsCount={productList.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortOption={sort}
        onSortChange={handleSortChange}
        searchText={filterText}
        onSearchChange={handleFilterChange}
        onFilterClick={handleFilterClick}
      />
      <Products viewMode={viewMode} productList={productList} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ShopProductCardSection;
