import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation بسيط
    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }
    try {
      setLoading(true);
      setError("");

      console.log(form);

      const res = await axios.get(
        `http://localhost:3001/admin?email=${form.email.trim()}`,
      );

      console.log("RESULT:", res.data);

      if (res.data.length > 0) {
        const admin = res.data[0];

        // نتحقق من الباسورد يدويًا
        if (admin.password === form.password.trim()) {
          localStorage.setItem("admin", JSON.stringify(admin));
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("Invalid email or password");
      }

       

      
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
