import React, { useReducer } from "react";
import { vendorsContext } from "./vendorsContext";
import VendorsReducer from "./vendorsReducer";

const vendorsInitialState = {
  allVendors: [],
  currentPage: [],
  page: 0,
  pageSize: 10,
  lat: 35.754,
  long: 51.328,
};
const VendorsProvider = (props) => {
  const [state, dispatch] = useReducer(VendorsReducer, vendorsInitialState);
  return (
    <vendorsContext.Provider value={[state, dispatch]}>
      {props.children}
    </vendorsContext.Provider>
  );
};

export default VendorsProvider;
