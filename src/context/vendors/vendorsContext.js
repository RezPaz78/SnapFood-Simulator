import { createContext, useContext } from "react";

export const vendorsInitialState = {
  allVendors: [],
  currentPage: [],
  page: 0,
  pageSize: 10,
  lat: 35.754,
  long: 51.328,
};

export const vendorsContext = createContext(vendorsInitialState);
export const useVendors = () => useContext(vendorsContext);
