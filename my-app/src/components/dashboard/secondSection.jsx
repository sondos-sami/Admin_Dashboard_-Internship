import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SecondSection() {
  // 🔹 Data
  const lineData = [
    { name: "Jan", total: 200, success: 150 },
    { name: "Feb", total: 300, success: 220 },
    { name: "Mar", total: 250, success: 180 },
    { name: "Apr", total: 400, success: 300 },
    { name: "May", total: 350, success: 280 },
    { name: "Jun", total: 500, success: 350 },
  ];

  const areaData = [
    { name: "Jan", sales: 30 },
    { name: "Feb", sales: 45 },
    { name: "Mar", sales: 60 },
    { name: "Apr", sales: 70 },
    { name: "May", sales: 80 },
    { name: "Jun", sales: 65 },
  ];

  const barData = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 250 },
    { name: "May", value: 180 },
    { name: "Jun", value: 220 },
  ];

  // 🔹 Heatmap
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 12 });

  const heatData = days.map((_, i) =>
    hours.map((_, j) => {
      const centerRow = days.length / 2;
      const centerCol = hours.length / 2;

      const distance = Math.sqrt(
        Math.pow(i - centerRow, 2) + Math.pow(j - centerCol, 2),
      );

      const maxDistance = Math.sqrt(
        Math.pow(centerRow, 2) + Math.pow(centerCol, 2),
      );

      // نحولها لقيمة بين 0 و 1
      return 1 - distance / maxDistance;
    }),
  );

  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-xl-8 col-lg-7 col-12">
          <div className="row g-4">
            <div className="col-md-6 col-12">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="fw-semibold">Transaction Activity</h6>
                  <small className="text-muted">Last Year</small>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis hide />

                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload) {
                          return (
                            <div
                              style={{
                                background: "#fff",
                                padding: "10px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                              }}
                            >
                              <p style={{ fontSize: 12, margin: 0 }}>{label}</p>
                              <p style={{ color: "#0d6efd", margin: 0 }}>
                                Total Transaction: {payload[0].value}
                              </p>
                              <p style={{ color: "#6c757d", margin: 0 }}>
                                Success Transaction: {payload[1].value}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                      cursor={{ stroke: "#ccc", strokeDasharray: "3 3" }}
                    />

                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="#0d6efd"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: "#0d6efd" }}
                    />

                    <Line
                      type="monotone"
                      dataKey="success"
                      stroke="#adb5bd"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

           <div className="col-md-6 col-12">
  <div className="card border-0 shadow-sm rounded-4 p-3">

    {/* 🔹 Header */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h6 className="fw-semibold mb-0">Sale Performance</h6>

      <div className="d-flex align-items-center gap-2">
        <span className="fw-bold">91.72%</span>
        <span className="text-success small">+11.01%</span>
        <small className="text-muted ms-2">Last Year</small>
      </div>
    </div>

    {/* 🔹 Chart */}
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart
        data={[
          { name: "Jan", sales: 40 },
          { name: "Feb", sales: 45 },
          { name: "Mar", sales: 50 },
          { name: "Apr", sales: 55 },
          { name: "May", sales: 70 },
          { name: "Jun", sales: 50 },
          { name: "Jul", sales: 40 },
          { name: "Aug", sales:42 },
          { name: "Sep", sales: 45 },
          { name: "Oct", sales: 55 },
          { name: "Nov", sales: 65 },
          { name: "Dec", sales: 70 },
        ]}
      >
        {/* 🔥 Gradient */}
        <defs>
          <linearGradient id="stepBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d6efd" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#0d6efd" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        {/* Axis */}
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis hide />

        {/* Tooltip */}
        <Tooltip cursor={{ stroke: "#ccc", strokeDasharray: "3 3" }} />

        {/* 🔥 Step Area */}
        <Area
          type="stepAfter"
          dataKey="sales"
          stroke="#0d6efd"
          strokeWidth={3}
          fill="url(#stepBlue)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>

  </div>
</div>

            <div className="col-md-6 col-12">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="fw-semibold mb-3">Orders By Time</h6>

                {days.map((day, i) => (
                  <div key={i} className="d-flex align-items-center mb-2">
                    <small className="text-muted me-2" style={{ width: 35 }}>
                      {day}
                    </small>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gap: "6px",
                        width: "100%",
                      }}
                    >
                      {heatData[i].map((val, j) => (
                        <div
                          key={j}
                          style={{
                            width: "100%",
                            aspectRatio: "1/1",
                            borderRadius: "3px",
                            backgroundColor: `rgba(13,110,253, ${val})`,
                            border: "1px solid #eee",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔹 Product Statistics */}
            <div className="col-md-6 col-12">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="fw-semibold mb-3">Product Statistics</h6>

                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barData} barSize={28}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis hide />
                    <Tooltip />

                    <Bar
                      dataKey="value"
                      fill="#0d6efd"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-xl-4 col-lg-5 col-12">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <div className="d-flex justify-content-between">
              <h6 className="fw-semibold">Schedule</h6>
              <small className="text-primary">See All</small>
            </div>

            <div className="text-center my-3">
              <small className="text-muted">January 2025</small>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold text-primary">Meetings</span>
              <span className="text-muted">Events</span>
              <span className="text-muted">Holiday</span>
            </div>

            <div className="bg-light rounded-4 p-3 mb-3">
              <span className="badge bg-primary mb-2">Product Design</span>
              <p className="fw-semibold mb-1">Meeting with Arthur Bell</p>
              <small className="text-muted">09:00 - 10:45 AM</small>
            </div>

            <div className="bg-light rounded-4 p-3 mb-3">
              <span className="badge bg-success mb-2">Marketing</span>
              <p className="fw-semibold mb-1">Meeting with Leslie Perez</p>
              <small className="text-muted">03:00 - 04:45 PM</small>
            </div>

            <div className="bg-light rounded-4 p-3">
              <span className="badge bg-danger mb-2">Brainstorming</span>
              <p className="fw-semibold mb-1">Meeting with Leslie Perez</p>
              <small className="text-muted">05:00 - 06:00 PM</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
