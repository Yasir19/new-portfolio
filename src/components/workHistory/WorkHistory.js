import React from 'react';
import './work-style.css'

function WorkHistory() {
    return (
        <div className='work-container'>
            <h3> Work History</h3>
            <h3 className='role'>Role and Responsibilities</h3>
            <div className='title'>
                <h4>BMC Software Engineer</h4>
                <h5>Foxconn<span>Houston, TX</span></h5>
                <h5>04/2022 to till now </h5>
                </div>
                <div class ='desc'>
                <ul className='skills'>
                <li>Support design, integration of server hardware, and the application solutions deployed on them </li>
                <li>Design, develop, and test embedded software</li>
                <li>Work with cross-functional teams (i.e. EE, BIOS, HW, FW) to develop and deliver a successful server BMC </li>
                <li>Analyze software bugs and implement solutions to them </li>
                <li>Experience reading and understanding digital schematics desired </li>
                <li>Proficient with Source version control systems like Git, Review tools like Gerrit </li>
                <li>Tools used to ensure success C++, LINUX, IPMItool</li>
                </ul>
                </div>
                <p className='headline'> Developing and testing embedded software for the AMI project </p>
            <div className='title2'>
                <h4>Residential technician senior</h4>
                <h5>COMCAST-XFINITY <span>Houston, TX</span></h5>
                <h5>07/2018 to 04/2022</h5>
                </div>
                <div class ='desc2'>
                <ul className='skills'>
                <li>Completed new connects, reconnects, disconnects and service changes for residential and commercial customers. </li>
                <li>Worked closely with supervisor, network engineers, plant maintenance team to maintain optimum levels of communication to effectively and efficiently complete projects</li>
                <li>Tested cables using tools such as volt-OHM meters, spectrum analyzers and signal level meters. </li>
                <li>Increased customer satisfaction by resolving Xfinity X1 video services, internet and voice issues. </li>
                <li>Resolved conflicts and negotiated mutually beneficial agreements between parties. </li>
                <li>Used critical thinking to break down problems, evaluate solutions and make decisions. </li>
                </ul>
                </div>
                <p className='headline2'> Ensure internet and TV service meet the customer sutsfucation </p>
      
        </div>
    )
}
export default WorkHistory;