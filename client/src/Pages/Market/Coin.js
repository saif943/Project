import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./coin.css";
import { add_coin } from "../../JS/actions/profil";
const Coin = ({ match, history }) => {
  const [coin, setCoin] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${match.params.id}`;

    axios.get(url).then((res) => setCoin(res.data));
  }, [match.params.id]);
  console.log(coin);
  return (
    <div className="container">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cardd">
              <div className="pathh">
                HOME / Market <a>/ Coin</a>{" "}
              </div>
              <div className="row">
                <div className="col-md-6 text-center align-self-center">
                  {" "}
                  <img
                    className="coin_img"
                    src={coin && coin.image && coin.image.small}
                  />{" "}
                </div>
                <div className="col-md-6 info">
                  <div className="row title">
                    <div className="col">
                      <h2>{coin.name}</h2>
                    </div>
                    <div className="col text-right">
                      <a href="#">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                  </div>
                  <p>{coin && coin.links && coin.links.homepage}</p>{" "}
                  <span className="fa fa-star checked" />{" "}
                  <span className="fa fa-star checked" />{" "}
                  <span className="fa fa-star checked" />{" "}
                  <span className="fa fa-star checked" />{" "}
                  <span className="fa fa-star-half-full" />{" "}
                  <span id="reviews">
                    {coin &&
                      coin.market_data &&
                      coin.market_data.total_volume &&
                      coin.market_data.total_volume.usd}{" "}
                    total_volume
                  </span>
                  <div className="row price">
                    {" "}
                    <label className="radio">
                      {" "}
                      <input
                        type="radio"
                        name="size1"
                        defaultValue="small"
                        defaultChecked
                      />{" "}
                      <span>
                        <div className="row">
                          <big>
                            <b>
                              $
                              {coin &&
                                coin.market_data &&
                                coin.market_data.current_price &&
                                coin.market_data.current_price.usd}
                            </b>
                          </big>
                        </div>
                        <div className="row">
                          {coin &&
                            coin.market_data &&
                            coin.market_data.ath_change_percentage &&
                            coin.market_data.ath_change_percentage.usd}
                          %
                        </div>
                      </span>{" "}
                    </label>{" "}
                    <label className="radio">
                      {" "}
                      <input
                        type="radio"
                        name="size1"
                        defaultValue="large"
                      />{" "}
                      {/* <span>
                        <div className="row">
                          <big>
                            <b>4.4 oz.</b>
                          </big>
                        </div>
                        <div className="row">$21.95</div>
                      </span>{" "} */}
                    </label>{" "}
                  </div>
                </div>
              </div>
              <div className="row lower">
                <div className="col text-right align-self-center">
                  {" "}
                  <button
                    className="btn"
                    style={{ backgroundColor: "green" }}
                    onClick={() =>
                      dispatch(
                        add_coin(
                          {
                            name: coin.name,
                            marketDataTotalVolumeUsd:
                              coin.market_data.total_volume.usd,
                            marketDataCurrentPriceUsd:
                              coin.market_data.current_price.usd,
                            marketDataAthChangePercentage_usd:
                              coin.market_data.ath_change_percentage.usd,
                            image: coin && coin.image && coin.image.small,
                          },
                          history
                        )
                      )
                    }
                  >
                    Buy
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
