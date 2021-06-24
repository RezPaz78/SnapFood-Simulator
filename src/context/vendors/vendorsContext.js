import { createContext, useContext } from "react";

export const vendorsInitialState = {
  allVendors: [],
  currentPage: [],
};

export const vendorsContext = createContext(vendorsInitialState);
export const useVendors = () => useContext(vendorsContext);
