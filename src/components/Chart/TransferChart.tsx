import React from "react";
import styles from "./scss/TransferChart.module.scss";
import ReactECharts from "echarts-for-react";
import { getChartOption } from "../../config/Chart/Chart";
import classNames from "classnames/bind";
interface Data_TransferChart_Props {
  title: string;
  data: number[];
}
const cx = classNames.bind(styles);

const TransferChart = (props: Data_TransferChart_Props) => {
  const { data, title } = props;
  const option = getChartOption(
    data,
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
  );

  return (
    <div className={cx("transfer_chart")}>
      <h1 className={cx("transfer_chart_title")}>{title}</h1>
      <div className={cx("transfer_chart_body")}>
        <ReactECharts option={option}  className={cx("chart_main")}/>
      </div>
      <div className={cx("transfer_chart_footer")}>
        <div className={cx("trasfer_footer_details")}>
          <span>Current Player Value</span>
          <span>Transfer Free</span>
        </div>
        <div className={cx("trasfer_footer_details_value")}>
          <span> 11.6M $</span>
          <span>(Highest) 66M</span>
        </div>
      </div>
    </div>
  );
};

export default TransferChart;
