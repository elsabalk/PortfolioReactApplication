import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQEiqbywHrTC2w/profile-displayphoto-shrink_200_200/0/1626748912440?e=1642636800&v=beta&t=CUrX1OA3NJfF90DCwrtZeGYkha_pcQLo-wm3RFv9w90" alt="" />

               </div>

               <div className="nine columns main-col6">

                  <h2>About Me</h2>
                  <p className="aboutPara">
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Info</h2>
                        <p className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>{resumeData.website}</span><br />
                           <a className="button" target="_blank" href="https://drive.google.com/file/d/1TerPt9fwZpnEOmG4uENhjm4bPouJLQ14/view?usp=sharing"><i className="fa fa-download"></i>Download Resume</a>
                        </p>

                        <a target="_blank" className="button btn linkedin-btn" href="https://www.linkedin.com/in/elsamarie-balkaran-999b6ab3/"><i className="fa fa-linkedin"></i>LinkedIn</a>
                        <a target="_blank" className="button btn github-btn" href="https://github.com/elsabalk"><i className="fa fa-github"></i>Github</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}