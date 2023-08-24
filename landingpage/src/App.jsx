import Nav from "./components/Nav";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <header id="home">
        <Nav />
      </header>
      <main>
        <section className="bg-white dark:bg-gray-900">
          <Hero />
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
