import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-1 fw-bold text-primary">404</h1>

      <h4 className="mb-3">Page Not Found</h4>

      <p className="text-muted mb-4">
        The page you are looking for doesn't exist or was removed.
      </p>

      <Link to="/" className="btn btn-primary px-4">
        Go Back Home
      </Link>
    </div>
  );
}