import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Vote = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [votedParty, setVotedParty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load user data from localStorage
  useEffect(() => {
    console.log("🔄 Loading user data...");
    
    try {
      const storedUser = localStorage.getItem("user");
      console.log("Stored user data:", storedUser);
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log("Parsed user:", user);
        setUserData(user);
        setVotedParty(user.votedParty || null);
      } else {
        console.log("❌ No user found in localStorage");
        setError("No user session found. Please login again.");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      console.error("❌ Error loading user data:", err);
      setError("Error loading user data. Please login again.");
      setTimeout(() => navigate("/login"), 2000);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  // Political parties list
  const parties = [
    { 
      id: "party1", 
      name: "Unity Party", 
      color: "bg-blue-500",
      symbol: "U"
    },
    { 
      id: "party2", 
      name: "Progressive Alliance", 
      color: "bg-green-500",
      symbol: "P"
    },
    { 
      id: "party3", 
      name: "National Front", 
      color: "bg-red-500",
      symbol: "N"
    },
  ];

  const handleVoteClick = (party) => {
    if (votedParty) {
      alert(`You have already voted for ${votedParty}`);
      return;
    }

    console.log("🗳️ Voting for party:", party.name);
    
    // For testing - simulate voting
    alert(`TEST MODE: You voted for ${party.name}\n\nIn production, this would trigger OTP verification.`);
    
    // Update local state
    setVotedParty(party.name);
    
    // Update localStorage
    const updatedUser = { ...userData, votedParty: party.name };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    
    // Show success message
    setTimeout(() => {
      navigate("/votedone", { state: { party: party.name } });
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading voting interface...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <div className="text-red-500 text-4xl mb-4">❌</div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // Main voting interface
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Cast Your Vote
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome, <span className="font-semibold text-blue-600">{userData?.fullName}</span>
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Voter ID: {userData?.voterId}
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Mobile: {userData?.mobile}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>

        {/* Already Voted Message */}
        {votedParty ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-green-500 text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Vote Submitted Successfully!
              </h2>
              <p className="text-lg text-green-700 mb-2">
                Thank you for participating in the democratic process.
              </p>
              <p className="text-xl font-semibold text-green-900 mb-6">
                You voted for: <span className="underline">{votedParty}</span>
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Back to Home
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Voting Interface */
          <div>
            {/* Instructions */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  🗳️ Voting Instructions
                </h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Click on your preferred party to cast your vote</li>
                  <li>• You can only vote once</li>
                  <li>• Your vote is anonymous and secure</li>
                  <li>• In production, OTP verification would be required</li>
                </ul>
              </div>
            </div>

            {/* Parties Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {parties.map((party) => (
                <div 
                  key={party.id} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 border-transparent hover:border-blue-300"
                >
                  {/* Party Symbol */}
                  <div className={`w-20 h-20 rounded-full ${party.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-md`}>
                    {party.symbol}
                  </div>
                  
                  {/* Party Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {party.name}
                  </h3>
                  
                  {/* Vote Button */}
                  <button
                    onClick={() => handleVoteClick(party)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
                  >
                    Vote for {party.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Testing Note */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <p className="text-yellow-800 text-sm">
                  <strong>🧪 TEST MODE:</strong> OTP verification is disabled. Click any party to simulate voting.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Debug Info - Remove in production */}
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-gray-700">
              🔍 Debug Information
            </summary>
            <pre className="mt-2 text-gray-600 overflow-auto text-xs">
              {JSON.stringify({
                userData,
                votedParty,
                hasUserData: !!userData,
                localStorageUser: localStorage.getItem("user")
              }, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Vote;