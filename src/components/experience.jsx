import React from 'react';
import { Chrono } from 'react-chrono';

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
    cardSubtitle: '1.5rem',
    cardText: '10rem',
  };

  const timelineColors = {
    primary: '#609966',
    secondary: '#40513B',
    cardBgColor: '#609966',
    cardForeColor: '#40513B',
    titleColor: '#609966',
  };
  return (
    <div id="experience">
      {/* <div id="timeline">
        <Chrono items={items} slideShow mode="VERTICAL" theme={timelineColors} fontSizes={timelineFontSizes} hideControls lineWidth={5} activeItemIndex={-1} useReadMore={false} />
      </div> */}
      <div style={{ width: '1000px', height: '1000px' }}>
        <Chrono items={items} mode="VERTICAL" slideshow theme={timelineColors} fontSizes={timelineFontSizes} hideControls lineWidth={5} />
      </div>
    </div>
  );
}
export default Experience;
