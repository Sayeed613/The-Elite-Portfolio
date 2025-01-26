export default function Footer() {
  return (
    <footer className="relative z-20 bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        <p className="text-sm sm:text-base">© 2025 THE ELITE PORTFOLIO. All rights reserved.</p>
        <div className="mt-4 flex flex-row sm:flex-row gap-4 sm:gap-2 justify-center">
          <a
            href="#"
            className="text-xs sm:text-md text-gray-400 hover:text-white mx-3 my-1 sm:my-0"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs sm:text-md text-gray-400 hover:text-white mx-3 my-1 sm:my-0"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs sm:text-md text-gray-400 hover:text-white mx-3 my-1 sm:my-0"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}