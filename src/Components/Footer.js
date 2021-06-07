import React, { Component } from 'react';
import Fade from 'react-reveal';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    console.log('tworks = this.pr', this.props.data.social);
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.icon}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Akshat Aggarwal</li>
                {/* <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    A
                  </a>
                </li> */}
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
