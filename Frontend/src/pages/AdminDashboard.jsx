import { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchUsers = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get(`/admin/users?page=${pageNumber}`);
      setUsers(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
      setPage(pageNumber);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleActivate = async (userId) => {
    if (!window.confirm("Activate this user?")) return;

    try {
      await api.put(`/admin/users/${userId}/activate`);
      setMessage("User activated successfully");
      fetchUsers(page);
    } catch (err) {
      setError(
        err.response?.data?.message || "Activation failed"
      );
    }
  };

  const handleDeactivate = async (userId) => {
    if (!window.confirm("Deactivate this user?")) return;

    try {
      await api.put(`/admin/users/${userId}/deactivate`);
      setMessage("User deactivated successfully");
      fetchUsers(page);
    } catch (err) {
      setError(
        err.response?.data?.message || "Deactivation failed"
      );
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>{u.fullName}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>{u.status}</td>
                  <td>
                    {u.status === "active" ? (
                      <button
                        onClick={() => handleDeactivate(u._id)}
                        className="danger"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => handleActivate(u._id)}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => fetchUsers(page - 1)}
            >
              Prev
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => fetchUsers(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
