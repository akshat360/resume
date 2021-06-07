import React, { Component } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((projects) => {
      let projectImage = 'images/portfolio/' + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />
            <div className="title">{projects.title}</div>
            <a href={projects.url} target="_blank" rel="noreferrer">
              <div className="overlay">
                <div>{projects.title}</div>
                <div className="under">{projects.under || 'Self'}</div>
                <i className="link-icon fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
