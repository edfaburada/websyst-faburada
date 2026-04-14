import { Link } from "react-router-dom";
import "./RoleCard.css";
import { GraduationCap, Users, Shield } from "lucide-react";

interface RoleCardProps {
  title: "Student" | "Coordinator" | "Administrator";
  description: string;
  href: string;
}

export default function RoleCard({ title, description, href }: RoleCardProps) {

  const icons = {
    Student: <GraduationCap size={26} />,
    Coordinator: <Users size={26} />,
    Administrator: <Shield size={26} />
  };

  return (
    <div className="role-card">

      <div className="role-icon">
        {icons[title]}
      </div>

      <h3 className="role-title">{title}</h3>

      <p className="role-desc">{description}</p>

      <Link to={href} className="role-link">
        Login as {title} →
      </Link>

    </div>
  );
}