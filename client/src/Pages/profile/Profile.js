import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_coin } from "../../JS/actions/profil";

import Loading from "../Market/Loading";
import "./profile.css";

const Profile = ({ history }) => {
  const user = useSelector((state) => state.userReducer.user);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const dispatch = useDispatch();

  return (
    <div>
      {loadUser ? (
        <Loading />
      ) : (
        <div>
          {user && (
            <div style={{ display: "flex" }}>
              <div class="">
                <div class="col-md-4 mb-3 ml-0">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          class="rounded-circle"
                          width="150"
                        />
                        <div class="mt-3">
                          <p class="text-secondary mb-1">{user.name}</p>
                          <p class="text-muted font-size-sm">{user.email}</p>
                          <div>
                            <p className="prix">Capital:1.000.0000.0000 $</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {user &&
                  user.id_profile.map((x) => (
                    <div className="container-fluid  mx-auto">
                      <div className="card1 py-4 px-4">
                        <div className="row justify-content-start px-3">
                          <div className="image-bg mr-3">
                            {" "}
                            <img
                              className="user-img fit-image"
                              src={x.image}
                            />{" "}
                          </div>{" "}
                          <div className="text-left">
                            <h2>{x.name}</h2>
                            <p className="prix">
                              current_price:{x.marketDataCurrentPriceUsd}
                            </p>
                            <h6 className="prix">
                              total_volume: {x.marketDataTotalVolumeUsd}
                            </h6>{" "}
                            <h6 className="prix">
                              change_percentage:{" "}
                              {x.marketDataAthChangePercentage_usd}%
                            </h6>{" "}
                          </div>
                          <div
                            className="btnn btnn-pink ml-auto"
                            onClick={() =>
                              dispatch(delete_coin(x._id, history))
                            }
                          >
                            SELL
                          </div>
                        </div>

                        <div className="line" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
