"use client";
import styles from "./Carrossel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carrossel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className={styles.carrossel}>
      <div>
        <Slider {...settings}>
          <div>
            <img src="images/figma.svg" alt="figma" />
          </div>
          <div>
            <img src="images/ps.svg" alt="photoshop" />
          </div>
          <div>
            <img src="images/html.svg" alt="html" />
          </div>
          <div>
            <img src="images/css.svg" alt="css" />
          </div>
          <div>
            <img src="images/sass.svg" alt="sass" />
          </div>
          <div>
            <img src="images/js.svg" alt="javascript" />
          </div>
          <div>
            <img src="images/ts.svg" alt="typescript" />
          </div>
          <div>
            <img style={{ height: 64 }} src="images/react.svg" alt="react" />
          </div>
          <div>
            <img style={{ height: 68 }} src="images/node.svg" alt="node" />
          </div>
          <div>
            <img style={{ height: 68 }} src="images/git.svg" alt="git" />
          </div>
          <div>
            <img src="images/wp.svg" alt="wordpress" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carrossel;
