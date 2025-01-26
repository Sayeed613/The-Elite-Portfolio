import { useState, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import LoadingScreen from './components/LoadingScreen';  // Import the loading screen component

export default function App() {
  const [loading, setLoading] = useState(true);  // Track loading state
  const scrollContainerRef = useRef(null);

  const handleLoadingComplete = () => {
    setLoading(false);  // Set loading to false when loading is complete
  };

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      lerp: 0.1,
      scrollFromAnywhere: true,
      multiplier: 1,
      touchMultiplier: 2,
      resetNativeScroll: true,
      getDirection: true,
      getSpeed: true,
      reloadOnContextChange: true
    });

    window.LocomotiveScrollInstance = scroll;

    const resizeObserver = new ResizeObserver(() => {
      // Ensure proper layout on resize
      setTimeout(() => scroll.update(), 100);
    });

    resizeObserver.observe(scrollContainerRef.current);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollContainerRef}
      className="relative min-h-screen overflow-x-hidden"
    >
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />
          <main className="flex flex-col">
            <section data-scroll-section className="mt-20">
              <Home />
            </section>
            <section data-scroll-section>
              <About />
            </section>
            <section data-scroll-section>
              <Education />
            </section>
            <section data-scroll-section>
              <Portfolio />
            </section>
            <section data-scroll-section>
              <Contact />
            </section>
            <section data-scroll-section>
              <Footer />
            </section>

          </main>
        </>
      )}
    </div>
  );
}
