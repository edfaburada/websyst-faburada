import { GraduationCap, Users, Shield } from "lucide-react";
import "./rolecard.css"; // Make sure to import your CSS file!

interface RoleCardProps {
  title: "Student" | "Coordinator" | "Administrator";
  description: string;
  href: string;
  subtext: string;
}

export default function RoleCard({ title, description, href, subtext }: RoleCardProps) {
  const icons = {
    Student: <GraduationCap size={36} strokeWidth={1.5} />,
    Coordinator: <Users size={36} strokeWidth={1.5} />,
    Administrator: <Shield size={36} strokeWidth={1.5} />
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

      {/* LINK / BUTTON */}
      <a href={href} className="role-link">
        Login as {title}
      </a>

      {/* SUBTEXT */}
      <p className="role-subtext">
        {subtext}
      </p>

    </div>
  );
}