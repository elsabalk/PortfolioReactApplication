import React, { Component } from "react";
export default class ContactUs extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="contact">
            <div className="row section-head">
               <div className="ten columns">
                  <p className="lead">
                     Please feel free to contact me
                  </p>
               </div>
            </div>
            <form id="contact-form">
               <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input required type="text" className="form-control" />
               </div>
               <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address *</label>
                  <input required type="email" className="form-control" aria-describedby="emailHelp" />
               </div>
               <div className="form-group">
                  <label htmlFor="exampleInputSubject">Subject *</label>
                  <input required type="text" className="form-control" aria-describedby="subjectHelp" />
               </div>
               <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea required className="form-control" rows="5"></textarea>
               </div>
               <button type="submit" className="btn btn-primary button">Submit</button>
            </form>

         </section>
      );
   }
}
