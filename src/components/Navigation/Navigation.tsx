import React from "react";
import { Icon_Football, logo, user } from "../../assets/icons";
import classNames from "classnames/bind";
import styles from "./scss/Navigation.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Navigation = () => {
  return (
    <nav className={cx("navigation_container")}>
      <ul className={cx("navigation_list_item")}>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <Link to="/game" className={cx("navigation_footbal_button")}>
            <img src={Icon_Football} alt="" />
            <p>Football</p>
          </Link>
        </li>
        <li>
          <div className={cx("navigation_user_button")}>
            <img src={user} alt="" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
