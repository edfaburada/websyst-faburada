import Navbar from "../components/Navbar";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="pt-24 p-10 flex-1">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-gray-600">
          The SIL Monitoring System is designed to help educational institutions
          track student progress during their Supervised Industry Learning (SIL).
          It improves transparency, efficiency, and communication between students and coordinators.
        </p>
      </main>

      <Footer />
    </div>
  );
}