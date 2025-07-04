import {
  BarChart3,
  Bell,
  User,
  GraduationCap,
  Calendar,
  Settings,
  BookOpen,
  Award,
  Clock,
  MapPin,
  DollarSign,
  MessageCircle,
} from "lucide-react"

export interface MenuItem {
  icon: any
  label: string
  href: string
  badge?: string | null
}

export const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "داشبورد", href: "/", badge: null },
  { icon: User, label: "اطلاعات دانشجو", href: "/student-info", badge: null },
  { icon: Bell, label: "اطلاعیه و تغییرات", href: "/notifications", badge: "3" },
  { icon: DollarSign, label: "امور مالی", href: "/financial", badge: null },
  { icon: BookOpen, label: "فرآیندهای سیستمی", href: "/processes", badge: null },
  { icon: Award, label: "کلاس‌های عملکرد", href: "/classes", badge: null },
  { icon: GraduationCap, label: "سوابق تحصیلی", href: "/academic", badge: null },
  { icon: Calendar, label: "حضور و غیاب", href: "/attendance", badge: null },
  { icon: Clock, label: "آموزش‌های آزاد", href: "/free-courses", badge: null },
  { icon: MessageCircle, label: "گفتگوی چت", href: "/chat", badge: "جدید" },
  { icon: MapPin, label: "اطلاعات تماس", href: "/contact", badge: null },
  { icon: Settings, label: "تنظیمات", href: "/settings", badge: null },
]

export const studentInfo = {
  id: "۹۳۱۲۰۱۲۴۷۰۵۰۴",
  code: "۲۵۸۱۴۶۴۰۷۰",
  name: "امیرعلی موسوی ",
  university: "آموزشکده فنی و حرفه ای پسران رشت",
  field: "مهندسی حرفه ای کامپیوتر نرم‌افزار",
  degree: "کاردانی",
  status: "فعال",
  semester: "۳۱",
  supervisor: "سیداحمد",
  birthDate: "۱۳۸۷/۰۷/۱۰",
  admissionDate: "۱۴۰۶/۰۶/۳۱",
  graduationStatus: "عادی",
  completionStatus: "درحال تحصیل",
  educationLevel: "رشت",
}
