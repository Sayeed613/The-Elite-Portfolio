import Carousel from "../components/ui/carousel";
import images from "../assets/images";
import ColourfullText from "../components/ui/colourful-text";

function Portfolio() {
  // Map the `images` array to fit the carousel slide format
  const slideData = images.map(({ title, link, src }) => ({
    title,
    button: "Explore ",
    link,
    src,
  }));

  return (
    <div className="relative overflow-hidden w-full h-full py-10 sm:py-40 px-4 sm:px-8 lg:px-16 bg-black">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:text-start text-center mb-10">
        <ColourfullText text="PROJECTS" />
      </h1>

      {/* Carousel Section */}
      <div className="w-full h-auto mb-10 max-w-screen-lg mx-auto">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}

export default Portfolio;
