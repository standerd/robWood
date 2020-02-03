import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/bluetrain/blue1.jpg"),
    altText: "Leaving Cape Town",
    caption: "Leaving Cape Town"
  },
  {
    src: require("assets/img/bluetrain/ext1.jpg"),
    altText: "On Route",
    caption: "On Route"
  },
  {
    src: require("assets/img/bluetrain/ext2.jpg"),
    altText: "On Route",
    caption: "On Route"
  },
  {
    src: require("assets/img/bluetrain/din1.jpg"),
    altText: "Fine Dining",
    caption: "Fine Dining"
  },
  {
    src: require("assets/img/bluetrain/din2.jpg"),
    altText: "Fine Dining",
    caption: "Fine Dining"
  },
  {
    src: require("assets/img/bluetrain/din3.jpg"),
    altText: "Fine Dining",
    caption: "Fine Dining"
  },
  {
    src: require("assets/img/bluetrain/lg1.jpg"),
    altText: "Lounges",
    caption: "Lounges"
  },
  {
    src: require("assets/img/bluetrain/lg2.jpg"),
    altText: "Lounges",
    caption: "Lounges"
  },
  {
    src: require("assets/img/bluetrain/dls1.jpg"),
    altText: "Deluxe Suite",
    caption: "Deluxe Suite"
  },
  {
    src: require("assets/img/bluetrain/dls2.jpg"),
    altText: "Deluxe Suite",
    caption: "Deluxe Suite"
  },
  {
    src: require("assets/img/bluetrain/lxs1.jpg"),
    altText: "Luxury Suite",
    caption: "Luxury Suite"
  },
  {
    src: require("assets/img/bluetrain/lxs2.jpg"),
    altText: "Luxury Suite",
    caption: "Luxury Suite"
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
