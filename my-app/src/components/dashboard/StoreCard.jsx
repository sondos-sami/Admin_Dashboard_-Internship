 export default function StoreCard({ name, sales, members, avatars, extra }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3 d-flex">
      <div className="card p-3 shadow-sm rounded-4 w-100 h-100">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-start">
          <h6 className="fw-bold mb-0">{name}</h6>

          <small className="text-primary" style={{ cursor: "pointer" }}>
            <span className="d-none d-sm-inline">See More</span>
            <i className="fa-solid fa-arrow-right ms-1"></i>
          </small>
        </div>

        {/* BODY */}
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">

          {/* LEFT */}
          <div>
            <p className="mb-1 text-muted">
              Performance Sales - <strong>{sales}</strong>
            </p>
            <small className="text-muted">
              {members} Active Members
            </small>
          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center mt-2 mt-sm-0">

            {/* avatars */}
            <div className="d-flex">
              {avatars.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="user"
                  className="rounded-circle border border-white"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: index === 0 ? "0" : "-10px",
                  }}
                />
              ))}
            </div>

            {/* extra */}
            <span className="ms-2 fw-bold text-muted">
              {extra}
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}