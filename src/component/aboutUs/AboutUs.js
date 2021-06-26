import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div id="about" class="container-fluid">
          <div class="row">
            <div class="col-sm-8">
              <h2>About Jivan Sangini</h2>
              <br />
              <h4>
                Jivan Sangini is brand we have newly launched. Currently we are focusing on lingeries.  
              </h4>
              <br />
              <p>
                Jivan Sangini mainly focused on "Comfort First" and also we are dedicated 
                to provide highest quality of our product at lowest price.
                Everyday living. Be unique, be brave, be divine. Quality never goes out of style. Explore your true style.
              </p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-grey">
          <div class="row">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div class="col-sm-8">
              <h2>Contact US:</h2>
              <br />
              <h4>
                <strong>MISSION:</strong> Our mission lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </h4>
              <br />
              <p>
                <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
