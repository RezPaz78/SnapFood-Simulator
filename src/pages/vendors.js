import React, { useEffect } from "react";
import axios from "../utils/axios";
import { useVendors } from "../context/vendors/vendorsContext";
import Vendor from "../components/vendor";

const Vendors = () => {
  const [vendors, vendorsDispatch] = useVendors();

  useEffect(() => {
    axios
      .get("v3/restaurant/vendors-list", {
        params: { page: 0, page_size: 10, lat: 35.754, long: 51.328 },
      })
      .then((res) => {
        const result = res.data.data;
        console.log(result);
        vendorsDispatch({
          type: "ADD",
          payload: { vendors: result.finalResult },
        });
      })
      .catch((err) => console.log(err));
  }, [vendorsDispatch]);

  useEffect(() => {
    console.log(vendors);
  }, [vendors]);

  return (
    <div className="Vendors">
      <Vendor />
      <Vendor />
      <Vendor />
    </div>
  );
};

export default Vendors;
