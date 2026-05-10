export const stats = [
  { value: "1,200+", label: "Students" },
  { value: "60+", label: "Faculty" },
  { value: "25+", label: "Years of Excellence" },
  { value: "100%", label: "Board Results" },
];

export const facilities = [
  { title: "Smart Classrooms", desc: "Interactive panels and immersive learning environments.", icon: "Sparkles" },
  { title: "Science Labs", desc: "Physics, chemistry & biology labs equipped to CBSE standards.", icon: "FlaskConical" },
  { title: "Computer Lab", desc: "Modern computing lab with high-speed internet for every student.", icon: "Laptop" },
  { title: "Library", desc: "Curated collection of 10,000+ titles, journals and digital resources.", icon: "BookOpen" },
  { title: "Sports Complex", desc: "Football, cricket, basketball, indoor games and athletics track.", icon: "Trophy" },
  { title: "Transport", desc: "GPS-enabled bus fleet covering 30+ routes safely.", icon: "Bus" },
  { title: "Cafeteria", desc: "Hygienic meals supervised by an in-house nutritionist.", icon: "UtensilsCrossed" },
  { title: "Medical Care", desc: "On-campus clinic with qualified medical staff.", icon: "HeartPulse" },
];

export const academics = [
  { stage: "Pre-Primary", grades: "Nursery – KG", note: "Play-based learning, motor skills, phonics" },
  { stage: "Primary", grades: "Class I – V", note: "Concept-led curriculum, language fluency" },
  { stage: "Middle School", grades: "Class VI – VIII", note: "STEM, arts, character formation" },
  { stage: "Secondary", grades: "Class IX – X", note: "CBSE preparation, life skills, leadership" },
];

export const faculty = [
  { name: "Fr. Joseph Tirkey", role: "Principal", initials: "JT" },
  { name: "Sr. Anita D'Souza", role: "Vice Principal", initials: "AD" },
  { name: "Mr. Rajiv Mahato", role: "Academic Head", initials: "RM" },
  { name: "Ms. Priya Hembrom", role: "Mathematics", initials: "PH" },
  { name: "Mr. Sunil Besra", role: "Science", initials: "SB" },
  { name: "Ms. Neelam Soren", role: "English", initials: "NS" },
  { name: "Mr. Akhil Murmu", role: "Social Studies", initials: "AM" },
  { name: "Ms. Rita Lakra", role: "Hindi", initials: "RL" },
];

export const news = [
  { date: "Aug 15, 2026", tag: "Event", title: "79th Independence Day Celebrated with Cultural Splendour", excerpt: "Patriotic performances, flag hoisting and a tribute to freedom fighters." },
  { date: "Jul 02, 2026", tag: "Academic", title: "Class X Board Toppers Felicitated", excerpt: "Students achieved an outstanding 100% pass percentage with 12 distinctions." },
  { date: "Jun 18, 2026", tag: "Sports", title: "Inter-School Football Championship Won", excerpt: "SJS lifted the district trophy after a thrilling 3-1 final." },
  { date: "May 25, 2026", tag: "Notice", title: "Admissions Open for Academic Year 2026-27", excerpt: "Limited seats. Online registration now live." },
];

/** Campus calendar — used on News & Events */
export const upcomingEvents = [
  { date: "May 18, 2026", title: "Inter-House Debate Finals", time: "10:00 AM", location: "Auditorium", tag: "Academic" },
  { date: "Jun 05, 2026", title: "Summer Adventure Camp", time: "Full day", location: "School Campus", tag: "Co-curricular" },
  { date: "Jun 21, 2026", title: "International Yoga Day", time: "7:00 AM", location: "Sports Ground", tag: "Wellness" },
  { date: "Jul 15, 2026", title: "Science Exhibition Open House", time: "9:00 AM", location: "Science Block", tag: "Academic" },
];

export const testimonials = [
  { name: "Mrs. Pratima Soren", role: "Parent, Class VIII", quote: "SJS does not just teach — it shapes character. My child has grown in confidence, discipline and curiosity." },
  { name: "Aarav Kumar", role: "Class X Topper", quote: "The teachers genuinely care. The labs and library made learning feel like discovery, not pressure." },
  { name: "Dr. R. Mishra", role: "Visiting Faculty", quote: "Among the most well-administered schools in the region — values, infrastructure and academics in balance." },
];

export const notices = [
  { date: "May 02, 2026", title: "Reopening of School after Summer Vacation", category: "General" },
  { date: "Apr 21, 2026", title: "Parent–Teacher Meeting for Class VI–X", category: "Meeting" },
  { date: "Apr 10, 2026", title: "Unit Test 1 Schedule Released", category: "Exam" },
  { date: "Mar 28, 2026", title: "Annual Report Card Distribution", category: "Result" },
  { date: "Mar 14, 2026", title: "Holi Holiday Notice", category: "Holiday" },
];

