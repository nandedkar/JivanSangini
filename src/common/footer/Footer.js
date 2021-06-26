import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f">
              </i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </section>
        </div>

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
