"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, User, Check, ChevronRight } from "lucide-react"

// Animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

// Animation variants for child elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const SignupPage = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [passwordValidations, setPasswordValidations] = useState({
    hasMinLength: false,
    hasUppercase: false,
    hasNumber: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === "password") {
      validatePassword(value)
    }
  }

  const validatePassword = (password) => {
    setPasswordValidations({
      hasMinLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
    })
  }

  const isPasswordValid = Object.values(passwordValidations).every(Boolean)
  const isFormValid = formData.name && formData.email && isPasswordValid

  const handleNextStep = (e) => {
    e.preventDefault()
    if (!isFormValid) {
      // In a real application, this would be a user-friendly modal or inline error message
      console.error("Please fill out all fields correctly.")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1500)
  }

  // New animation variants for the dots
  const dotContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const dotVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-950 via-gray-950 to-black" />

      <div className="relative z-10 w-full max-w-5xl lg:grid lg:grid-cols-2 gap-8 items-stretch rounded-3xl p-4 md:p-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="h-full flex flex-col justify-center w-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl shadow-purple-900/40 p-6 sm:p-8"
        >
          {step === 1 && (
            <motion.div variants={itemVariants}>
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-purple-600 mb-1">Elite Trader</h1>
                <p className="text-sm text-gray-300">Join Us Today</p>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                <button className="flex items-center justify-center w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.5 12.001c0-.785-.069-1.528-.19-2.24h-10.31v4.136h5.811c-.24 1.353-.96 2.493-2.071 3.26v2.684h3.457c2.023-1.874 3.197-4.636 3.197-7.84z" />
                    <path fill="#34A853" d="M12.001 22.5c2.972 0 5.46-1.026 7.28-2.775l-3.457-2.684c-.958.636-2.19 1.018-3.823 1.018-2.956 0-5.45-1.986-6.338-4.664H2.031v2.757C3.966 20.311 7.683 22.5 12.001 22.5z" />
                    <path fill="#FBBC04" d="M5.663 13.918c-.247-.732-.387-1.503-.387-2.298s.14-1.566.387-2.298V6.523H2.031a9.982 9.982 0 00-.001 9.497l3.633-2.102z" />
                    <path fill="#EA4335" d="M12.001 5.378c1.62.003 3.06.56 4.195 1.636l3.06-2.915C17.464 2.21 14.976 1 12.001 1c-4.318 0-8.036 2.189-10.035 5.523l3.633 2.102c.888-2.678 3.382-4.664 6.338-4.664z" />
                  </svg>
                  <span className="text-white text-sm">Sign up with Google</span>
                </button>
                <button className="flex items-center justify-center w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" width="24" height="24" role="img" aria-label="Apple logo">
                    <path fill="currentColor" d="M788 777c-15 35-32 66-51 94-27 38-49 64-65 77-26 24-53 36-82 37-21 0-46-6-75-18-30-12-57-18-82-18-26 0-54 6-84 18-31 12-56 18-76 18-29 1-57-11-84-35-18-16-41-44-68-82-29-41-52-89-69-146-19-61-29-119-29-173 0-64 14-119 41-164 21-36 49-65 85-86 36-21 74-32 115-33 23 0 52 7 86 21 33 14 54 21 62 21 7 0 29-8 65-23 35-12 64-17 86-17 64 5 112 31 145 80-57 35-85 85-85 147 0 49 18 90 53 123 16 16 34 29 55 38-5 15-10 29-15 42zM561 0c0 48-17 92-50 131-40 47-89 74-143 70-1-6-2-13-2-20 0-46 20-95 55-136 17-19 39-35 67-48 27-13 54-20 81-22 1 9 1 17 1 25z"/>
                </svg>
                  <span className="text-white text-sm">Sign up with Apple</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="text-xs uppercase tracking-wide">or with email</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleNextStep}>
                <div className="space-y-4 mb-6">
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-10 py-3 bg-white/5 rounded-full border border-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-10 py-3 bg-white/5 rounded-full border border-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-10 py-3 bg-white/5 rounded-full border border-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Password Validation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        passwordValidations.hasMinLength ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></span>
                    <span className="text-gray-400 text-xs">8+ chars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        passwordValidations.hasUppercase ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></span>
                    <span className="text-gray-400 text-xs">A-Z</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        passwordValidations.hasNumber ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></span>
                    <span className="text-gray-400 text-xs">0-9</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                    !isFormValid || isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {isLoading ? (
                    <motion.div
                      className="flex items-center justify-center relative"
                      initial={{
                        boxShadow: '0 0 0px rgba(139, 92, 246, 0.4)'
                      }}
                      animate={{
                        boxShadow: ['0 0 0px rgba(139, 92, 246, 0.4)', '0 0 15px rgba(139, 92, 246, 0.8)', '0 0 0px rgba(139, 92, 246, 0.4)']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="flex items-center"
                        variants={dotContainerVariants}
                        initial="start"
                        animate="end"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-white mx-1"
                          variants={dotVariants}
                          transition={{
                            duration: 0.5,
                            yoyo: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-white mx-1"
                          variants={dotVariants}
                          transition={{
                            duration: 0.5,
                            yoyo: Infinity,
                            ease: "easeInOut",
                            delay: 0.15,
                          }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-white mx-1"
                          variants={dotVariants}
                          transition={{
                            duration: 0.5,
                            yoyo: Infinity,
                            ease: "easeInOut",
                            delay: 0.3,
                          }}
                        />
                      </motion.div>
                      <span className="ml-2">Creating...</span>
                    </motion.div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Check className="w-16 h-16 text-green-500" />
                </motion.div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome, {formData.name.split(" ")[0]}!</h2>
              <p className="text-gray-300 text-sm mb-6">
                Your account is ready. Let's start your journey to becoming an Elite Trader.
              </p>
              <button
                onClick={() => (window.location.href = "/dashboard")}
                className="w-full flex items-center justify-center py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 shadow-sm hover:shadow-purple-500/50 transition-all duration-300"
              >
                Go to Dashboard
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          )}

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-6 text-center text-gray-400">
            {step === 1 ? (
              <span className="text-sm flex justify-center gap-2">
                Have an account?{" "}
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  Sign in
                </button>
                |
                <button
                  onClick={() => (window.location.href = "/")}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  Back to Home
                </button>
              </span>
            ) : (
              <span className="text-xs">
              </span>
            )}
          </motion.div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="h-full flex flex-col justify-center hidden lg:block w-full p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl shadow-purple-900/40"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              AI-Powered Trading, Unlocked for Everyone
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
              Elite Trader democratizes access to professional-grade tools. Our proprietary AI analyzes market trends
              and executes trades automatically, giving you the edge you need to succeed.
            </p>
            <div className="flex justify-center items-center my-8">
              <img
                src="https://placehold.co/400x250/333333/FFFFFF?text=Trading+Dashboard"
                alt="Trading Dashboard Mockup"
                className="rounded-lg border border-gray-700/50 shadow-lg"
              />
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignupPage