
import React from "react";
import { DiGithubFull } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import "./style.css"

function footer() {
  const soicalMedia = [
    {
      name: <DiGithubFull/>,
      link: "https://github.com/Yasir19",
    },

    {
      name: <AiOutlineLinkedin/>,
      link: "https://www.linkedin.com/in/yasir-habboo/",
    },
    {
      name: <BsTwitter/>,
      link: "https://twitter.com/HabbooYasir",
    },
  ];

  return (
    <footer className="footer">
      {soicalMedia.map((media) => (
        <a
          href={media.link}
          key={media.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>{media.name} </i>
        </a>
      ))}
    </footer>
  );
}
export default footer