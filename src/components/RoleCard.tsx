import { GraduationCap, Users, Shield } from "lucide-react";

// 1. Properly type your props so TypeScript can help catch errors
interface RoleCardProps {
  title: "Student" | "Coordinator" | "Administrator"; // Restrict titles to these exactly
  description: string;
  href: string;
}

export default function RoleCard({ title, description, href }: RoleCardProps) {
  // 2. Map the icons based on the title
  const icons = {
    Student: <GraduationCap size={24} />,
    Coordinator: <Users size={24} />,
    Administrator: <Shield size={24} />
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
      
      {/* ICON */}
      <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-blue-600 mb-6">
        {icons[title]}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {title}
      </h3>

      {/* DESCRIPTION (flex-grow keeps buttons aligned at the bottom if text lengths vary) */}
      <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* LINK */}
      <a href={href} className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1.5">
        Login as {title} <span className="text-lg">→</span>
      </a>

    </div>
  );
}