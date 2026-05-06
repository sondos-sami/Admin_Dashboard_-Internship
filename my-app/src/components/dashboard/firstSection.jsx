import StatCard from "./statCard";
import bgImage from "../../assets/bg.png";

function FirstSection() {
  const stats = [
    {
      title: "Gross Revenue",
      value: "2,480.32",
      change: "+4.35%",
      isPositive: true,
    },
    {
      title: "Avg. Order Value",
      value: "320.21",
      change: "-1.35%",
      isPositive: false,
    },
    {
      title: "Total Orders",
      value: "1,899.49",
      change: "+4.35%",
      isPositive: true,
    },
  ];

  return (
    <div className="mt-4">
      <div className="row g-3">

        {/* 🔵 First Card */}
        <div className="col-12 col-sm-6 col-lg-3 d-flex">
          <div
            className="card text-white p-3 w-100 h-100 d-flex justify-content-between"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
            }}
          >
            <h6>
              Sharpen your Skill with <br /> Professional Online
            </h6>

            <button className="btn btn-dark btn-sm align-self-start">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* 🔵 Stat Cards */}
        {stats.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
            <StatCard {...item} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default FirstSection;