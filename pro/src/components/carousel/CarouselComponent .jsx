import React from 'react'
import barriers from "../../../public/img/carousel/barriers.png";
import change from "../../../public/img/carousel/change.png";
import jobcenter from "../../../public/img/carousel/jobcenter.png";
import unveil from "../../../public/img/carousel/unveil.png";
import upcoming from "../../../public/img/carousel/upcoming.png";

import { Carousel } from "react-bootstrap";

export const CarouselComponent = () => {
  return (
    <div>
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={barriers} alt="Barriers" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={change} alt="Change" />
          {/*  <Carousel.Caption>
            <h3>İkinci Slayt Başlığı</h3>
            <p>Bu ikinci slayt açıklamasıdır.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={jobcenter} alt="Jobcenter" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={unveil} alt="Unveil" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={upcoming} alt="Upcoming" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
