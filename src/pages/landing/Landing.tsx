import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <main className="pt-28 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-emerald-500 font-medium">
            Access Management System
          </p>

          <h1 className="text-4xl font-bold mt-4 mb-4">
            Digital SIL Monitoring System
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Track, manage, and monitor student industry learning progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <RoleCard
            icon="school"
            title="Student"
            description="Submit logs, track attendance, and manage reports."
          />

          <RoleCard
            icon="groups"
            title="Coordinator"
            description="Review journals and approve records."
          />

          <RoleCard
            icon="admin_panel_settings"
            title="Administrator"
            description="Manage system access and users."
          />

        </div>

      </main>

      <Footer />
    </div>
  );
}