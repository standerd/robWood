import React from "react";


// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/rovos/plaform.jpg"),
    altText: "Departure",
    caption: "Departure"
  },
  {
    src: require("assets/img/rovos/dep1.jpg"),
    altText: "Departure",
    caption: "Departure"
  },
  {
    src: require("assets/img/rovos/station.jpg"),
    altText: "Station",
    caption: "Station"
  },
  {
    src: require("assets/img/rovos/scene.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/rovos/scene1.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/rovos/scene2.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/rovos/pc1.jpg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/rovos/pc2.jpg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/rovos/pc3.jpg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/rovos/pc4.jpg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/rovos/pullmanS.jpg"),
    altText: "Pullman Suite",
    caption: "Pullman Suite"
  },
  {
    src: require("assets/img/rovos/deluxeS.jpg"),
    altText: "Deluxe Suite",
    caption: "Deluxe Suite"
  },
  {
    src: require("assets/img/rovos/royalS.jpg"),
    altText: "Royal Suite",
    caption: "Royal Suite"
  }
];

function CarouselEx() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img
                style={{ width: "100%", maxHeight: "700px" }}
                src={item.src}
                alt={item.altText}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </>
  );
}

export default CarouselEx;
