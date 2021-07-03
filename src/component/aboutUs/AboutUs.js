import React, { Component } from "react";

import js from "../../assets/images/brand.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div id="about" class="container-fluid">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2>About Jivan Sangini</h2>
              <h4>
                Jivan Sangini is brand we have newly launched. Currently we are
                focusing on lingeries. We are manifacturer of ladies under
                garment. We are deals with bra, panty and sleep. Shortly a time
                we are making root distrubuter network in India. We will
                starting manifacturing of mens under garment and hosiery
                product.
              </h4>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-sm-4">
              <img src={js} alt="JS" width="100%" />
            </div>
            <div class="col-sm-8">
              <h2>Contact US:</h2>
              <br />
              <h4>
                <strong>Office address:</strong> Shop no: 1534, RUI MANDAI,
                SADAR BAZAR, DELHI. Pin: 110006
              </h4>
              <h4>
                <strong>Customer care number:</strong> 8090100742
              </h4>
              <h4>
                <strong>Customer care Email:</strong>{" "}
                <a href="mailto:Jivansangini.customercare@gmail.com">
                  Jivansangini.customercare@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
