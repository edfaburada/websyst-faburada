import Navbar from "../components/Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="pt-24 p-10 flex-1">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        <p className="text-gray-600 mb-4">
          If you have questions or need assistance, feel free to contact us.
        </p>

        <div className="text-gray-600 space-y-2">
          <p>Email: support@silmonitor.com</p>
          <p>Phone: +63 912 345 6789</p>
          <p>Address: Asian College, Philippines</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}