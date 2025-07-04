"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MotionWrapper } from "@/components/motion-wrapper"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import {
  BarChart3,
  TrendingUp,
  Calendar,
  Clock,
  DollarSign,
  BookOpen,
  Users,
  Award,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function Dashboard() {
  // Sample data - در پروژه واقعی از API دریافت می‌شود
  const attendanceData = {
    present: 85,
    absent: 15,
    totalSessions: 120,
    presentSessions: 102,
    absentSessions: 18,
  }

  const financialData = {
    totalFees: 12500000,
    paidAmount: 8750000,
    remainingAmount: 3750000,
    lastPayment: "۱۴۰۳/۰۸/۱۵",
    nextDueDate: "۱۴۰۳/۰۹/۳۰",
  }

  const academicData = {
    currentGPA: 17.85,
    totalUnits: 124,
    passedUnits: 98,
    currentSemesterUnits: 18,
    rank: 12,
    totalStudents: 156,
  }

  const upcomingEvents = [
    { title: "امتحان ریاضی", date: "۱۴۰۳/۰۹/۱۰", type: "exam" },
    { title: "تحویل پروژه", date: "۱۴۰۳/۰۹/۱۵", type: "project" },
    { title: "کلاس جبرانی", date: "۱۴۰۳/۰۹/۲۰", type: "class" },
  ]

  return (
    <StaggerContainer className="space-y-4 ">
      {/* Header */}
      <StaggerItem >
        <div className="flex items-center justify-between" >
          <div>
            <motion.h1
              className="text-2xl  font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              داشبورد دانشجویی
            </motion.h1>
            <motion.p
              className="text-muted-foreground mt-1 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              نمای کلی از وضعیت تحصیلی شما
            </motion.p>
          </div>
            <BarChart3 className="h-10 w-10 text-primary-900" />
        </div>
      </StaggerItem>

      {/* Quick Stats */}
      <StaggerItem>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "معدل کل",
              value: academicData.currentGPA,
              icon: Award,
              color: "from-blue-500 to-blue-600",
              delay: 0,
            },
            {
              title: "درصد حضور",
              value: `%${attendanceData.present}`,
              icon: CheckCircle,
              color: "from-green-500 to-green-600",
              delay: 0.1,
            },
            {
              title: "واحدهای گذرانده",
              value: academicData.passedUnits,
              icon: BookOpen,
              color: "from-purple-500 to-purple-600",
              delay: 0.2,
            },
            {
              title: "رتبه کلاسی",
              value: academicData.rank,
              icon: TrendingUp,
              color: "from-orange-500 to-orange-600",
              delay: 0.3,
            },
          ].map((stat, index) => (
            <MotionWrapper key={index} type="scale" delay={stat.delay}>
              <Card className="bg-gray-100 dark:bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group">
                <CardContent className="p-4 relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.title}</p>
                      <motion.p
                        className="text-xl font-bold"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: stat.delay + 0.2, type: "spring", bounce: 0.4 }}
                      >
                        {stat.value}
                      </motion.p>
                    </div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.2 }}>
                      <stat.icon className="h-6 w-6 text-primary-900" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </StaggerItem>

      {/* Main Dashboard Content */}
      <StaggerItem>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Attendance Chart */}
          <MotionWrapper type="slide" direction="right" className="lg:col-span-2">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-primary-900 text-white rounded-t-lg p-4">
                <CardTitle className="flex items-center text-sm">
                  <Calendar className="ml-2 h-4 w-4" />
                  گزارش حضور و غیاب
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">کل جلسات</span>
                    <motion.span
                      className="font-semibold text-sm"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {attendanceData.totalSessions}
                    </motion.span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-green-600">حاضر</span>
                      <span className="font-semibold text-green-600 text-sm">{attendanceData.presentSessions}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.7, duration: 1 }}
                    >
                      <Progress value={attendanceData.present} className="h-2" />
                    </motion.div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-red-600">غایب</span>
                      <span className="font-semibold text-red-600 text-sm">{attendanceData.absentSessions}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.9, duration: 1 }}
                    >
                      <Progress value={attendanceData.absent} className="h-2 bg-red-100" />
                    </motion.div>
                  </div>

                  <motion.div
                    className="grid grid-cols-2 gap-2 mt-4 pt-2 border-t"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <div className="text-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary-900 mx-auto mb-1" />
                      <p className="text-xs text-primary-800 dark:text-primary-200">وضعیت حضور</p>
                      <p className="font-bold text-primary-900 dark:text-primary-100 text-sm">عالی</p>
                    </div>
                    <div className="text-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <Clock className="h-5 w-5 text-primary-900 mx-auto mb-1" />
                      <p className="text-xs text-primary-800 dark:text-primary-200">آخرین حضور</p>
                      <p className="font-bold text-primary-900 dark:text-primary-100 text-sm">امروز</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* Upcoming Events */}
          <MotionWrapper type="slide" direction="left">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="bg-primary-900 text-white rounded-t-lg p-4">
                <CardTitle className="flex items-center text-sm">
                  <AlertCircle className="ml-2 h-4 w-4" />
                  رویدادهای پیش رو
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 space-x-reverse p-2 bg-gray-50 dark:bg-muted/50 rounded-lg hover:bg-gray-100 dark:hover:bg-muted transition-colors duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className={`p-1 rounded-full ${
                          event.type === "exam"
                            ? "bg-red-100 text-red-600"
                            : event.type === "project"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {event.type === "exam" ? (
                          <AlertCircle className="h-3 w-3" />
                        ) : event.type === "project" ? (
                          <BookOpen className="h-3 w-3" />
                        ) : (
                          <Users className="h-3 w-3" />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-semibold text-xs">{event.title}</p>
                        <p className="text-[0.6rem] text-muted-foreground">{event.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </StaggerItem>

      {/* Academic Progress */}
      <StaggerItem>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <MotionWrapper type="slide" direction="right">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="bg-primary-900 text-white rounded-t-lg p-4">
                <CardTitle className="flex items-center text-sm">
                  <BookOpen className="ml-2 h-4 w-4" />
                  پیشرفت تحصیلی
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">واحدهای گذرانده</span>
                    <motion.span
                      className="font-semibold text-sm"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {academicData.passedUnits} از {academicData.totalUnits}
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <Progress value={(academicData.passedUnits / academicData.totalUnits) * 100} className="h-2" />
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-2 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-center p-2 bg-gray-50 dark:bg-muted/50 rounded-lg">
                      <p className="text-[0.7rem] text-muted-foreground">ترم جاری</p>
                      <p className="font-bold text-sm">{academicData.currentSemesterUnits} واحد</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-muted/50 rounded-lg">
                      <p className="text-[0.7rem] text-muted-foreground">معدل</p>
                      <p className="font-bold text-sm">{academicData.currentGPA}</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper type="slide" direction="left">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-primary-900 text-white rounded-t-lg p-4">
                <CardTitle className="flex items-center text-sm">
                  <Users className="ml-2 h-4 w-4" />
                  رتبه‌بندی
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-primary-900 rounded-full flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span
                        className="text-xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        {academicData.rank}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-xs">
                        رتبه کلاسی
                      </Badge>
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <p className="text-xs text-muted-foreground">از مجموع {academicData.totalStudents} دانشجو</p>
                    <div className="flex items-center justify-center space-x-1 space-x-reverse">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      </motion.div>
                      <span className="text-xs text-green-600 font-semibold">بهبود ۳ رتبه‌ای</span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </StaggerItem>

            {/* Financial Overview */}
            <StaggerItem>
        <MotionWrapper type="scale" delay={0.3}>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-primary-900 text-white rounded-t-lg p-4">
              <CardTitle className="flex items-center text-sm">
                <DollarSign className="ml-2 h-4 w-4" />
                تراز مالی
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {[
                  { label: "کل شهریه", value: financialData.totalFees, delay: 0.1 },
                  { label: "پرداخت شده", value: financialData.paidAmount, delay: 0.2 },
                  { label: "باقی مانده", value: financialData.remainingAmount, delay: 0.3 },
                  { label: "سررسید بعدی", value: financialData.nextDueDate, delay: 0.4, isDate: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-2 bg-gray-50 dark:bg-muted/50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-[0.7rem] text-muted-foreground mb-1">{item.label}</p>
                    <motion.p
                      className="text-sm font-bold"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: item.delay + 0.2, type: "spring", bounce: 0.4 }}
                    >
                      {item.isDate ? item.value : `${item.value.toLocaleString()} ریال`}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">پیشرفت پرداخت</span>
                  <motion.span
                    className="text-xs font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    %{Math.round((financialData.paidAmount / financialData.totalFees) * 100)}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                >
                  <Progress value={(financialData.paidAmount / financialData.totalFees) * 100} className="h-2" />
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </StaggerItem>
    </StaggerContainer>
  )
}
