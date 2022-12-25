import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./ProjectCard.css";
const ProjectCard = ({img,title,description,icon1,icon2,icon3,icon4,link,githubLink}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={img}
          alt="projectimage"
        />
      </div>
      <div className="right-side flex">
        <div className="project-details flex">
          <h4>{title}</h4>
          <p>
           {description}
          </p>
        </div>
        <div className="stack flex">
          <span>Stack :</span>
          <div className="stack-icons flex">
          {icon1}
           {icon2}
           {icon3}
           {icon4}
          </div>
        </div>
        <div className="project-buttonn flex">
          <a
            href={link}
            target="_blank"
            className="flex"
          >
            Preview <AiFillEye className="address" fontSize={17} />
          </a>
          <a href={githubLink} target="_blank" className="flex">
            GitHub <AiFillGithub fontSize={17} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
