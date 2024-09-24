import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import sqlLogo from "../assets/sqlLogo.png";

function Skills() {
  return (
    <div className="justify-end flex">
      <div className="flex w-1/3 items-center mr-48">
        <p className="border-l-2 border-[#44355B] pl-2 text-[#ECA72C]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima doloremque ullam iure dicta veritatis, eum cum voluptatum! Autem harum illo ipsum natus veritatis porro dolores hic, consequatur tempore corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquam! Excepturi porro, accusantium ipsa eveniet optio minima aliquam animi enim debitis est eum, blanditiis quibusdam, dolorum facilis repudiandae labore iusto.</p>
      </div>
      <div className="flex flex-col w-1/3 gap-4 mr-10 mt-36">
        <img src={javascriptLogo} alt="javascript logo" className="w-10 h-10 rounded" />
        <progress className="progress progress-warning w-56 bg-[#31263E]" value={68} max="100"></progress>
        <img src={reactLogo} alt="react logo" className="w-10 h-10 rounded" />
        <progress className="progress progress-warning w-56 bg-[#31263E]" value={50} max="100"></progress>
        <img src={tailwindcssLogo} alt="" className="w-10 h-10 rounded" />
        <progress className="progress progress-warning w-56 bg-[#31263E]" value={55} max="100"></progress>
        <img src={sqlLogo} alt="" className="w-10 h-10 rounded" />
        <progress className="progress progress-warning w-56 bg-[#31263E]" value={30} max="100"></progress>
      </div>
    </div>
  );
}

export default Skills;
