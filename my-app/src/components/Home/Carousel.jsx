import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = [
        "images/cseblock.jpg",
        "images/collegeOverview.jpg",
        "images/cvrpic4.jpg",
        "images/cvrpic5.jpg",
    ]
    function createImage(image) {
        return (
            <Carousel.Item >
                <img
                    className="d-block  carouselImage"
                    src={image}
                    alt="First slide"
                />
            </Carousel.Item>
        )

    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>

            {images.map(createImage)}


        </Carousel>
    );
}

export default ControlledCarousel;