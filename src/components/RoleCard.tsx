import { Link } from "react-router-dom";
import { GraduationCap, Users, Shield } from "lucide-react";

interface RoleCardProps {
  title: "Student" | "Coordinator" | "Administrator";
  description: string;
  href: string;
}

export default function RoleCard({ title, description, href }: RoleCardProps) {
  const icons = {
    Student: <GraduationCap size={24} />,
    Coordinator: <Users size={24} />,
    Administrator: <Shield size={24} />
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

      {/* CLICKABLE LINK */}
      <Link to={href} className="role-link">
        Login as {title} →
      </Link>

    </div>
  );
}