import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-white">
        <div className="text-center text-dark p-3">
          © 2021 Copyright:
          <a className="text-dark" href="https://jivansangini.in/">
            www.jivansangini.in
          </a>
        </div>
      </footer>
    );
  }
}
