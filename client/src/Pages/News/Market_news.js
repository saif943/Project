import { React, useEffect, useState } from "react";
import "./MarketNews.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import axios from "axios";
const Market_news = () => {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/global";
    axios
      .get(url)
      .then((response) => {
        setMarket(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(market);
  return (
    <div className="news">
      <section
        class="wow fadeIn animated"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div class="containerr">
          <div class="row">
            {/* <!-- counter --> */}
            <div
              class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
              data-wow-duration="300ms"
              style={{
                visibility: "visible",
                animationDuration: "300ms",
                animationName: "fadeInUp",
              }}
            >
              {" "}
              {/* <i class="fa fa-beer medium-icon"></i>{" "} */}
              <MonetizationOnIcon style={{ width: "50px", height: "50px" }} />
              <span id="anim-number-pizza" class="counter-number"></span>{" "}
              <span
                class="timer counter alt-font appear"
                data-to="980"
                data-speed="7000"
              >
                {market &&
                  market.total_market_cap &&
                  Math.round(market.total_market_cap.btc)}
              </span>
              <p class="counter-title">total_market_cap</p>
            </div>
            {/* <!-- counter --> */}
            <div
              class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
              data-wow-duration="600ms"
              style={{
                visibility: "visible",
                animationDuration: "600ms",
                animationName: "fadeInUp",
              }}
            >
              {" "}
              <TrendingUpIcon style={{ width: "50px", height: "50px" }} />
              <span
                class="timer counter alt-font appear"
                data-to="980"
                data-speed="7000"
              >
                {market &&
                  market.total_volume &&
                  Math.round(market.total_volume.btc)}
              </span>{" "}
              <span class="counter-title">total_volume</span>{" "}
            </div>
            {/* <!-- counter --> */}
            <div
              class="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated"
              data-wow-duration="900ms"
              style={{
                visibility: "visible",
                animationDuration: "900ms",
                animationName: "fadeInUp",
              }}
            >
              {" "}
              <AutorenewIcon style={{ width: "50px", height: "50px" }} />
              <span
                class="timer counter alt-font appear"
                data-to="810"
                data-speed="7000"
              >
                {market &&
                  market.market_cap_percentage &&
                  Math.round(market.market_cap_percentage.btc)}
              </span>{" "}
              <span class="counter-title">market_cap_percentage</span>{" "}
            </div>
            {/* <!-- counter --> */}
            <div
              class="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated"
              data-wow-duration="1200ms"
              style={{
                visibility: "visible",
                animationDuration: "900ms",
                animationName: "fadeInUp",
              }}
            >
              {" "}
              <TrendingDownIcon style={{ width: "50px", height: "50px" }} />
              <span
                class="timer counter alt-font appear"
                data-to="600"
                data-speed="7000"
              >
                {market &&
                  market.market_cap_change_percentage_24h_usd &&
                  market.market_cap_change_percentage_24h_usd.toFixed(2)}
                %
              </span>{" "}
              <span class="counter-title">market_cap_change_percentage</span>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market_news;
