import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import daisyuiLogo from "../assets/daisyuiLogo.png";
import CustomBtn from "../components/CustomBtn";

function Skills() {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="carousel w-full">
        <div
          id="jsLogo"
          className="carousel-item w-full flex items-center justify-center flex-col gap-2"
        >
          <img
            src={javascriptLogo}
            className="h-32 w-32 border-4 border-[#ED7F27] rounded-full"
          />
          {/*Texto informativo*/}
          <div>
            <h3 className="text-[#ECA72C] font-serif underline text-center">
              Javascript
            </h3>
            <div className="w-80 h-32 overflow-auto overflow-auto-y scrollbar-custom bg-[#ECA72C] border rounded border-[#ECA72C] p-2">
              <p className="text-center text-[#221E22] font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit dolores tempora omnis? Eum exercitationem nihil
                officiis, deserunt repudiandae, quae similique voluptatibus ex
                earum unde, quibusdam consequuntur dolores? Dolorum, eligendi
                aliquid.
              </p>
            </div>
          </div>
        </div>

        <div
          id="reactLogo"
          className="carousel-item w-full flex items-center justify-center flex-col gap-2"
        >
          <img
            src={reactLogo}
            className="h-32 w-32 border-4 border-[#ED7F27] rounded-full"
          />
          {/*Texto informativo*/}
          <div>
            <h3 className="text-[#ECA72C] font-serif underline text-center">
              React
            </h3>
            <div className="w-80 h-32 overflow-auto overflow-auto-y scrollbar-custom bg-[#ECA72C] border rounded border-[#ECA72C] p-2">
              <p className="text-center text-[#221E22] font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit dolores tempora omnis? Eum exercitationem nihil
                officiis, deserunt repudiandae, quae similique voluptatibus ex
                earum unde, quibusdam consequuntur dolores? Dolorum, eligendi
                aliquid.
              </p>
            </div>
          </div>
        </div>
        <div
          id="tailwindcssLogo"
          className="carousel-item w-full flex items-center justify-center flex-col gap-2"
        >
          <img
            src={tailwindcssLogo}
            className="h-32 w-32 border-4 border-[#ED7F27] rounded-full"
          />
          {/*Texto informativo*/}
          <div className="items">
            <h3 className="text-[#ECA72C] font-serif underline text-center">
              Tailwind Css
            </h3>
            <div className="w-80 h-32 overflow-auto overflow-auto-y scrollbar-custom bg-[#ECA72C] border rounded border-[#ECA72C] p-2">
              <p className="text-center text-[#221E22] font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Su
              </p>
            </div>
          </div>
        </div>
        <div
          id="daisyuiLogo"
          className="carousel-item w-full flex items-center justify-center flex-col gap-2"
        >
          <img
            src={daisyuiLogo}
            className="h-32 w-32 border-4 border-[#ED7F27] rounded-full"
          />
          {/*Texto informativo*/}
          <div>
            <h3 className="text-[#ECA72C] font-serif underline text-center">
              DaisyUi
            </h3>
            <div className="w-80 h-32 overflow-auto overflow-auto-y scrollbar-custom bg-[#ECA72C] border rounded border-[#ECA72C] p-2">
              <p className="text-center text-[#221E22] font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit dolores tempora omnis? Eum exercitationem nihil
                officiis, deserunt repudiandae, quae similique voluptatibus ex
                earum unde, quibusdam consequuntur dolores? Dolorum, eligendi
                aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <CustomBtn
          type="submit"
          text="1"
          carousel
          onClick={() => (window.location.href = "#jsLogo")}
        />
        <CustomBtn
          type="submit"
          text="2"
          carousel
          onClick={() => (window.location.href = "#reactLogo")}
        />
        <CustomBtn
          type="submit"
          text="3"
          carousel
          onClick={() => (window.location.href = "#tailwindcssLogo")}
        />
        <CustomBtn
          type="submit"
          text="4"
          carousel
          onClick={() => (window.location.href = "#daisyuiLogo")}
        />
      </div>
    </div>
  );
}

export default Skills;
