import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/usersApi";

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(user);
      navigate("/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h5 className="fw-bold mb-3">Add User</h5>

      <div className="details-card">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Role"
            value={user.role}
            onChange={(e) =>
              setUser({ ...user, role: e.target.value })
            }
          />

          <button className="add-btn">
            <i className="fas fa-plus me-2"></i> Create
          </button>
        </form>
      </div>
    </div>
  );
}