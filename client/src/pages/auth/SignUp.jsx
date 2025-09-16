import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../../stores/getAuthStore";

const AuthPage = () => {
  const [state, setState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const { register, login, loading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError(); // Clear previous errors

    // Basic validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (state === "register" && !formData.name) {
      toast.error("Please enter your name");
      return;
    }

    try {
      let result;
      if (state === "login") {
        result = await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        result = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      // Error is already handled by the store and will show toast
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleState = () => {
    setState(state === "login" ? "register" : "login");
    clearError(); // Clear errors when switching states
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#8400DD] px-8 py-6">
            <h2 className="text-2xl font-bold text-white text-center">
              {state === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-purple-200 text-center mt-1">
              {state === "login" ? "Sign in to continue" : "Join us today"}
            </p>
          </div>

          {/* Form Content */}
          <div className="px-8 py-6">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field (only for signup) */}
              {state === "register" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8400DD] focus:border-transparent transition-all duration-200"
                      required={state === "register"}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8400DD] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8400DD] focus:border-transparent transition-all duration-200"
                    required
                    minLength={state === "register" ? 6 : 1}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#8400DD] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {state === "register" && (
                  <p className="text-xs text-gray-500">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>

              {/* Forgot Password (only for login) */}
              {state === "login" && (
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-[#8400DD] hover:text-purple-800 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8400DD] hover:bg-purple-800 disabled:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 focus:ring-4 focus:ring-purple-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    {state === "login"
                      ? "Signing in..."
                      : "Creating account..."}
                  </>
                ) : (
                  <>
                    <span>
                      {state === "login" ? "Sign In" : "Create Account"}
                    </span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Toggle Action */}
            <div className="text-center">
              <p className="text-gray-600">
                {state === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={toggleState}
                  disabled={loading}
                  className="text-[#8400DD] hover:text-purple-800 font-semibold transition-colors disabled:text-purple-400 disabled:cursor-not-allowed"
                >
                  {state === "login" ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            By continuing, you agree to our{" "}
            <a href="#" className="text-[#8400DD] hover:text-purple-800">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#8400DD] hover:text-purple-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
