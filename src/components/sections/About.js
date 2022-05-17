import React from "react";
import styled from "styled-components";
import Carousel from "./About/Carousel";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from "../../assets/Fans/1.jpeg";
import image2 from "../../assets/Fans/2.jpeg";
import Slideshow from "./About/Slideshow";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Container = styled.div`
    width: 75%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxx1};
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto
`

const SubText = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
`

const SubTextLight = styled.p`
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body}; 
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
`

const ButtonContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    align-self: flex-start;
`

const About = () => {
    return (
        <Section>
            <Container>
                <Box> <Slideshow /> </Box>
                <Box>
                    <Title>
                        Welcome to Astronaut Training
                    </Title>
                    <SubText>
                        Star Sailors is a series of inter-connected minigames that will turn you into an astronaut with a real world impact!
                    </SubText>
                    <SubTextLight>
                        Vehicles, tools, character traits and other items can be minted here to get you started on the Star Sailors chain. They're stored on an ERC-721 contract, while we'll be integrating Solana and other major chains shortly.
                    </SubTextLight>
                    <ButtonContainer>
                        <ThemeProvider theme={dark}>
                            <Button text="Join our Discord" link='#' />
                        </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About;