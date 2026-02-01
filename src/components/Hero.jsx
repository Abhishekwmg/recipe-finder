import avocado from "../assets/avocado.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={avocado}
        alt="avocado background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
          Find The{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Recipe
          </span>
          You Love <span className="text-4xl">😍</span>
        </h1>

        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full max-w-md px-4 py-3 rounded-md outline-none text-gray-800 mb-4 bg-amber-50"
        />
        <button className="bg-amber-50 py-2 px-10 mx-2.5 rounded-lg text-xl cursor-pointer">
          Search
        </button>

        <p className="max-w-xl my-8 text-xl md:text-base text-gray-200">
          Cooking is not just a hobby, it's passion mixed with real love for
          food and culture ✨.
        </p>
      </div>
    </section>
  );
};

export default Hero;
