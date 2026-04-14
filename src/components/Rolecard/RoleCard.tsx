import { GraduationCap, Users, Shield } from "lucide-react";
import "./RoleCard.css";

interface RoleCardProps {
  title: "Student" | "Coordinator" | "Administrator";
  description: string;
  href: string;
}

export default function RoleCard({ title, description, href }: RoleCardProps) {
  const icons = {
    Student: <GraduationCap size={24} />,
    Coordinator: <Users size={24} />,
    Administrator: <Shield size={24} />,
  };

  return (
    <div className="role-card">
      
      {/* ICON */}
      <div className="role-icon">
        {icons[title]}
      </div>

      {/* TITLE */}
      <h3 className="role-title">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="role-desc">
        {description}
      </p>

      {/* LINK */}
      <a href={href} className="role-link">
        Login as {title} <span>→</span>
      </a>

    </div>
  );
}