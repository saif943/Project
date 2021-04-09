import React from "react";
import { Spinner, Button } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      {/* <Spinner
        animation="border"
        variant="info"
        style={{
          marginTop: "10%",
          width: "200px",
          height: "200px",
          color: "black  ",
        }}
      /> */}
      <Spinner animation="grow" style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

export default Loading;
