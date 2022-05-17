import React from "react";
import styled from "styled-components";
import GIF from "../assets/Home Video.mp4";
import Passion from "../assets/Macca/Passion.png";

const VideoContainer = styled.div`
    width: 100%;

    video{
        height: auto;
        width: 100%
    }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <img src={Passion} />
            {/*<video src={GIF} type="video/mp4" autoPlay muted loop />*/}
        </VideoContainer>
    );
}

export default CoverVideo;