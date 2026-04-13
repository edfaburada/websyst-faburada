import { GraduationCap, Users, Shield } from "lucide-react";

export default function RoleCard({ title, description }: any) {

  const icons: any = {
    Student: <GraduationCap size={28} />,
    Coordinator: <Users size={28} />,
    Administrator: <Shield size={28} />
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-8 text-center">

      {/* ICON */}
      <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
        {icons[title]}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-500 mb-6">
        {description}
      </p>

      {/* LINK */}
      <a className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
        Login as {title} →
      </a>

    </div>
  );
}