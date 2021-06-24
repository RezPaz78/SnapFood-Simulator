import React from "react";

const Vendor = (props) => {
  return (
    <div className="Vendor">
      <section className="Vendor__heading">
        <div className="Vendor__heading-logo">
          <img src={props.data.logo} alt="vendor_logo" />
        </div>
        <div className="Vendor__heading-info">
          <h2 className="Vendor__heading-info-name">{props.data.title}</h2>
          <h3 className="Vendor__heading-info-category">
            {props.data.description}
          </h3>
        </div>
      </section>
      <section className="Vendor__subtitle">
        <div className="Vendor__subtitle-price">۱۲۰۰۰ تومان</div>
        <div className="Vendor__subtitle-rating">
          <span className="Vendor__subtitle-rating-vote-count">
            ({props.data.voteCount})
          </span>
          <span className="Vendor__subtitle-rating-score">
            {props.data.rate}
          </span>
        </div>
      </section>
      <div className="Vendor__border"></div>
    </div>
  );
};

export default Vendor;
