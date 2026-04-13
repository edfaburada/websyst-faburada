import Navbar from "../components/Navbar";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="pt-24 p-10 flex-1">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="text-gray-600">
          Welcome to the SIL Monitoring System. This platform allows students,
          coordinators, and administrators to manage and track industry learning efficiently.
        </p>
      </main>

      <Footer />
    </div>
  );
}