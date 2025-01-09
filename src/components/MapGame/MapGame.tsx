import styles from "./scss/MapGame.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const MapGame = () => {
  return <div className={cx("mapgame_container")}></div>;
};

export default MapGame;
