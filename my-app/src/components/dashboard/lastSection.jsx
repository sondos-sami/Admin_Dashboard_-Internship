import React from "react";

function LastSection() {
  const products = [
    {
      name: "Liam Anderson Red",
      revenue: "$1240.32",
      sales: "1,150",
      reviews: "2,102",
      views: "3,822",
      active: true,
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Ava Reynolds Blue",
      revenue: "$1240.22",
      sales: "1,150",
      reviews: "2,102",
      views: "3,822",
      active: true,
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Jackson White Blue",
      revenue: "$1240.22",
      sales: "1,150",
      reviews: "2,102",
      views: "3,822",
      active: true,
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Emma Reynolds Blue",
      revenue: "$1240.22",
      sales: "1,150",
      reviews: "2,102",
      views: "3,822",
      active: true,
      image: "https://via.placeholder.com/40",
    },
  ];

  const conversion = [
    { title: "Product Views", value: "6,575" },
    { title: "Add to Cart", value: "6,575" },
    { title: "Checkout Initiated", value: "6,575" },
    { title: "Completed Purchase", value: "6,575" },
  ];

  return (
    <div className="my-4">
      <div className="row g-3">

        {/* 🔵 LEFT SIDE */}
        <div className="col-12 col-lg-8">
          <div className="card p-3 shadow-sm">

            <h5 className="mb-3">Product List</h5>

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div>
                <strong>3280</strong> Items
                <span className="bg-success-subtle text-success p-1 mx-1 rounded-1">
                  <i className="fa-solid fa-arrow-trend-up"></i> 54%
                </span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <span className="text-primary" style={{ cursor: "pointer" }}>
                  See More
                </span>
                <i className="fas fa-search"></i>
                <i className="fas fa-rotate"></i>
              </div>
            </div>

            {/* SEARCH */}
            <input className="form-control mb-3" placeholder="Search..." />

            {/* 💻 Desktop Table */}
            <div className="d-none d-md-block table-responsive">
              <table className="table align-middle">
                <thead className="text-muted">
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Revenue</th>
                    <th>Sales</th>
                    <th>Reviews</th>
                    <th>Views</th>
                    <th>Active</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((p, i) => (
                    <tr key={i}>
                      <td><input type="checkbox" /></td>

                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={p.image}
                            alt=""
                            width="40"
                            className="me-2"
                          />
                          <div>
                            <div className="fw-bold">{p.name}</div>
                            <small className="text-muted">In Stock</small>
                          </div>
                        </div>
                      </td>

                      <td>{p.revenue}</td>
                      <td>{p.sales}</td>
                      <td>{p.reviews}</td>
                      <td>{p.views}</td>

                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked={p.active}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 📱 Mobile Cards */}
            <div className="d-md-none">
              {products.map((p, i) => (
                <div key={i} className="card mb-3 p-2">

                  {/* Top */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={p.image}
                        alt=""
                        width="40"
                        className="me-2"
                      />
                      <div>
                        <div className="fw-bold">{p.name}</div>
                        <small className="text-muted">In Stock</small>
                      </div>
                    </div>

                    <input type="checkbox" />
                  </div>

                  {/* Bottom */}
                  <div className="row text-center mt-2">
                    <div className="col-3">
                      <small>Rev</small>
                      <div>{p.revenue}</div>
                    </div>
                    <div className="col-3">
                      <small>Sales</small>
                      <div>{p.sales}</div>
                    </div>
                    <div className="col-3">
                      <small>Reviews</small>
                      <div>{p.reviews}</div>
                    </div>
                    <div className="col-3">
                      <small>Views</small>
                      <div>{p.views}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 🔵 RIGHT SIDE */}
        <div className="col-12 col-lg-4">
          <div className="card p-3 shadow-sm h-100">

            <div className="d-flex justify-content-between mb-3">
              <h6>Conversion Rate</h6>
              <small className="text-muted">Last Year ▾</small>
            </div>

            <select className="form-select mb-3">
              <option>January 2023</option>
            </select>

            {conversion.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>

                <div className="progress mt-1" style={{ height: "6px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="text-center text-primary mt-2">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LastSection;