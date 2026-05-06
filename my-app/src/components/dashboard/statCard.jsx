function StatCard({ title, value, change, isPositive }) {
  return (
    <div className="card p-3 w-100 h-100">
      <div className="d-flex justify-content-between">
        <h6>{title}</h6>
        <span
          className={`badge ${
            isPositive ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"
          }`}
        >
          {change}
        </span>
      </div>

      <h4 className="my-2">${value}</h4>

      <p className="text-muted mb-0">Lorem ipsum dolor sit</p>
    </div>
  );
}

export default StatCard;