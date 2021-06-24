import React, { useEffect } from "react";
import axios from "../utils/axios";
import { useVendorsContext } from "../context/vendors/vendorsContext";
import Vendor from "../components/vendor";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";
import SEO from "../components/seo";

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 1,
};

const Vendors = () => {
  const [vendors, vendorsDispatch] = useVendorsContext();
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get("v3/restaurant/vendors-list", {
          params: {
            page: vendors.page,
            page_size: vendors.pageSize,
            lat: vendors.lat,
            long: vendors.long,
          },
        });
        const result = res.data.data;
        vendorsDispatch({
          type: "ADD",
          payload: { vendors: result.finalResult },
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVendors();
  }, [
    vendors.page,
    vendors.pageSize,
    vendors.lat,
    vendors.log,
    vendors.long,
    vendorsDispatch,
  ]);

  const ref = useIntersectionObserver(options, () => {
    vendorsDispatch({
      type: "INCREASE_PAGE",
    });
  });

  useEffect(() => {
    return () => {
      vendorsDispatch({ type: "RESET" });
    };
  }, [vendorsDispatch]);

  return (
    <>
      <SEO title="اسنپ‌فود | رستوران‌ها" />
      <div className="Vendors">
        {vendors.allVendors.slice(1).map((vendor, index) => {
          return <Vendor key={index} {...vendor.data} />;
        })}
        <div ref={ref}></div>
      </div>
    </>
  );
};

export default Vendors;
