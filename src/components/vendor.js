import React from "react";

const Vendor = () => {
  return (
    <div className="Vendor">
      <section className="Vendor__heading">
        <div className="Vendor__heading-logo">
          <img
            src="https://static.snapp-food.com/media/cache/vendor_logo/uploads/images/vendors/logos/5d7b76f2bb448.jpg"
            alt="vendor_logo"
          />
        </div>
        <div className="Vendor__heading-info">
          <h2 className="Vendor__heading-info-name">برادران رعنایی</h2>
          <h3 className="Vendor__heading-info-category">ایرانی، کباب، جوجه‌کباب</h3>
        </div>
      </section>
      <section className="Vendor__subtitle">
        <div className="Vendor__subtitle-price">۱۲۰۰۰ تومان</div>
        <div className="Vendor__subtitle-rating">
          <span className="Vendor__subtitle-rating-vote-count">(353)</span>
          <span className="Vendor__subtitle-rating-score">4.7</span>
        </div>
      </section>
      <div className="Vendor__border"></div>
    </div>
  );
};

export default Vendor;
