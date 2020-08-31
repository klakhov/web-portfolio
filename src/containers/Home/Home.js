import React from 'react';
import {Canvas as StarCanvas} from './canvas/src/js/StarCanvas/Canvas';
import {Canvas as BubbleCanvas} from './canvas/src/js/BubbleCanvas/Canvas';

import Bubbles from '../../components/Bubbles/Bubbles';

import img from './canvas/src/img/bg.png';
import Skills from '../../components/Skills/Skills';

class Home extends React.Component {
  componentDidMount() {
    const starCanvas = new StarCanvas('canvas-pad', 'Hi, I\'m Kirill,\n' +
      'Front-end and Back-end Developer', img);
    setInterval(() => {
      if (starCanvas.displayed) starCanvas.createStar();
    }, 1000);

    const bubbleCanvas = new BubbleCanvas('bubbles', {width: 420, height: 1000});
    setInterval(() => {
      if (bubbleCanvas.displayed) bubbleCanvas.createBubble();
    }, 1000);
  }

  render() {
    return (
      <section className="page">
        <div id="canvas-pad"/>
        <Bubbles>
          <div id="bubbles"/>
        </Bubbles>
        <Skills/>
      </section>
    );
  }
}

export default Home;