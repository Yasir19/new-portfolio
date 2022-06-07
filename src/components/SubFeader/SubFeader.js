import React from 'react'
import WorkHistory from '../workHistory/WorkHistory'
import Education from '../Education/Education'
import ResumeComponent from '../ResumeComponent/ResumeComponent'
import SubProjects from '../SubProject/SubProject'
function SubFeader({currentPage}) {
    //check wich screen is been render
    const renderPage =() =>{
        switch(currentPage.name){
            case 'Work History':
            return<WorkHistory/>
            case 'Education':
                return<Education/>
                case 'Projects':
                return<SubProjects/>
            default:
                return<Education/>
        }
    }
    return(
        <section>
            <div>
            <ResumeComponent>{renderPage()}</ResumeComponent>
            </div>
        </section>
    )
}
export default SubFeader