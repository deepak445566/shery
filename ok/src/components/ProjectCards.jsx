import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCards = ({
  title,
  subtitle,
  image,
  iconColor,
  Color,
  ParaColor,
  TextColor,
  path,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) navigate(path);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full sm:w-[340px] h-[300px] rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 cursor-pointer hover:shadow-2xl"
    >
      {/* Background image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Info box */}
      <div
        className="absolute bottom-4 left-4 right-4 rounded-xl shadow-md p-4 flex justify-between items-center group-hover:translate-y-[-8px] transition-all duration-500"
        style={{ backgroundColor: Color }}
      >
        <div>
          <h3
            className="text-lg font-semibold leading-tight"
            style={{ color: TextColor }}
          >
            {title}
          </h3>
          <p className="text-sm mt-1" style={{ color: ParaColor }}>
            {subtitle}
          </p>
        </div>

        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconColor }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
