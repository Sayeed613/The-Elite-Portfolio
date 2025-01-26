import video from "../assets/vp9.webm";
import moon from "../assets/moon.jpg";

function About() {
  return (
    <div className="sm:pt-30 pt-40 bg-white min-h-screen w-full p-4 sm:p-8 md:p-[100px] relative overflow-hidden">
      {/* Video Background */}
      <div>

      <video
        src={video}
        autoPlay
        loop
        muted
        className=" w-full h-[600px] sm:h-[900px]  absolute sm:top-0 top-10 left-0 z-0"
      />
      </div>


      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full md:w-[90%] lg:w-[80%] mx-auto gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold">
            About ME
          </h1>
          <p className="text-lg sm:text-xl mt-8 md:mt-[200px] font-light font-serif">
            I'm always looking for opportunities to <br className="hidden md:block" />
            collaborate, innovate, and make a difference <br className="hidden md:block" />
            through technology.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <p className="text-base sm:text-lg font-semibold mt-4 md:mt-10">
            I'm dedicated to building <br className="hidden md:block" />
            solutions that have a lasting impact
          </p>
        </div>
      </div>
    </div>
  );

}

export default About;