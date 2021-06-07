import React, { Component } from 'react';
import technologies from '../assets';
import Slide from 'react-reveal';

class AllSkills extends Component {
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const allSkillmessage = this.props.data.allSkillmessage;

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Technologies</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{allSkillmessage}</p>
          </div>
          <div className="technologies-wrapper">
            <div className="technologies-images ">
              {Object.values(technologies).map((image) => (
                <div className="technologies-images__img">
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllSkills;
