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
    case "RESET":
      return {
        allVendors: [],
        currentPage: [],
        page: 0,
        pageSize: 10,
        lat: 35.754,
        long: 51.328,
      };
    default:
      return { ...state };
  }
};

export default VendorsReducer;
