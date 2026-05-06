import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const API = "http://localhost:3001/users";

 
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    navigate("/users");
  };

  return (
    <div className="container mt-4">
      <h5 className="fw-bold mb-3">Edit User</h5>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />

        <input
          className="form-control mb-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <input
          className="form-control mb-3"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          placeholder="Role"
        />

        <button className="add-btn">Update</button>
      </form>
    </div>
  );
}