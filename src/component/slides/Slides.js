import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../../assets/images/dulhan-3003.jpg";
import sec from "../../assets/images/love-3303.jpg";
import third from "../../assets/images/shilpa-1001.jpg";
import forth from "../../assets/images/lovender-3003.jpg";
import "./styles.scss";

class Slides extends Component {
  render() {
    return (
      //Routing for navigation
      <div className="carousel-wrapper">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={first} alt="Dulhan" />
            <Carousel.Caption>
              <h3><strong>Dulhan</strong></h3>
              <p>Price: 172 Rs/-</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sec} alt="Love" />
            <Carousel.Caption>
              <h3><strong>Love</strong></h3>
              <p>Price: 203 Rs/-</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={third} alt="Shilpa" />
            <Carousel.Caption>
              <h3><strong>Shilpa</strong></h3>
              <p>Price: 30 Rs/-</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={forth} alt="Lovender" />

            <Carousel.Caption>
              <h3><strong>Lovender</strong></h3>
              <p>Price: 71 Rs/-</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slides;
