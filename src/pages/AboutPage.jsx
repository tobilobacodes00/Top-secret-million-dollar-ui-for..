"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Shield, Users, TrendingUp, Award, Target, Zap } from "lucide-react"
import PublicLayout from "../layout/PublicLayout"

// Animation variants from the homepage
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}


const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Robust Security & Auditability",
      description:
        "Broker credentials are encrypted, and all user actions are logged into immutable audit logs. We use JWTs for authentication with short TTLs for maximum security.",
    },
    {
      icon: Users,
      title: "Four Logical System Layers",
      description:
        "Our platform is built on a comprehensive architecture of four layers: Ingress & Signals, AI & Orchestration, Execution, and Presentation & Storage.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Signal Completion",
      description:
        "Our AI Completion Service receives incomplete signals and uses an LLM to validate and infer missing data, ensuring every trade is based on solid information.",
    },
    {
      icon: Award,
      title: "Intelligent Decision Engine",
      description:
        "The Decision Engine combines AI output with real-time market data to prepare optimal OrderIntents for maximum profitability and risk management.",
    },
    {
      icon: Target,
      title: "Real-Time Data & Caching",
      description:
        "We use Redis and Dragonfly to cache real-time positions and stream data, reducing latency and ensuring you have the latest information at your fingertips.",
    },
    {
      icon: Zap,
      title: "Comprehensive Execution",
      description:
        "Our platform uses robust broker adapters for major platforms like MT5 and Binance, allowing for seamless and reliable trade execution.",
    },
  ]

  const team = [
    {
      name: "Collins Dada",
      role: "C.T.O (Chief Technology Officer)",
      image: "/admin-avatar.png",
      bio: "Responsible for the complete architecture, deployment plan, and operational notes for the platform.",
    },
    {
      name: "Tobiloba Sulaimon",
      role: "Frontend lead & Co-Founder",
      image: "/admin-avatar.png",
      bio: "Specializing in crafting intuitive and responsive user interfaces for a seamless trading experience.",
    },
    {
      name: "Dr. Moh",
      role: "Head of Backend Research",
      image: "/admin-avatar.png",
      bio: "Leading the research and development of the system's core backend components.",
    },
    {
      name: "Graphics design lead",
      role: "Head of graphics department",
      image: "/admin-avatar.png",
      bio: "Driving the visual identity and user experience through compelling design.",
    },
  ]

  return (
    <PublicLayout>
      <div className="min-h-screen bg-black text-gray-300">
        {/* Hero Section */}
        <section className="pt-8 pb-20 px-4 bg-gradient-to-t from-gray-800 via-black to-black sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                About <span className="text-purple-500">Elite Trader</span>
              </h1>
              <p className="text-md text-gray-400 max-w-2xl mx-auto">
                We are a team of visionary developers, designers, and traders committed to revolutionizing the financial markets with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Our <span className="text-purple-500">Mission</span>
                </h2>
                <p className="text-md text-gray-400 mb-4">
                  Elite Trader is a complete automated trading and supervision platform. Our mission is to provide a detailed architectural solution, ensuring every action is secure, transparent, and fully auditable.
                </p>
                <p className="text-md text-gray-400 mb-6">
                  We aim to deliver a comprehensive system that includes all components from signal capture to final execution, providing a professional-grade tool for all users.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center bg-gray-800/50 p-4 rounded-lg border border-gray-700/50"
                  >
                    <div className="text-3xl font-bold text-purple-500 mb-1">2025</div>
                    <div className="text-gray-400 text-sm">Founded</div>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center bg-gray-800/50 p-4 rounded-lg border border-gray-700/50"
                  >
                    <div className="text-3xl font-bold text-purple-500 mb-1">K+</div>
                    <div className="text-gray-400 text-sm">Active Users</div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/Bitcoin P2P-amico.svg"
                  alt="Elite Trader mission visualization"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-40 left-120 w-96 h-96 bg-purple-500 rounded-full blur-4xl"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Core <span className="text-purple-400">Technology</span>
              </h2>
              <p className="text-md text-gray-300 max-w-2xl mx-auto">
                We believe in a transparent and robust system. Here's a look at the innovative technology that powers our platform.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {features.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="text-center bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Meet Our <span className="text-purple-500">Expert Team</span>
              </h2>
              <p className="text-md text-gray-400 max-w-2xl mx-auto">
                We are a team of visionary developers, designers, and traders committed to revolutionizing the financial markets with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="text-center p-4 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/80 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-purple-600/50"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  )
}

export default AboutPage