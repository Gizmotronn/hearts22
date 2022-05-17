import React, { useLayoutEffect, useRef } from "react";
import styled from 'styled-components';
import DrawSvg from './Roadmap/DrawSvg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
      text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

    return (
        <Section>
            <Title>What it means....TO US</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item> {/* Empty item */}
                        <RoadMapItem addToRef={addToRefs} title="Clancy Day" subtext="I wanted to get into the a league as I’d grown up in a very Aussie rules dominated house so when I was about 10 me and my dad went along to watch a Melbourne derby not knowing who I would support. Victory ended up winning that game and but for some reason I felt a connection to the city boys and have supported ever since" />
                        <RoadMapItem addToRef={addToRefs} title="Harry Crosby" subtext="City means a lot to me. It’s the favorite part of my life singing and losing my voice fur the City boys. Get it done" />
                        <RoadMapItem addToRef={addToRefs} title="Carmelo Ditka" subtext="This club gave me nothing but love. I’ve given this club nothing but love also. I’ll never ever stop loving or supporting my club till the day I die. There’s so many amazing people at this club willing to get to know there fans and it’s always been such a family based club. The friends I’ve made and the life long people you see every week. We all want the same thing. To see us thrive week in week out." />
                        <RoadMapItem addToRef={addToRefs} title="Trevor Giacometti" subtext="Love watching the soccer and city boys. They put in every week and give their best. Best. Team. Ever." />
                        <RoadMapItem addToRef={addToRefs} title="Lisa Holland" subtext="I have been a mad sports girl all my life but the one sport I didn’t like was soccer. My family members who loved it could not convince me. I was invited as a corporate guest three times to that other Melb club and even that did not get me interested. Then one day about 6-7 years ago, I was invited to go and watch Melb City. I wasn’t really interested but went along anyway. That night, watching the City boys, I fell in love with soccer. I am not sure how or why but I just loved it. I then bought a membership and a reserved seat and have been going to watch the boys ever since. I am so passionate about our team and have loved this journey. ❤️🤍💙" />
                        <RoadMapItem addToRef={addToRefs} title="Chelsea Herter" subtext="watching the boys, screaming at the top of my lungs, having a good laugh with my mates as well as the mates i’ve met at the game. the football is my life & genuinely saved me when i was at my lowest. this club means the absolute world to me, always for melbourne." />
                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap;
