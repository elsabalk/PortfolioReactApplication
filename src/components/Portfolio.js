import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardLink, CardFooter } from 'reactstrap';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="portfolioTitle">
        
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <CardTitle>Check out some of my awesome work</CardTitle><br/>
            <button className="button" onClick={() => window.location.href = 'https://agile-beyond-74624.herokuapp.com/'}>Budget Tracker</button ><br />
          </CardBody>
        </Card>
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <button className="button" onClick={() => window.location.href = 'https://github.com/elsabalk/RegexTutorial.git'}>Regex Tutorial</button ><br />
          </CardBody>
        </Card>
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <button className="button" onClick={() => window.location.href = 'https://github.com/elsabalk/WorkoutTracker.git'}>Workout Tracker</button ><br />
          </CardBody>
        </Card>
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <button className="button" onClick={() => window.location.href = 'https://github.com/elsabalk/Employee-Tracker.git'}>Employee Tracker</button ><br />
          </CardBody>
        </Card>
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <button className="button" onClick={() => window.location.href = 'https://github.com/ZagalJ/BarnesAndNode.git'}>Barns and Node</button ><br />
          </CardBody>
        </Card>
        <Card >
          <CardImg style={{ width: '18rem' }} variant="top" src={""} />
          <CardBody>
            <button className="button" onClick={() => window.location.href = 'https://github.com/elsabalk/E-Commerce-Backend.git'}>Ecommerce Backend</button ><br />
          </CardBody>
        </Card>

      </div>
      </section>
    )
  }


}