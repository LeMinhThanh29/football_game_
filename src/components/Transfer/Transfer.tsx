import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Transfer.module.scss";
import TransferChart from "../Chart/TransferChart";
import TransferData from "./TransferData";
import { transferData } from "../../model/Transfer";
const cx = classNames.bind(styles);
interface Transfer_Props {
  data_chart: number[];
}
const Transfer = (props: Transfer_Props) => {
  const { data_chart } = props;
  return (
    <div className={cx("transfer_container")}>
      <div className={cx("transfer_row")}>
        <div className={cx("transfer_left")}>
          <TransferChart data={data_chart} title="TRANSFER VALUE" />
        </div>
        <div className={cx("transfer_right")}>
          <TransferData data={transferData.data} />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
