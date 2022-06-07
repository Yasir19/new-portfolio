import React, { useState } from "react";
import { removeHyphensAndCapitalize } from "../../utlis/helpers";
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
          <i className="fa fa-github"></i>
          <a className="url" href={url}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a  href={repo}></a>
        </h3>
        <p className="repo-desc">{desc}</p>
      </div>

    </div>
  );
}
export default Repo;
