import React from "react";

const Vendor = () => {
  return (
    <div className="Vendor">
      <section className="Vendor__heading">
        <div className="Vendor__logo">
          <img src="" alt="" />
        </div>
        <div className="Vendor__info">
          <h2 className="Vendor__info--name">برادران رعنایی</h2>
          <h3 className="Vendor__info--category">ایرانی، کباب، جوجه‌کباب</h3>
        </div>
      </section>
      <section className="Vendor__subtitle">
        <div className="Vendor__rating">
          <span className="Vendor__rating--score">4.7</span>
          <span className="Vendor__rating--vote-count">353</span>
        </div>
        <div className="Vendor__price">۱۲۰۰۰ تومان</div>
      </section>
    </div>
  );
};

export default Vendor;
