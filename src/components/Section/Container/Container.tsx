import React from "react";
import styles from "./scss/Container.module.scss";
import classNames from "classnames/bind";
import Transfer from "../../Transfer/Transfer";
const cx = classNames.bind(styles);
const Container = () => {
  const data_chart = [0, 22, 44, 66, 50, 33, 66, 22];
  return (
    <section className={cx("section_container")}>
      <Transfer data_chart={data_chart} />
    </section>
  );
};

export default Container;
