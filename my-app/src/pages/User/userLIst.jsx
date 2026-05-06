import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../../api/usersApi";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      
    
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Users List</h5>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/users/add")}
        >
          <i className="fas fa-plus me-2"></i>
          <span className="d-none d-sm-inline">Add User</span>
        </button>
      </div>

   
      <div className="d-none d-md-block">
        <table className="table align-middle">
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td className="text-end">
                  <i
                    className="fas fa-eye me-3"
                    onClick={() => navigate(`/users/${user.id}`)}
                  ></i>

                  <i
                    className="fas fa-edit me-3"
                    onClick={() => navigate(`/users/edit/${user.id}`)}
                  ></i>

                  <i
                    className="fas fa-trash text-danger"
                    onClick={() => handleDelete(user.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      <div className="d-md-none">
        {users.map((user) => (
          <div key={user.id} className="card mb-3 p-3">
            
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">{user.name}</h6>
                <small className="text-muted">{user.email}</small>
              </div>

              <div className="d-flex gap-3">
                <i
                  className="fas fa-eye"
                  onClick={() => navigate(`/users/${user.id}`)}
                ></i>

                <i
                  className="fas fa-edit"
                  onClick={() => navigate(`/users/edit/${user.id}`)}
                ></i>

                <i
                  className="fas fa-trash text-danger"
                  onClick={() => handleDelete(user.id)}
                ></i>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}