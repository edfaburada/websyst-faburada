import Navbar from "../components/Navbar";
import Footer from "../Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="pt-24 p-10 flex-1">
        <h1 className="text-3xl font-bold mb-4">Services</h1>

        <ul className="text-gray-600 space-y-2">
          <li>✔ Student logbook submission</li>
          <li>✔ Attendance tracking</li>
          <li>✔ Coordinator review system</li>
          <li>✔ Administrator access control</li>
          <li>✔ Real-time progress monitoring</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}