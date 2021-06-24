const VendorsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        currentPage: [...action.payload.vendors],
        allVendors: [...state.allVendors, ...action.payload.vendors],
      };
    case "CHANGE_FILTERS":
      return { ...state, ...action.payload };
    case "INCREASE_PAGE":
      const newPage = state.page + 1;
      return { ...state, page: newPage };
    default:
      return { ...state };
  }
};

export default VendorsReducer;
