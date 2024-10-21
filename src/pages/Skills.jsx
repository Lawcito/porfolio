import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import sqlLogo from "../assets/sqlLogo.png";

const skills = [
  { img: javascriptLogo, value: "40" },
  { img: reactLogo, value: "50" },
  { img: tailwindcssLogo, value: "45" },
  { img: sqlLogo, value: "30" },
];

function Skills() {
  return (
    <div className="flex justify-center items-center h-screen gap-16">
      <div className="flex w-1/3">
        <p className="border-l-2 border-[#2AB0E1] pl-2 text-[#D1C9BA]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          minima doloremque ullam iure dicta veritatis, eum cum voluptatum!
          Autem harum illo ipsum natus veritatis porro dolores hic, consequatur
          tempore corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio, aliquam! Excepturi porro, accusantium ipsa eveniet optio
          minima aliquam animi enim debitis est eum, blanditiis quibusdam,
          dolorum facilis repudiandae labore iusto.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {skills.map(({ img, value }, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <img src={img} alt="" className="w-8 h-8" />
              <progress
                className="progress progress-info w-56"
                value={value}
                max="100"
              ></progress>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
