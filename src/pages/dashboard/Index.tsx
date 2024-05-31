import React from "react";
import HeaderField from "../../container/header/Index";
import QRContainer from "./components/QRContainer";
// import { Player } from "@lottiefiles/react-lottie-player";
// import ANIMATION from "../../animation";
const Dashboard = () => {
  return (
    <>
      <HeaderField />
      <QRContainer />
      {/* <Player
        autoplay
        src={ANIMATION.done}
        style={{ height: "300px", width: "300px" }}
      ></Player> */}
    </>
  );
};

export default Dashboard;
