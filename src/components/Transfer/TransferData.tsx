import React from "react";
import styles from "./scss/TransferData.module.scss";
import classNames from "classnames/bind";
import { convertTimestampToDate } from "../../helper/DateTimeTranslate";
import { LIST_TransferData } from "../../model/Transfer";
const cx = classNames.bind(styles);

const TransferData = (props: LIST_TransferData) => {
  const { data } = props;
  return (
    <table className={cx("transfer_data_table")}>
      <tbody>
        {data.map((value_club_transfer, index) => (
          <tr className={cx("transfer_data_table_tr")} key={index}>
            <td className={cx("transfer_data_table_td")}>
              <div className={cx("transfer_data_table_td_left")}>
                <img src={value_club_transfer.club_logo} alt="" />
                <div className={cx("transfer_data_table_td_left_content")}>
                  <p>{value_club_transfer.club_name}</p>
                  <span>
                    {convertTimestampToDate(value_club_transfer.date_transfer)}
                  </span>
                </div>
              </div>
            </td>
            <td className={cx("transfer_data_table_td_infomation")}>
              <div className={cx("transfer_data_table_td_right")}>
                <span>-</span>
                <p>End of loan</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransferData;
