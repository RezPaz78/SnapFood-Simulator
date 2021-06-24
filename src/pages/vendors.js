import React, { useEffect } from "react";
import axios from "../utils/axios";

const Vendors = () => {
  useEffect(() => {
    axios
      .get("v3/restaurant/vendors-list", {
        params: { page: 0, page_size: 10, lat: 35.754, long: 51.328 },
      })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="Vendors"></div>;
};

export default Vendors;
