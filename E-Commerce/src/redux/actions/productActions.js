import { api } from "@/axios/userFetch";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SORT = "SET_SORT";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});

export const fetchCategories = () => (dispatch) => {
  dispatch(setFetchState("loading"));

  return api
    .get("/categories")
    .then((response) => {
      dispatch(setCategories(response.data));
      dispatch(setFetchState("success"));
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
      dispatch(setFetchState("error"));
    });
};

export const fetchProducts =
  (queryString = "") =>
  (dispatch, getState) => {
    dispatch(setFetchState("loading"));

    const { filter, sort, limit, offset } = getState().product;
    const params = new URLSearchParams();

    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);
    if (limit) params.append("limit", limit);
    if (offset) params.append("offset", offset);

    const endpoint = queryString
      ? `/products?${queryString}&${params}`
      : `/products?${params}`;

    return api
      .get(endpoint)
      .then((response) => {
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState("success"));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState("error"));
      });
  };
