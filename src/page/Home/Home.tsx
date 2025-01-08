import React from "react";

import Hightlight from "../../components/Section/Container/Container";
import Body from "../../components/Section/Matches/Matches";
import Info from "../../components/Section/Info/Info";
import Container from "../../components/Section/Container/Container";
import Matches from "../../components/Section/Matches/Matches";
import classNames from "classnames/bind";
import styles from "./scss/Home.module.scss";
const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("home_container")}>
      <Info />
      <Container />
      <Matches />
    </div>
  );
};

export default Home;
