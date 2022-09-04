import React, {useState} from "react";
import PropTypes from "prop-types";
import Slideshow from "./Slideshow";

const SlideshowContainer = ({images}) => {
    const [imgs] = useState(images.items);
    const [activeIndex, setActiveIndex] = useState(0);

    const moveTo = (newIndex) => {
        if (newIndex === -1) {
            setActiveIndex(imgs.length - 1);
            return;
        }
        if (newIndex === imgs.length) {
            setActiveIndex(0);
            return;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div>
            <Slideshow
                images={imgs}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                moveTo={moveTo}
            />
        </div>
    );
};

SlideshowContainer.propTypes = {
    images: PropTypes.object,
};

export default SlideshowContainer;
