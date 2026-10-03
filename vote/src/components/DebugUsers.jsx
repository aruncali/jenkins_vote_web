// Create a new file: components/DebugUsers.jsx
import React, { useState, useEffect } from "react";

const DebugUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/debug-users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Users (Debug)</h2>
      <div className="grid gap-4">
        {users.map((user, index) => (
          <div key={index} className="border p-4 rounded">
            <p><strong>Mobile:</strong> {user.mobile}</p>
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Voter ID:</strong> {user.voterId}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebugUsers;