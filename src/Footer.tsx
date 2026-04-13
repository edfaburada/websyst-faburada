const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">
            Eve's Portfolio
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Projects</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <div className="text-sm text-gray-400">
          Built with React + Tailwind
        </div>

      </div>
    </footer>
  );
};

export default Footer;