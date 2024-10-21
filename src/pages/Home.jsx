import heroImage from "../assets/onepiece-hero.gif";
import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-[#0D3B66]"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md typewriter">
          <h1 className="text-5xl font-bold animate-bounce text-[#2AB0E1]">
            Welcome!
          </h1>
          <p className="py-6 text-[#D1C9BA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum,
            iste nesciunt amet officiis tempore qui culpa labore ducimus nulla
            in ea esse sint, consequatur earum! Minima, autem voluptatum. Atque.
          </p>
          <div className="flex justify-center">{SocialLinks()}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
