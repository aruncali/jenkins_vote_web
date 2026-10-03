import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VoteDone = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { party } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Vote Submitted!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Thank you for participating in the election.
        </p>
        {party && (
          <p className="text-xl font-semibold text-blue-600 mb-6">
            You voted for: <strong>{party}</strong>
          </p>
        )}
        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteDone;