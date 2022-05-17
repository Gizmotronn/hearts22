import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import tw from "../assets/fans/thomasw.jpeg";
import awf from "../assets/fans/aidanwf.jpeg";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={tw} />
          <p className="legend"> Melbourne City gave me purpose when I had none, I met the best people in the world at this club and it’s the best thing that’s ever happened to me. My life revolves around Melbourne City and I wouldn’t have it any other way.</p>
        </div>
        <div>
            <img src={awf} />
            <p className="legend">Was a Victory fan and unashed to say so - was at both the 6-0 and 1-0 finals v Adelaide. But jumped on board for Heart's first season.
Was living almost three hours from Melbourne and struggled to get to Victory games, didn't know the team inside out like mates who were regulars. Shifted to within two hours of Melbourne a few months before Heart started playing, meaning I could get to a few more at AAMI.
Couple that with Dutch family heritage and Sibon, Worm and JvS in the squad. Williams became a favourite pretty quick. Liked the kit a bunch too, wish we still played in red stripes.</p>
        </div>
      </Carousel>
    );
  }
}