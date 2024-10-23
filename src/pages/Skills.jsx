import { skills } from "../utils/utils";
import chopperDance from "../assets/chopperDance.gif";
import { useState } from "react";
function Skills() {
  const [acariciar, setAcariciar] = useState(false);
  function acariciarChopper() {
    setAcariciar(!acariciar);
  }
  return (
    <div className="flex justify-center items-center gap-16 h-screen md:h-screen flex-col lg:flex-row relative">
      {/* Informacion sobre skills */}
      <div className="flex lg:w-1/2 md:flex items-center justify-center">
        <button onClick={acariciarChopper}>
          {acariciar && (
            <div className="absolute bg-[#F8F8D4] border-[#3287C8] border-2 rounded ml-16">
              <p className="text-[#ee72b0] p-1">
                Oye, vas a hacer que me sonroje!
              </p>
            </div>
          )}
          <img
            src={chopperDance}
            alt="chopper one piece"
            className="w-20 h-20 p-1 hover:p-0"
          />
        </button>

        <div></div>
        <h3 className="text-[#D1C9BA] border-[#2AB0E1] pl-2  md:h-1/2 lg:border-l-2 w-4/6 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          minima doloremque ullam iure dicta veritatis, eum cum voluptatum!
          Autem harum illo ipsum natus veritatis porro dolores hic, consequatur
          tempore corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio, aliquam! Excepturi porro, accusantium ipsa eveniet optio
          minima aliquam animi enim debitis est eum, blanditiis quibusdam,
          dolorum facilis repudiandae labore iusto.
        </h3>
      </div>
      {/* Iteracion de las skills, traidas de utils */}
      <div className="flex flex-col gap-4">
        {skills.map(({ logo, value, href }, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <a href={href} target="_blank">
                <img
                  src={logo}
                  alt=""
                  className="w-8 h-8 hover:p-0.5 delay-300"
                />
              </a>
              <progress
                className="progress progress-info w-56 backdrop-blur-sm bg-[#3287C8]"
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
