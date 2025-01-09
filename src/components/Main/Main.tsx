import React, { ReactNode } from "react";
import styles from "./scss/Main.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
interface Main_Props {
  children: ReactNode;
}
const Main = (props: Main_Props) => {
  return <main className={cx("main_container")}>{props.children}</main>;
};

export default Main;