import React, { useState, useEffect } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    voterId: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Initialize reCAPTCHA
  useEffect(() => {
    const initializeRecaptcha = () => {
      try {
        // Clear any existing reCAPTCHA
        if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
        }

        console.log("🔄 Initializing reCAPTCHA...");

        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("✅ reCAPTCHA solved automatically", response);
              setRecaptchaReady(true);
            },
            "expired-callback": () => {
              console.log("❌ reCAPTCHA expired");
              setRecaptchaReady(false);
              initializeRecaptcha(); // Reinitialize
            },
            "error-callback": () => {
              console.log("❌ reCAPTCHA error");
              setRecaptchaReady(false);
            }
          },
          auth
        );

        // Render reCAPTCHA
        window.recaptchaVerifier.render().then((widgetId) => {
          console.log("✅ reCAPTCHA rendered with widget ID:", widgetId);
          setRecaptchaReady(true);
        }).catch(error => {
          console.error("❌ reCAPTCHA render failed:", error);
          setRecaptchaReady(false);
        });

      } catch (error) {
        console.error("❌ reCAPTCHA initialization error:", error);
        setRecaptchaReady(false);
      }
    };

    initializeRecaptcha();

    // Cleanup on component unmount
    return () => {
      if (window.recaptchaVerifier) {
        console.log("🧹 Cleaning up reCAPTCHA...");
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  // Load form data from localStorage if exists (for recovery)
  useEffect(() => {
    const savedForm = localStorage.getItem('registrationForm');
    if (savedForm) {
      try {
        const parsedForm = JSON.parse(savedForm);
        setForm(parsedForm);
        console.log("📥 Loaded saved form data from localStorage");
      } catch (error) {
        console.error("❌ Error loading saved form data:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setForm(prevForm => {
      const updatedForm = { ...prevForm, [name]: newValue };
      
      // Auto-save form data to localStorage
      try {
        localStorage.setItem('registrationForm', JSON.stringify(updatedForm));
      } catch (error) {
        console.error("❌ Error saving form data:", error);
      }
      
      return updatedForm;
    });
    
    setError(""); // Clear error when user types
  };

  const validateForm = () => {
    if (!form.fullName?.trim()) {
      return "Full Name is required";
    }
    if (!form.voterId?.trim()) {
      return "Voter ID is required";
    }
    if (!form.mobile?.trim()) {
      return "Mobile number is required";
    }
    if (!/^\d{10}$/.test(form.mobile)) {
      return "Please enter a valid 10-digit mobile number";
    }
    if (!form.password) {
      return "Password is required";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (form.password !== form.confirmPassword) {
      return "Passwords do not match";
    }
    if (!form.agree) {
      return "Please agree to the terms and conditions";
    }
    return null; // No errors
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log("🔄 Starting registration process...");

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    // Check reCAPTCHA
    if (!window.recaptchaVerifier || !recaptchaReady) {
      setError("Security verification is not ready. Please wait a moment and try again.");
      setLoading(false);
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = `+91${form.mobile}`;

      console.log("📞 Sending OTP to:", phoneNumber);
      console.log("📋 Form data:", { ...form, password: "***" }); // Hide password in logs

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      // ✅ Store confirmation result properly for OTP verification
      window.confirmationResult = confirmationResult;
      console.log("✅ OTP sent successfully!");
      console.log("🔑 Verification ID:", confirmationResult.verificationId);

      // ✅ Store form data in localStorage as backup for OTP page
      localStorage.setItem('registrationForm', JSON.stringify(form));
      localStorage.setItem('otpVerificationId', confirmationResult.verificationId);
      
      console.log("💾 Form data saved to localStorage");

      alert("✅ OTP sent successfully! Please check your phone for the verification code.");
      
      // Navigate to OTP page with form data
      navigate("/otp", { state: { form } });

    } catch (err) {
      console.error("❌ OTP sending failed:", err);
      
      // Reset reCAPTCHA on error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        setRecaptchaReady(false);
      }

      // Specific error handling
      if (err.code === 'auth/invalid-phone-number') {
        setError("Invalid phone number format. Please use a valid 10-digit Indian number.");
      } else if (err.code === 'auth/quota-exceeded') {
        setError("OTP quota exceeded. Please try again later.");
      } else if (err.code === 'auth/too-many-requests') {
        setError("Too many attempts. Please try again later.");
      } else if (err.code === 'auth/captcha-check-failed') {
        setError("Security verification failed. Please refresh the page and try again.");
      } else if (err.code === 'auth/operation-not-allowed') {
        setError("Phone authentication is not enabled. Please contact support.");
      } else {
        setError(`Failed to send OTP: ${err.message || "Please try again."}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const clearSavedData = () => {
    localStorage.removeItem('registrationForm');
    localStorage.removeItem('otpVerificationId');
    setForm({
      fullName: "",
      voterId: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      agree: false,
    });
    setError("");
    console.log("🗑️ Cleared all saved form data");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Voter Registration
          </h2>
          <p className="text-gray-600">
            Create your account to participate in elections
          </p>
        </div>

        {/* Debug Info - Remove in production */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-700">
              reCAPTCHA: {recaptchaReady ? "✅ Ready" : "🔄 Loading"}
            </span>
            <button
              onClick={clearSavedData}
              className="text-red-600 hover:text-red-800 text-xs"
            >
              Clear Data
            </button>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          {/* Voter ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voter ID *
            </label>
            <input
              name="voterId"
              value={form.voterId}
              onChange={handleChange}
              placeholder="Enter your voter ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <div className="flex items-center">
              <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg px-3 py-3 text-gray-600">
                +91
              </span>
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
                className="flex-1 border border-gray-300 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                maxLength={10}
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              We'll send an OTP to verify your number
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password (min. 6 characters)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              minLength={6}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 text-blue-600 focus:ring-blue-500"
              required
            />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <button type="button" className="text-blue-600 hover:underline">
                Terms and Conditions
              </button>{" "}
              and{" "}
              <button type="button" className="text-blue-600 hover:underline">
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-shake">
              <div className="flex items-center">
                <div className="text-red-500 mr-2">⚠️</div>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Hidden reCAPTCHA container */}
          <div id="recaptcha-container" className="hidden"></div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !recaptchaReady}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              loading || !recaptchaReady
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
            } text-white shadow-lg`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending OTP...
              </div>
            ) : (
              "Register & Send OTP"
            )}
          </button>

          {/* Login Redirect */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-blue-600 font-semibold hover:underline transition"
              >
                Login here
              </button>
            </p>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 text-sm mb-2">
            📱 OTP Information
          </h4>
          <ul className="text-xs text-green-700 space-y-1">
            <li>• OTP will be sent to your mobile via SMS</li>
            <li>• Keep your phone nearby during registration</li>
            <li>• OTP is valid for 2 minutes</li>
            <li>• Test numbers use OTP: <strong>123456</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;