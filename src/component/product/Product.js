import React, { Component } from "react";
import first from "../../assets/images/manvi-1001.jpg";
import sec from "../../assets/images/lilly-1001.jpeg";
import third from "../../assets/images/kaveri-2002.jpg";
import forth from "../../assets/images/saloni-1001.jpg";
import fifth from "../../assets/images/salo-1001.jpg";
import sixth from "../../assets/images/apurva-1001.jpg";
import seventh from "../../assets/images/love-3303.jpg";
import eight from "../../assets/images/shilpa-1001.jpg";

export default class ContactUs extends Component {
  render() {
    return (
      <div id="portfolio" class="container-fluid text-center bg-grey">
        <h2>Portfolio</h2>
        <br />
        <h4>What we have created</h4>
        <div class="row text-center slideanim">
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={first} alt="Paris" width="400" height="300" />
              <p>
                <strong>Manvi</strong>
              </p>
              <p>Price: 19 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={sec} alt="New York" width="400" height="300" />
              <p>
                <strong>Lilly</strong>
              </p>
              <p>Price: 30 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={third} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Kaveri</strong>
              </p>
              <p>Price: 39 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={forth} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Saloni</strong>
              </p>
              <p>Price: 33 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={fifth} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Salo</strong>
              </p>
              <p>Price: 28 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={sixth} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Apurva</strong>
              </p>
              <p>Price: 36 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={seventh} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Love</strong>
              </p>
              <p>Price: 203 Rs/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src={eight} alt="San Francisco" width="400" height="300" />
              <p>
                <strong>Shilpa</strong>
              </p>
              <p>Price: 30 Rs/-</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
