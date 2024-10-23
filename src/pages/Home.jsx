import heroImage from "../assets/onepiece-hero.gif";
import SocialLinks from "../components/SocialLinks";
import lawDance from "../assets/lawDance.gif";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      /* Imagen del hero */
      className="hero h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-[#0D3B66]"></div>
      <div className="hero-content text-neutral-content text-center">
        {/* Utilizacion del typewriter en el h1 */}
        <div className="max-w-md typewriter">
          <h1 className="text-5xl font-bold text-[#2AB0E1]">Welcome!</h1>
          <h2 className="py-6 text-[#D1C9BA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum,
            iste nesciunt amet officiis tempore qui culpa labore ducimus nulla
            in ea esse sint, consequatur earum! Minima, autem voluptatum. Atque.
          </h2>
          {/* Importancion del componente social links que trae los contactos */}
          <div className="flex justify-center items-center">
            {<SocialLinks />}
          </div>
          <div className="flex justify-center items-center">
            <Link to="/youaretrolled">
              <img src={lawDance} alt="" className="h-10 w-10 mt-10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
