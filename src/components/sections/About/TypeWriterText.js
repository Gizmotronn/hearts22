import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../../Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }  
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`

const TypeWriterText = () => {
  return (
      <>
      <Title>
          Hi! I'm Liam, and I built this website to say thanks
          <Typewriter
              options={{
                  autoStart: true,
                  loop: true,
              }}
              onInit={(typewriter) => {
                  typewriter.typeString('<span class="text-1">Jamie</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .pauseFor(1000)
                      .typeString('<span class="text-2">Scotty</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Tommy</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Florin</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Cola</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">PK</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Connor</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Jordy</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Andrew</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Aidan</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Nuuuuu---noooooo</span>')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('<span class="text-2">Lecks</span>')
                      .deleteAll()
                      .start();
              }}
          />
      </Title>
      <SubTitle>Sports means so much to me. 
              <br />
              Some of my biggest heroes have been sports stars. People like Cale Hooker and Jobe Watson were my role models.
              <br />
              While it's definitely fun to see your team win, it's really more about the journey than just the destination. I've grown up supporting Essendon and Everton, so to be in this position as a City supporter is very different for me - I've never experienced success!
              <br />
              What's great about City is that there's a huge community around the entire club. Because of this community, I've been able to directly contribute to Melbourne City in my own small way, being a member of the Talking City podcast and also volunteering for the club on matchday.
              <br />
              The community around the club has supported me in a really difficult part of my life. COVID's impacted everybody, but I can say I speak for every fan when I say that watching you come onto the pitch on gameday wipes away the misery for a beautiful 90 minutes
              <br />
              Jamie, thanks for being a role model and always having your DMs open. You helped me prepare to play in my own grand finals, you were always up for a photo, you've been a perfect representative of the club.
              <br />
              And Cola, thanks for winking at me at the Western game in January. Still buzzing after that. You guys are my heroes.
              <br />
              COME ON YOU CITY BOYS!
      </SubTitle>
      <ButtonContainer>
          <a href="https://la7.dev">
            <Button text="Check out my website" link="https://la7.dev" />
          </a>
      </ButtonContainer>
  </>
  )
}

export default TypeWriterText;