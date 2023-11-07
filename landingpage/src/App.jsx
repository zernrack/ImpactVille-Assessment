import { useState } from "react";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";
import Hero from "./components/hero";
import ContactsForm from "./components/ContactsForm";
import CallAction from "./components/CalltoAction";

function App() {
  const [isTruncated, setIsTruncated] = useState(true);
  // Variables used for truncation
  const limit = 90;
  const CONTENT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a justo nibh. Donec at magna tincidunt, ornare diam at, elementum dui. Aliquam ipsum felis, consectetur elementum augue vel, lobortis tristique ligula. Aenean dapibus at sem at vulputate. Donec in eros sit amet nisi gravida finibus. Aenean non lorem malesuada, blandit odio eget, fringilla velit. Nunc mauris urna, placerat at leo id, varius accumsan justo.";

  // Function to truncate about desc
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      <header id="home">
        <Nav />
      </header>
      <main>
        <section className="bg-gray-900">
          <Hero />
        </section>
        <section className="bg-gray-700 ">
          <h1
            className="py-4 text-4xl font-extrabold tracking-tight text-white px-9"
            id="products"
          >
            PRODUCTS:
          </h1>
          <div className="grid justify-center gap-4 px-5 py-4 sm:grid-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="bg-gray-900" id="about">
          <div className="flex flex-col items-center justify-center py-5 text-justify">
            <h2 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-white underline dark:text-white">
              ABOUT
            </h2>
            <p className="text-xl text-white w-80">
              {isTruncated ? CONTENT.slice(0, limit) + "..." : CONTENT}
              {CONTENT.length > limit && (
                <button
                  className="text-blue-300 dark:text-blue-500 hover:underline"
                  onClick={toggleTruncate}
                >
                  {isTruncated ? "Read More" : "Read Less"}
                </button>
              )}
            </p>
          </div>
        </section>
        <CallAction />
        <section className="bg-gray-900" id="contact">
          <ContactsForm />
        </section>
      </main>
    </>
  );
}

export default App;
