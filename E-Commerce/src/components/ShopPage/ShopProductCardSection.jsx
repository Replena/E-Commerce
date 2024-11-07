import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Products from "../Products.jsx";
import PaginationComponent from "./PaginationComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "./FilterSection.jsx";
import { setFilter, setOffset } from "../../redux/actions/productActions";
import { fetchProducts } from "@/redux/actions/thunkActions.js";

function ShopProductCardSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { productList, filter, total, categories, sort } = useSelector(
    (state) => state.product
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [sortState, setSortState] = useState(sort || "");
  const [filterText, setFilterText] = useState(filter || "");

  const queryParams = new URLSearchParams(location.search);
  const pathSegments = location.pathname.split("/");
  const gender = pathSegments[2];
  const categoryName = pathSegments[3];
  const categoryId = pathSegments[4];

  useEffect(() => {
    const urlFilter = queryParams.get("filter");
    const urlSort = queryParams.get("sort");

    if (urlFilter) {
      setFilterText(urlFilter);
    }
    if (urlSort) {
      setSortState(urlSort);
    }

    const queryString = {
      sort: urlSort || sortState,
      offset: (currentPage - 1) * 12,
      search: urlFilter || filterText,
    };

    if (categoryId && categoryId !== "undefined") {
      queryString.category = categoryId;
    }

    dispatch(fetchProducts(new URLSearchParams(queryString).toString()));
  }, [dispatch, location, categoryId, currentPage, filterText, sortState]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(setOffset((pageNumber - 1) * 12));
  };

  const handleSortChange = (value) => {
    setSortState(value);
    setCurrentPage(1);
    dispatch(setOffset(0));
    navigate(
      `/shop/${gender}/${categoryName}/${categoryId}?filter=${filterText}&sort=${value}`
    );
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterClick = (searchTerm) => {
    setFilterText(searchTerm);
    setCurrentPage(1);
    dispatch(setFilter(searchTerm));
    dispatch(setOffset(0));
    navigate(
      `/shop/${gender}/${categoryName}/${categoryId}?filter=${searchTerm}&sort=${sortState}`
    );
  };

  const totalPages = Math.ceil(total / 12);

  return (
    <div className="container">
      <FilterSection
        totalItems={total}
        displayedItemsCount={productList.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortOption={sortState}
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
