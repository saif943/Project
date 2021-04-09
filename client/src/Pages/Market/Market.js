import { React, useEffect, useState } from "react";
import "./Market.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "./Loading";
const axios = require("axios");

const Market = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    setIsLoading(true);
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    axios
      .get(url)
      .then((response) => {
        setStocks(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="row mt-5">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="col">
          <div className="carddd bg-default shadow">
            {/* <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Card tables</h3>
            </div> */}
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">Price (USD)</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Total Vol</th>
                    <th scope="col" style={{ width: "20%" }}>
                      Chg (24H)
                    </th>
                    <th scope="col" style={{ width: "200px" }}>
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.slice(0, 15).map((el) => (
                    <tr>
                      <th scope="row">
                        <div className="media align-items-center">
                          <a href="#" className="avatar rounded-circle mr-3">
                            <img src={el.image} />
                          </a>

                          <div className="media-body">
                            <Link to={`/market/coin/${el.id}`} key={el.id}>
                              <span className="mb-0 text-sm">{el.name} </span>
                            </Link>
                          </div>
                        </div>
                      </th>

                      <td>
                        {el.current_price} <span>USD</span>
                      </td>
                      <td>
                        <span className="badge badge-dot mr-4">
                          <i className="bg-success" />{" "}
                          <span>{el.market_cap}</span>
                        </span>
                      </td>
                      <td>
                        <div className="avatar-group">{el.total_volume}</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">
                            {el.price_change_percentage_24h}%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <p>{el.last_updated}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
