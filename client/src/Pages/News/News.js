import { React, useEffect, useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import Loading from "../Market/Loading";
import Market_news from "./Market_news";
import "./News.css";

const axios = require("axios");

const News = () => {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url =
      "https://api.lunarcrush.com/v2?data=feeds&key=guk4jhvru89x6509s8qt8";
    axios
      .get(url)
      .then((response) => {
        setFeeds(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(feeds);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="nexs">
          <iframe
            src="https://www.widgets.investing.com/crypto-currency-rates?theme=darkTheme&pairs=945629,997650,1001803,1010773,940810,1010776"
            width="100%"
            height="250"
            frameborder="0"
            allowtransparency="true"
            marginwidth="0"
            marginheight="0"
          ></iframe>

          <Market_news />
          <ul className="timeline">
            {feeds &&
              feeds.map((el) => (
                <li>
                  {/* begin timeline-time */}
                  <div className="timeline-time">
                    {/* <span className="date">today</span> */}
                    <TwitterIcon style={{ width: "50px", height: "50px" }} />
                  </div>
                  {/* end timeline-time */}
                  {/* begin timeline-icon */}
                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>
                  {/* end timeline-icon */}
                  {/* begin timeline-body */}
                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={el.profile_image} alt="" />
                      </span>
                      <span className="username">
                        <a href="javascript:;">{el.display_name}</a> <small />
                      </span>
                      {/* <span className="pull-right text-muted">
                        {el.retweets} retweets
                      </span> */}
                      <div className="timeline-content">
                        <a href={el.url}> See details </a>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <p> {el.body}</p>
                    </div>
                    <div className="timeline-likes">
                      <div className="stats-right">
                        <span className="stats-text">{el.retweets} Shares</span>
                        <span className="stats-text">
                          {el.commented} Comments
                        </span>
                      </div>
                      <div className="stats">
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-danger" />

                          <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1" />
                        </span>
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-primary" />
                          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
                        </span>
                        <span className="stats-total">{el.retweets}k</span>
                      </div>
                    </div>
                    {/* <div className="timeline-footer">
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                      >
                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3" /> Like
                      </a>
                      <a href="javascript:;" className="m-r-15 text-inverse-lighter">
                  <i className="fa fa-comments fa-fw fa-lg m-r-3" /> Comment
                </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                      >
                        <i className="fa fa-share fa-fw fa-lg m-r-3" /> Share
                      </a>
                    </div> */}
                  </div>
                  {/* end timeline-body */}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default News;
