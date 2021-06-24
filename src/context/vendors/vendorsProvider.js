import React, { useReducer } from "react";
import { vendorsContext, vendorsInitialState } from "./vendorsContext";
import VendorsReducer from "./vendorsReducer";

const VendorsProvider = (props) => {
  const [state, dispatch] = useReducer(VendorsReducer, vendorsInitialState);
  return (
    <vendorsContext.Provider value={[state, dispatch]}>
      {props.children}
    </vendorsContext.Provider>
  );
};

export default VendorsProvider;
