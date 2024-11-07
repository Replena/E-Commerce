import { toast } from "react-toastify";
import { getGravatarUrl } from "../../utils/gravatarUtil";
import { api } from "@/axios/userFetch";
import { setCurrentUser } from "./clientActions";
import {
  setCategories,
  setFetchState,
  setProductList,
  setTotal,
} from "./productActions";
export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", { ...credentials });
      const userData = response.data;
      const userDataWithGravatar = {
        ...userData,
        gravatarUrl: getGravatarUrl(credentials.email),
      };
      dispatch(setCurrentUser(userDataWithGravatar));

      if (credentials.rememberMe) {
        localStorage.setItem("token", userData.token);
      }
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
      return false;
    }
  };
};
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;

  if (!roles.length) {
    api
      .get("/roles")
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.error("Roller yüklenirken hata:", error);
        toast.error("Roller yüklenirken hata oluştu");
      });
  }
};
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  setAuthToken(null);
};

export const verifyToken = (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return Promise.resolve(false);
  }

  setAuthToken(token);

  return api
    .get("/verify")
    .then((response) => {
      const userData = response.data?.data || response.data;

      if (userData) {
        const userInfo = {
          name: userData.name,
          email: userData.email,
          role_id: userData.role_id,
          avatar: userData.avatar,
          token: token,
        };

        dispatch(setCurrentUser(userInfo));
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error("Token verification failed:", error);
      clearAuthData();
      return false;
    });
};

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
  async (dispatch, getState) => {
    dispatch(setFetchState("loading"));

    const { filter, sort, limit, offset } = getState().product;
    const params = new URLSearchParams();

    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);
    if (limit) params.append("limit", limit);
    if (offset) params.append("offset", offset);

    // queryString eklemeyi unutmamalıyız
    const endpoint = queryString
      ? `/products?${queryString}&${params.toString()}`
      : `/products?${params.toString()}`;

    try {
      const response = await api.get(endpoint);
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("success"));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setFetchState("error"));
    }
  };
