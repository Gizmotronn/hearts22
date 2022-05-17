import React from "react";
import styled from "styled-components";
import l1 from "../../../assets/fans/liam1.jpg"

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
            <img src={l1} />
        </VideoContainer>
    );
}

export default CoverVideo;