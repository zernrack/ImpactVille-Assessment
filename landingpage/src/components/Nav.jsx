function Nav() {
  return (
    <>
      <nav className="flex flex-col w-full px-6 py-4 font-sans text-center bg-gray-300 shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a
            href="#"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark "
          >
            TechnoWorks
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline"
          >
            About
          </a>
          <a
            href="#"
            className="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark hover:underline"
          >
            Products
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
