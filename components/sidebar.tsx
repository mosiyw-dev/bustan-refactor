"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, ChevronLeft, Zap } from "lucide-react"
import { menuItems } from "@/config/sidebar"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      <motion.aside
        className={`${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 z-50 w-64 bg-card shadow-2xl transform transition-all duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 border-l border-border backdrop-blur-xl`}
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen || (typeof window !== "undefined" && window.innerWidth >= 768) ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="flex flex-col h-full pt-16 md:pt-0">
          {/* User Profile Section */}
          <motion.div
            className="p-4 border-b border-border bg-gradient-to-bl from-primary-50 to-transparent dark:from-primary-900/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <Avatar className="h-12 w-12 ring-2 ring-primary-500">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="bg-primary-900 text-white">س.ا</AvatarFallback>
                </Avatar>
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">امیرعلی موسوی </p>
                <p className="text-xs text-muted-foreground">دانشجوی کاردانی</p>
                <div className="flex items-center mt-1">
                  <Zap className="h-3 w-3 text-yellow-500 ml-1" />
                  <span className="text-xs text-yellow-600 dark:text-yellow-400">معدل: ۱۷.۸۵</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col pt-2 pb-4 overflow-y-auto">
            <nav className="mt-2 flex-1 px-2 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link href={item.href} onClick={() => setSidebarOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between h-11 text-sm transition-all duration-200 group ${
                        pathname === item.href
                          ? "bg-primary-900 text-white shadow-lg dark:bg-primary-800"
                          : "hover:bg-primary-50 hover:text-primary-900 dark:hover:bg-primary-900/20 dark:hover:text-primary-100"
                      }`}
                      asChild
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <div className="flex items-center">
                          <motion.div
                            animate={{
                              scale: pathname === item.href ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className="ml-3 h-4 w-4" />
                          </motion.div>
                          {item.label}
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          {item.badge && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 * index, type: "spring", bounce: 0.5 }}
                            >
                              <Badge
                                className={`text-xs px-1.5 py-0.5 ${
                                  item.badge === "جدید"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-red-500 hover:bg-red-600"
                                }`}
                              >
                                {item.badge}
                              </Badge>
                            </motion.div>
                          )}
                          <motion.div
                            animate={{
                              rotate: pathname === item.href ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronLeft className="h-3 w-3 opacity-50" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <motion.div
            className="flex-shrink-0 flex border-t border-border p-3 bg-gradient-to-t from-primary-50/50 to-transparent dark:from-primary-900/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 h-10 text-sm group"
              asChild
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <motion.div className="ml-2" whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                  <LogOut className="h-4 w-4" />
                </motion.div>
                خروج از سیستم
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
