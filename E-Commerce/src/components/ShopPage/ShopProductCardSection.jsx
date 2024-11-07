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

  const { productList, filter, total } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [sort, setSort] = useState("");
  const [filterText, setFilterText] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const categoryId = location.pathname.split("/")[3];
  useEffect(() => {
    const urlFilter = queryParams.get("filter");
    const urlSort = queryParams.get("sort");

    if (urlFilter) {
      setFilterText(urlFilter);
    }
    if (urlSort) {
      setSort(urlSort);
    }

    const queryString = {
      sort: urlSort || sort,
      offset: (currentPage - 1) * 12,
      search: urlFilter || filterText,
    };

    if (categoryId && categoryId !== "undefined") {
      queryString.category = categoryId;
    }

    dispatch(fetchProducts(new URLSearchParams(queryString).toString()));
  }, [dispatch, location, categoryId, currentPage, filterText, sort]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(setOffset((pageNumber - 1) * 12));
  };

  const handleSortChange = (value) => {
    setSort(value);
    setCurrentPage(1);
    dispatch(setOffset(0));
    navigate(
      `?filter=${filterText}&sort=${value}${
        categoryId ? `&category=${categoryId}` : ""
      }`
    );
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterClick = () => {
    setCurrentPage(1);
    dispatch(setFilter(filterText));
    dispatch(setOffset(0));
    navigate(
      `?filter=${filterText}&sort=${sort}${
        categoryId ? `&category=${categoryId}` : ""
      }`
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
