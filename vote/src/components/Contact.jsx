import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
            <p className="text-blue-600 font-semibold mb-4">+91 9894717881</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Director</p>
              <p>Name: Arun</p>
              <p>Email: arun@tnevm.in</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Email Support</h3>
            <p className="text-blue-600 font-semibold mb-4">contact@tnevm.in</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Website Info Manager</p>
              <p>Name: Arun</p>
              <p>Email: arun@tnevm.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;