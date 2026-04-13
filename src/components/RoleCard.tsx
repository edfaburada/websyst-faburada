import { useNavigate } from "react-router-dom";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function RoleCard({ icon, title, description }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/home")}
      className="bg-white p-8 rounded-xl shadow text-center hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <span className="material-symbols-outlined text-3xl text-emerald-500">
        {icon}
      </span>

      <h3 className="text-xl font-bold mt-4">{title}</h3>

      <p className="text-gray-500 text-sm mt-3 mb-6">
        {description}
      </p>

      <button className="text-emerald-600 font-semibold">
        Login →
      </button>
    </div>
  );
}