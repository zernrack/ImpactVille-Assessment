function Nav() {
  return (
    <>
      <nav className="flex flex-col w-full px-6 py-4 font-sans text-center bg-gray-800 shadow dark:bg-gray-800 sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a
            href="#"
            className="text-2xl font-extrabold text-white no-underline hover:text-blue-dark "
          >
            TechnoWorks
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="#home"
            className="ml-2 text-lg font-semibold text-white no-underline hover:text-blue-dark hover:underline"
          >
            Home
          </a>
          <a
            href="#products"
            className="ml-2 text-lg font-semibold text-white no-underline hover:text-blue-dark hover:underline"
          >
            Products
          </a>
          <a
            href="#about"
            className="ml-2 text-lg font-semibold text-white no-underline hover:text-blue-dark hover:underline"
          >
            About
          </a>
          <a
            href="#contact"
            className="ml-2 text-lg font-semibold text-white no-underline hover:text-blue-dark hover:underline"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
