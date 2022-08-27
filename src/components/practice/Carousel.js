import React from "react";
import Carousel from "react-material-ui-carousel";

function Example() {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
        },
    ];

    return (
        <Carousel autoPlay="true" animation="slide">
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </>
    );
}

export default Example;
