import React from "react";
import PlayerInfo from "../../Player/PlayerInfo";
import { data_player } from "../../../model/Player";
import classNames from "classnames/bind";
import styles from "./scss/Info.module.scss";
const cx = classNames.bind(styles);
const Info = () => {
  return (
    <section className={cx("info_container")}>
      <PlayerInfo data={data_player} />
    </section>
  );
};

export default Info;
