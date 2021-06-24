const VendorsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        currentPage: [...action.payload.vendors],
        allVendors: [...state.allVendors, ...action.payload.vendors],
      };
    default:
      return { ...state };
  }
};

export default VendorsReducer;
