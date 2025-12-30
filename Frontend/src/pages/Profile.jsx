import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
      setEmail(user.email);
    }
  }, [user]);

  
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!fullName || !email) {
      setError("Full name and email are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.put("/users/profile", {
        fullName,
        email,
      });

      setMessage(res.data.message || "Profile updated");
    } catch (err) {
      setError(
        err.response?.data?.message || "Profile update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!currentPassword || !newPassword) {
      setError("Both password fields are required");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);
      const res = await api.put("/users/change-password", {
        currentPassword,
        newPassword,
      });

      setMessage(res.data.message || "Password changed");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Password change failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      {/* Profile Update */}
      <form onSubmit={handleProfileUpdate}>
        <h3>Update Profile</h3>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Save Changes
        </button>
      </form>

      <hr />

      {/* Password Change */}
      <form onSubmit={handlePasswordChange}>
        <h3>Change Password</h3>

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Change Password
        </button>
      </form>

      <hr />

      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Profile;
