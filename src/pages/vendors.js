import React, { useEffect, useRef } from "react";
import axios from "../utils/axios";
import { useVendors } from "../context/vendors/vendorsContext";
import Vendor from "../components/vendor";

const Vendors = () => {
  const [vendors, vendorsDispatch] = useVendors();
  const vendorsRef = useRef();

  useEffect(() => {
    axios
      .get("v3/restaurant/vendors-list", {
        params: {
          page: vendors.page,
          page_size: vendors.pageSize,
          lat: vendors.lat,
          long: vendors.long,
        },
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
  }, [
    vendors.lat,
    vendors.long,
    vendors.page,
    vendors.pageSize,
    vendorsDispatch,
  ]);

  useEffect(() => {
    let increased = false;

    const isBottom = (el) => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const trackScrolling = () => {
      if (isBottom(vendorsRef.current) && !increased) {
        console.log("header bottom reached");
        vendorsDispatch({
          type: "CHANGE_FILTERS",
          payload: { page: vendors.page + 1 },
        });
        increased = true;
        // document.removeEventListener("scroll", trackScrolling);
      }
    };

    document.addEventListener("scroll", trackScrolling);

    return () => {
      document.removeEventListener("scroll", trackScrolling);
      increased = false;
    };
  }, [vendors.page, vendorsDispatch]);

  return (
    <div ref={vendorsRef} className="Vendors">
      {vendors.allVendors.slice(1).map((vendor) => {
        return <Vendor key={vendor.id} {...vendor} />;
      })}
    </div>
  );
};

export default Vendors;
