import React from "react";
import { removeHyphensAndCapitalize } from "../../utlis/helpers";
import { FaGithub } from "react-icons/fa";
import './repo-style.css'

function Repo({ project}) {
  const { name, repo, url, desc } = project;

  return (
    <div className={name} key={name}>
      <img
        src={require(`../../assets/image/${name}.png`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <FaGithub className="icons"/>
          <a className="url" href={url}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a  href={repo}></a>
          <p className="repo-desc">{desc}</p>
        </h3>
      </div>
      

    </div>
  );
}
export default Repo;
