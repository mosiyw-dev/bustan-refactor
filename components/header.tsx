"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, GraduationCap, Clock, Search, Bell } from "lucide-react"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.header
      className="bg-gradient-to-l from-primary-900 via-primary-800 to-primary-700 shadow-xl border-b-2 border-primary-600 relative overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <AnimatePresence mode="wait">
                {sidebarOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <div className="flex items-center space-x-4 space-x-reverse">
              <motion.div
                className="bg-white/20 p-3 rounded-xl backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(255, 255, 255, 0.3)",
                    "0 0 20px rgba(255, 255, 255, 0.6)",
                    "0 0 5px rgba(255, 255, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <GraduationCap className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <motion.h1
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  دانشگاه ملی مهارت رشت
                </motion.h1>
                <motion.p
                  className="text-sm text-primary-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
               سامانه دانشجویان دانشگاه ملی مهارت
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            className="flex items-center space-x-4 space-x-reverse"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Live Clock */}
            <div className="hidden md:flex items-center space-x-2 space-x-reverse bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
              <Clock className="h-4 w-4 text-white" />
              <motion.span
                className="text-white text-sm font-mono"
                key={currentTime.toLocaleTimeString("fa-IR")}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentTime.toLocaleTimeString("fa-IR")}
              </motion.span>
            </div>

            {/* Search Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Search className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              className="bg-white/10 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
                <Bell className="h-4 w-4" />
                <motion.span
                  className="absolute -top-1 -left-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  3
                </motion.span>
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