export const achievements = [
  { year: "2026", title: "100% Board Pass Percentage", desc: "Class X CBSE results with 12 distinctions." },
  { year: "2025", title: "District Football Champions", desc: "Under-14 boys lifted the district trophy." },
  { year: "2025", title: "State Science Olympiad Gold", desc: "Three students bagged top ranks." },
  { year: "2024", title: "Best Catholic School Award", desc: "Diocesan recognition for academic excellence." },
];

export const galleryItems = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: ["Independence Day", "Annual Sports", "Cultural Day", "Science Fair", "Graduation", "Field Trip"][i % 6],
  category: ["events", "sports", "culture", "academics", "students", "campus"][i % 6],
  // Different gradient placeholders ready for real photos
  gradient: [
    "linear-gradient(135deg, oklch(0.45 0.15 265), oklch(0.7 0.14 80))",
    "linear-gradient(135deg, oklch(0.55 0.16 220), oklch(0.78 0.14 82))",
    "linear-gradient(135deg, oklch(0.4 0.15 280), oklch(0.75 0.16 30))",
    "linear-gradient(135deg, oklch(0.5 0.18 160), oklch(0.7 0.14 80))",
    "linear-gradient(135deg, oklch(0.35 0.12 265), oklch(0.6 0.16 350))",
    "linear-gradient(135deg, oklch(0.55 0.18 240), oklch(0.78 0.14 82))",
  ][i % 6],
  span: [1, 2, 1, 1, 2, 1, 1, 1, 2][i % 9],
}));

export const faqs = [
  { q: "Is SJS Charkapathar a CBSE-affiliated school?", a: "Yes, SJS follows the CBSE curriculum and prepares students for board examinations." },
  { q: "What is the medium of instruction?", a: "English is the medium of instruction across all classes." },
  { q: "When do admissions open?", a: "Admissions for the next academic year typically open in November and close by February." },
  { q: "Do you offer transportation?", a: "Yes, we operate a GPS-enabled school bus fleet across 30+ routes." },
  { q: "Are scholarships available?", a: "Merit and need-based scholarships are available — please contact the admissions office." },
];

export const careers = [
  { role: "PGT Mathematics", type: "Full-time", location: "Charkapathar" },
  { role: "TGT Science", type: "Full-time", location: "Charkapathar" },
  { role: "Primary Teacher (English)", type: "Full-time", location: "Charkapathar" },
  { role: "Sports Coordinator", type: "Full-time", location: "Charkapathar" },
];

// Dashboard mock data
export const studentAttendance = [
  { month: "Jan", present: 22, total: 24 },
  { month: "Feb", present: 20, total: 22 },
  { month: "Mar", present: 24, total: 25 },
  { month: "Apr", present: 21, total: 23 },
  { month: "May", present: 23, total: 24 },
  { month: "Jun", present: 22, total: 24 },
];

export const subjects = [
  { name: "Mathematics", marks: 92, grade: "A+" },
  { name: "Science", marks: 88, grade: "A" },
  { name: "English", marks: 90, grade: "A+" },
  { name: "Social Studies", marks: 85, grade: "A" },
  { name: "Hindi", marks: 82, grade: "A" },
  { name: "Computer", marks: 95, grade: "A+" },
];

export const homework = [
  { subject: "Mathematics", title: "Linear Equations — Worksheet 4", due: "Tomorrow", status: "pending" },
  { subject: "Science", title: "Lab Report — Photosynthesis", due: "In 3 days", status: "pending" },
  { subject: "English", title: "Essay: My Role Model", due: "Submitted", status: "done" },
  { subject: "Computer", title: "HTML Basics — Practice", due: "Submitted", status: "done" },
];

export const timetable = [
  { time: "08:00", mon: "Math", tue: "Sci", wed: "Eng", thu: "SST", fri: "Math", sat: "Comp" },
  { time: "08:50", mon: "Eng", tue: "Math", wed: "Hin", thu: "Sci", fri: "Eng", sat: "Sports" },
  { time: "09:40", mon: "Sci", tue: "Eng", wed: "Math", thu: "Hin", fri: "SST", sat: "Library" },
  { time: "10:30", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break", sat: "Break" },
  { time: "10:50", mon: "SST", tue: "Hin", wed: "Sci", thu: "Math", fri: "Comp", sat: "Art" },
  { time: "11:40", mon: "Hin", tue: "Comp", wed: "Sports", thu: "Eng", fri: "Sci", sat: "—" },
];
