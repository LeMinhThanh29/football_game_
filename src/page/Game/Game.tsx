import React from "react";
import MapGame from "../../components/MapGame/MapGame";
import styles from "./scss/Game.module.scss";
import classNames from "classnames/bind";
import PlayerForm from "../../components/PlayerForm/PlayerForm";
const cx = classNames.bind(styles);
const Game = () => {
  return (
    <div className={cx("game_container")}>
      
      <PlayerForm />
      <MapGame />
    </div>
  );
};

export default Game;
