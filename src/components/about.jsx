import React from 'react';
import profile from '../img/profile.jpg';

function About() {
  return (
    <div>
      <div id="about">
        <div id="about-image">
          <img src={profile} alt="" />
        </div>
        <div id="about-text">
          <h1>A Little Bit More About Me...</h1>
          <h2>Driven, Creative, People-Oriented</h2>
          <p>
            Hello my name is Sofia Jayaswal! I am a junior at Dartmouth College, studying Computer Science.
            I grew up in Portland, Oregon. I am passionate about using technology and pushing boundaries to better the future. I am specifically interested
            in software engineering, human-computer interaction, and full stack web development. I am a quick learner, willing to step up and learn new things to ensure I do my best work.
          </p>
          <p>When I am not programming, I can be found rock climbing with friends 🧗‍♀️, listening to music 🎶, walking in the forest 🌲, or swimming in the Connecticut River 🏊‍♀️.</p>
          <p id="about-email">Reach out to me at sofiajayaswal@gmail.com!</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default About;
