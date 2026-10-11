export default function Hero() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 my-8">
        <div className="text-center z-10 mb-12">
          <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            Macbook Pro
          </h1>
          <p className="relative mt-4 mx-auto font-inter sm:text-2xl md:text-3xl lg:text-5xl text-cyan-200 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] [text-shadow:0_0_20px_rgba(168,85,247,0.5)]">
            Built for Apple intelligence
          </p>
        </div>
        <div className="relative group flex items-center justify-center max-w-3xl w-full h-screen">
          <div className="absolute w-[80%] h-[50%] bg-linear-to-r from-cyan-500 via-purple-500 to-fuchsia-500 rounded-full blur-[45px] opacity-60 animate-neon-glow pointer-events-none" />

          <img
            src="png-transparent-mac-book-pro-macbook-air-laptop-družina-macbook-macbook-electronics-netbook-macbook-air-removebg-preview.png"
            alt="Macbook Pro"
            className="relative z-10 w-full h-auto object-contain scale-80"
          />
        </div>
        <button className="rounded-full py-2 px-6 bg-blue-600">Buy</button>
        <p className="sm:text-md md:text-lg lg:text-xl font-inter text-gray-400 my-5">
          From $1599 or $133/mo for 12 months
        </p>
      </div>
    </section>
  );
}
