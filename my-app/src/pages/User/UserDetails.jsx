import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../../api/usersApi";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(id);
      setUser(res.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      {/* Back */}
      <button
        className="export-btn mb-3"
        onClick={() => navigate(-1)}
      >
        <i className="fas fa-arrow-left me-2"></i> Back
      </button>

      <h5 className="fw-bold mb-4">User Details</h5>

      <div className="details-card">
        <div className="text-center mb-3">
          <div className="avatar">
            <i className="fas fa-user"></i>
          </div>
          <h6 className="mt-2 fw-semibold">{user.name}</h6>
          <span className="role-badge">{user.role}</span>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <div className="info-box">{user.email}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>ID</label>
            <div className="info-box">{user.id}</div>
          </div>
        </div>

        
      </div>
    </div>
  );
}