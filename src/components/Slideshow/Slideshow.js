import React from "react";
import PropTypes from "prop-types";
import {
    StyledSlideWrapper,
    StyledImageBox,
    StyledImg,
    StyledButtonLeft,
    StyledButtonRight,
    StyledImageCaption,
} from "./styles";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Slideshow = ({images, activeIndex, moveTo}) => (
    <StyledSlideWrapper>
        <StyledImageBox>
            <StyledImg
                src={images[activeIndex].image}
                alt={images[activeIndex].title}
            />
            <StyledImageCaption>{images[activeIndex].title}</StyledImageCaption>

            <StyledButtonLeft onClick={() => moveTo(activeIndex - 1)}>
                <ArrowCircleLeftIcon />
            </StyledButtonLeft>

            <StyledButtonRight onClick={() => moveTo(activeIndex + 1)}>
                <ArrowCircleRightIcon />
            </StyledButtonRight>
            <StyledImageCaption></StyledImageCaption>
        </StyledImageBox>
    </StyledSlideWrapper>
);

Slideshow.propTypes = {
    images: PropTypes.array,
    activeIndex: PropTypes.number,
    moveTo: PropTypes.func,
};

export default Slideshow;
