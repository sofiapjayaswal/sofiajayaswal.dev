import React from 'react';
import { Chrono } from 'react-chrono';
import reactIcon from '../img/react.svg';
import jsIcon from '../img/javascript.svg';
import cIcon from '../img/c.svg';
import javaIcon from '../img/java.svg';
import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css.svg';
import pythonIcon from '../img/python.svg';

function Experience() {
  const items = [{
    title: 'May 2023 - Present',
    cardTitle: 'Geisel School of Medicine, Dartmouth College',
    cardSubtitle: 'Undergraduate Research Assistant at Jacobson Lab',
    cardDetailedText: `As an undergraduate research assistant at Jacobson Lab, I have been helping develop a 
    mobile application for a therapy artificial intelligence chatbot using Flutter and Dart. I am also contributing in
    researching large languag learning models to refine the models we are currently using.`,
  },
  {
    title: 'September 2022 - Present',
    cardTitle: 'Department of Computer Science, Dartmouth College',
    cardSubtitle: 'Teaching Assistant',
    cardDetailedText: `As a teaching assistant for COSC001: Introduction to Programming and Computation, 
    I facilitate weekly review sessions and office hours to mentor students through coding drills and assignments in Python, sharing essential
    problem-solving and debugging skills. I also assess student's work, providing helpful feedback and tools for future assignments.`,
  },
  {
    title: 'June 2022 - August 2022',
    cardTitle: 'Harbor Social, San Francisco',
    cardSubtitle: 'Software Engineering and Design Intern',
    cardDetailedText: `As an intern for Harbor Social, a startup participating in the Stanford Business Graduate School Botha Chan 
    Innovation Internship Program, I was at the forefront of conceptualizing and designing a social app that allowed users to create and 
    register for events using React Native. I further enhanced user engagement through streamlining communication in the application through building a messaging 
    system using Firebase.`,
  },
  ];

  const timelineFontSizes = {
    title: '1.3rem',
    cardTitle: '1.8rem',
    cardSubtitle: '1.3rem',
    cardText: '10rem',
  };

  const timelineColors = {
    primary: '#609966',
    secondary: '#EDF1D6',
    cardBgColor: '#9DC08B',
    titleColor: '#609966',
    titleColorActive: '#609966',
    cardTitleColor: '#40513B',
    cardSubtitleColor: '#609966',
  };

  return (
    <div id="experience">
      {/* <div id="timeline">
        <Chrono items={items} slideShow mode="VERTICAL" theme={timelineColors} fontSizes={timelineFontSizes} hideControls lineWidth={5} activeItemIndex={-1} useReadMore={false} />
      </div> */}
      <h2 className="experience-title">My Experiences</h2>
      <div className="experience-content">
        <div className="timeline">
          <Chrono className="chrono-timeline"
            items={items}
            mode="VERTICAL"
            slideshow
            theme={timelineColors}
            fontSizes={timelineFontSizes}
            hideControls
            lineWidth={5}
          />
        </div>
        <div className="skills">
          <h1>Languages</h1>
          <div className="skills-list">
            <img src={reactIcon} alt="" />
            <img src={jsIcon} alt="" />
            <img src={cIcon} alt="" />
            <img src={javaIcon} alt="" />
            <img src={htmlIcon} alt="" />
            <img src={cssIcon} alt="" className="css" />
            <img src={pythonIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
