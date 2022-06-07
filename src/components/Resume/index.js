import React, {useState} from "react";
import SubNav from "../SubNav/SubNav";
import SubFeader from "../SubFeader/SubFeader";



function Resume() {
  const [pages] = useState([
    {
      name:"Work History"
    },
    {
      name:"Education"
    }, 
    {
      name:"Projects"

    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <section className="my-5">
      <div className="my-2">
        <SubNav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
        <SubFeader currentPage={currentPage}/>

        <p>
          
          <a href="assets/Yasir-Habboo-resume-c1.docx"
           download="yasir habboo.docx">

          {/* <button>Get Resume</button> */}
          </a>
        </p>
      </div>
    </section>
  );
}
export default Resume;