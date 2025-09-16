"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Shield, Users, TrendingUp, Award, Target, Zap } from "lucide-react"
import PublicLayout from "../layout/PublicLayout"

// Smooth scroll animation variants
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
      title: "Bank-Level Security",
      description:
        "Your funds are protected by military-grade encryption, multi-factor authentication, and cold storage solutions.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team consists of seasoned traders, blockchain developers, and financial technology experts with decades of combined experience.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Our AI algorithms have consistently outperformed the market with an average monthly return of 23% for our users.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Winner of multiple fintech awards and recognized as the leading crypto trading platform by industry experts.",
    },
    {
      icon: Target,
      title: "Precision Trading",
      description:
        "Advanced algorithms analyze thousands of market indicators in real-time to execute precise, profitable trades.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Execute trades in milliseconds with our high-performance infrastructure and direct exchange connections.",
    },
  ]

  const team = [
    {
      name: "Contractor x",
      role: "CEO & Co-Founder",
      image: "/admin-avatar.png",
      bio: "...",
    },
    {
      name: "Tobiloba Sulaimon",
      role: "Frontend lead & Co-Founder",
      image: "/admin-avatar.png",
      bio: "Un-ethical genius on the rise",
    },
    {
      name: "Dr. Moh",
      role: "Head of Backend Research",
      image: "/admin-avatar.png",
      bio: "...",
    },
    {
      name: "Graphics design lead",
      role: "Head of graphics department",
      image: "/admin-avatar.png",
      bio: "...",
    },
  ]

  return (
    <PublicLayout>
        <div className="min-h-screen bg-gray-950 text-gray-300 overflow-hidden">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-purple-500">Elite Trader</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our <span className="text-purple-500">Mission</span>
              </h2>
              <p className="text-base text-gray-400 mb-4">
                Elite Trader was founded with a simple yet ambitious mission: to level the playing field in
                cryptocurrency trading by providing retail investors with the same sophisticated tools and strategies
                previously available only to institutional traders.
              </p>
              <p className="text-base text-gray-400 mb-6">
                We believe that everyone deserves access to professional-grade trading technology, comprehensive market
                analysis, and AI-powered strategies that can help maximize returns while minimizing risk in the volatile
                cryptocurrency markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: 0.4 }}
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
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-800/50 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-1">94K+</div>
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
                src="https://placehold.co/600x400/1D4ED8/FFFFFF?text=Wait+For+The+Visualization... +It's+coming+soon"
                alt="Elite Trader mission visualization"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Why Choose <span className="text-purple-500">Elite Trader</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep market expertise to deliver unparalleled trading experiences
              and consistent results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/80 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="relative p-6">
                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative">
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
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in trading, technology, and financial
              innovation.
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-4">
              Ready to Join the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-normal">
                Elite?
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light mb-6">
              Transform your trading with professional-grade tools and AI-powered strategies.
            </p>
            <div className="pt-2 flex items-center justify-center">
                <Link
                  to="/auth/register">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start Trading
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

    </PublicLayout>
  )
}

export default AboutPage