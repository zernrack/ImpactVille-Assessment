/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const BackgroundWithOverlay = ({ imageUrl, children }) => (
  <div
    className="relative opacity-80"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="absolute inset-0 bg-black opacity-80"
      style={{ zIndex: -99 }}
    ></div>
    {children}
  </div>
);

const CallAction = () => (
  <BackgroundWithOverlay imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80">
    <section className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
      <div className="max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-400 dark:text-white">
          Want to become part of the TechnoWorks Team?
        </h2>
        <p className="mb-8 font-light text-gray-300 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ipsa cum aperiam, id voluptas nulla reiciendis laborum ipsam? Natus
          repellendus iusto, explicabo velit odio numquam inventore omnis
          reiciendis expedita debitis.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            Join Now
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  </BackgroundWithOverlay>
);

export default CallAction;
