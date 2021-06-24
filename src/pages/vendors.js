import React, { useEffect, useRef } from "react";
import axios from "../utils/axios";
import { useVendors } from "../context/vendors/vendorsContext";
import Vendor from "../components/vendor";

const Vendors = () => {
  const [vendors, vendorsDispatch] = useVendors();
  const bottomRef = useRef();

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
    const bottomElem = bottomRef.current;
    const options = {
      root: null,
      rootMargin: "10px",
      threshhold: 1,
    };
    const observerHandler = (entries) => {
      if (entries[0].isIntersecting) {
        vendorsDispatch({
          type: "INCREASE_PAGE",
        });
      }
    };
    const intersectionObserver = new IntersectionObserver(
      observerHandler,
      options
    );
    if (bottomElem) intersectionObserver.observe(bottomElem);

    return () => {
      if (bottomElem) intersectionObserver.unobserve(bottomElem);
    };
  }, [vendorsDispatch]);

  return (
    <div className="Vendors">
      {vendors.allVendors.slice(1).map((vendor, index) => {
        return <Vendor key={index} {...vendor} />;
      })}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Vendors;
