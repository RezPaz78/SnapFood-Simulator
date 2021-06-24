import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/vendors">لیست رستوران‌ها</Link>
    </div>
  );
};

export default Home;
