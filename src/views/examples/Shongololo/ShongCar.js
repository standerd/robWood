import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/shong/sland.jpg"),
    altText: "Departure",
    caption: "Departure"
  },
  {
    src: require("assets/img/shong/srail.jpg"),
    altText: "Departure",
    caption: "Departure"
  },
  {
    src: require("assets/img/shong/slounge.jpg"),
    altText: "Lounge",
    caption: "Lounge"
  },
  {
    src: require("assets/img/shong/scene1.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/shong/scene2.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/shong/scene3.jpg"),
    altText: "Scenery",
    caption: "Scenery"
  },
  {
    src: require("assets/img/shong/pc1.jpeg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/shong/dining.jpg"),
    altText: "Public Cars",
    caption: "Public Cars"
  },
  {
    src: require("assets/img/shong/es1.jpg"),
    altText: "Emerald Suite",
    caption: "Emerald Suite"
  },
  {
    src: require("assets/img/shong/es2.jpg"),
    altText: "Emerald Suite",
    caption: "Emerald Suite"
  },
  {
    src: require("assets/img/shong/gs1.jpg"),
    altText: "Gold Suite",
    caption: "Gold Suite"
  },
  {
    src: require("assets/img/shong/gs2.jpg"),
    altText: "Gold Suite",
    caption: "Gold Suite"
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
