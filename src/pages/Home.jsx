import CustomBtn from "../components/CustomBtn";

function Home() {
  return (
    <div className="hero flex justify-center h-full">
      <div className="hero-content text-center">
        <div className="max-w-md typewriter">
          <h1 className="text-5xl text-[#EE5622] font-bold animate-bounce">Welcome!</h1>
          <p className="py-6 text-[#ECA72C]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum,
            iste nesciunt amet officiis tempore qui culpa labore ducimus nulla
            in ea esse sint, consequatur earum! Minima, autem voluptatum. Atque.
          </p>
          {/* <button className="btn btn-error">Get Started</button> */}
          <CustomBtn type="submit" text="Enviar" primary/>
        </div>
      </div>
    </div>
  );
}

export default Home;
