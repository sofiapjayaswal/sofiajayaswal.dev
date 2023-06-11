import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import portrait from '../img/self-portrait.png';

function Home() {
  return (
    <div id="home">
      <div className="home-text-section">
        <h2>Welcome! My name is...</h2>
        <TypeAnimation
          sequence={[
            'Sofia Jayaswal',
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          speed={0.2}
          style={{ fontSize: '4em', display: 'inline-block', color: '#609966' }}
        />
        <h2>I&apos;m a computer science student at Dartmouth.</h2>
      </div>
      <img src={portrait} alt="" />
    </div>
  );
}
export default Home;
