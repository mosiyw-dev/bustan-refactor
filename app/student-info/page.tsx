"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionWrapper } from "@/components/motion-wrapper"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import { User, BookOpen, Calendar, GraduationCap, Activity, Star } from "lucide-react"
import { studentInfo } from "@/config/sidebar"

export default function StudentInfo() {
  return (
    <StaggerContainer className="space-y-6">
      {/* Welcome Section */}
      <StaggerItem>
        <Card className="bg-gradient-to-l from-primary-900 via-primary-800 to-primary-700 text-white border-0 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <motion.h2
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  خوش آمدید، {studentInfo.name}
                </motion.h2>
                <motion.p
                  className="text-primary-100 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  اطلاعات کامل دانشجویی شما
                </motion.p>
                <motion.div
                  className="flex items-center space-x-4 space-x-reverse"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Badge className="bg-white/20 text-white hover:bg-white/30">
                    <Activity className="w-3 h-3 ml-1" />
                    آنلاین
                  </Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30">
                    <Star className="w-3 h-3 ml-1" />
                    دانشجوی ممتاز
                  </Badge>
                </motion.div>
              </div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
              >
                <motion.div
                  className="bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(36, 80, 15, 0.3)",
                      "0 0 20px rgba(36, 80, 15, 0.6)",
                      "0 0 5px rgba(36, 80, 15, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <GraduationCap className="h-12 w-12" />
                </motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </StaggerItem>

      {/* Student Information */}
      <StaggerItem>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <MotionWrapper type="slide" direction="right" delay={0.2}>
            <Card className="shadow-md border-0 hover:shadow-lg transition-all duration-300 dark:bg-card">
              <CardHeader className="bg-gradient-to-l from-primary-900 to-primary-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-sm">
                  <User className="ml-2 h-4 w-4" />
                  اطلاعات دانشجویی
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">شماره دانشجویی</p>
                    <p className="font-semibold text-sm">{studentInfo.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">کد ملی</p>
                    <p className="font-semibold text-sm">{studentInfo.code}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">نام کامل</p>
                  <p className="font-semibold">{studentInfo.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">دانشکده</p>
                  <p className="font-semibold text-sm">{studentInfo.university}</p>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper type="slide" direction="left" delay={0.4}>
            <Card className="shadow-md border-0 hover:shadow-lg transition-all duration-300 dark:bg-card">
              <CardHeader className="bg-gradient-to-l from-primary-900 to-primary-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-sm">
                  <BookOpen className="ml-2 h-4 w-4" />
                  اطلاعات تحصیلی
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">رشته</p>
                  <p className="font-semibold text-sm">{studentInfo.field}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">مقطع</p>
                    <Badge
                      variant="secondary"
                      className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-primary-100 text-xs"
                    >
                      {studentInfo.degree}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">وضعیت</p>
                    <Badge className="bg-green-600 hover:bg-green-700 text-xs">{studentInfo.status}</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">ترم</p>
                    <p className="font-semibold text-sm">{studentInfo.semester}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">استاد راهنما</p>
                    <p className="font-semibold text-sm">{studentInfo.supervisor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </StaggerItem>

      {/* Additional Information */}
      <StaggerItem>
        <MotionWrapper type="scale" delay={0.6}>
          <Card className="shadow-md border-0 hover:shadow-lg transition-all duration-300 dark:bg-card">
            <CardHeader className="bg-gradient-to-l from-primary-900 to-primary-800 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-sm">
                <Calendar className="ml-2 h-4 w-4" />
                اطلاعات تکمیلی
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                  <p className="text-xs text-muted-foreground">تاریخ تولد</p>
                  <p className="font-semibold text-sm">{studentInfo.birthDate}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                  <p className="text-xs text-muted-foreground">تاریخ ثبت‌نام</p>
                  <p className="font-semibold text-sm">{studentInfo.admissionDate}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                  <p className="text-xs text-muted-foreground">وضعیت فارغ‌التحصیلی</p>
                  <Badge
                    variant="outline"
                    className="border-primary-500 text-primary-700 dark:border-primary-400 dark:text-primary-300 text-xs"
                  >
                    {studentInfo.graduationStatus}
                  </Badge>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </StaggerItem>

      {/* Footer Note */}
      <StaggerItem>
        <MotionWrapper type="bounce" delay={0.8}>
          <div className="text-center">
            <Card className="bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800">
              <CardContent className="p-3">
                <p className="text-primary-700 dark:text-primary-300 font-medium text-sm">دانشجوی گرامی</p>
                <p className="text-primary-600 dark:text-primary-400 text-xs mt-1">
                  درصورت وجود هرگونه مغایرت در اطلاعات فوق، مراتب را از طریق ثبت تیکت اعلام نمایید
                </p>
              </CardContent>
            </Card>
          </div>
        </MotionWrapper>
      </StaggerItem>
    </StaggerContainer>
  )
}
