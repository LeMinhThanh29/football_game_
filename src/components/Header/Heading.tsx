import React from "react";
import Navigation from "../Navigation/Navigation";
import classNames from "classnames/bind";
import styles from "./scss/Heading.module.scss";
const cx = classNames.bind(styles);
const Heading = () => {
  return (
    <header className={cx("header_container")}>
      <Navigation />
    </header>
  );
};

export default Heading;
