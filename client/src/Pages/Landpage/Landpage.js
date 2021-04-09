import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./landpage.css";
import { Link } from "@material-ui/core";
const Landpage = () => {
  // setInterval(() => {

  // }, 3000);
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000} style={{ height: "550px" }}>
          <img
            className="d-block w-100"
            src="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/optim/i/edit/ne/2019/02/Cryptomonnaie%20Illustration%20C%20620__w630.jpg"
            alt="First slide"
            height="550px"
          />
          <Carousel.Caption>
            <a href="/market">
              {" "}
              <h3 style={{ color: "white" }}>Cryptocurrency Market</h3>{" "}
            </a>

            <p>
              {" "}
              Get the cryptocurrency market overview — bitcoin and altcoins,
              coin market cap, prices and charts.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000} style={{ height: "550px" }}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/vecteurs-libre/marche-du-graphique-boursier-tableau-finances-entreprise-croissance-bleue-banque-ligne-donnees-obligations_333792-77.jpg"
            alt="Second slide"
            height="550px"
          />
          <Carousel.Caption>
            <a href="/news">
              {" "}
              <h3 style={{ color: "white" }}>News</h3>
            </a>
            <p>
              {" "}
              Cryptocurrency, Bitcoin, Ethereum, Lightcoin, Ripple, News and
              Rates on Cryptocurrency.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*slide end*/}
      <div class="image-aboutus-banner" style={{ margintop: "70px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="lg-text" style={{ color: "#111D5E" }}>
                About Us
              </h1>
              <p
                class="image-aboutus-para"
                style={{ color: "#153E90", fontSize: "17px" }}
              >
                XX delivers community insights to crypto investors, funds, and
                exchanges. <br />
                Through research applications and data, get real-time insights
                that help make informed crypto investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landpage;
