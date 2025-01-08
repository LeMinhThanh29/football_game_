import React from "react";
import { Player_Info } from "../../model/Player";
import classNames from "classnames/bind";
import styles from "./scss/PlayerInfo.module.scss";
import {
  calculateAge,
  convertTimestampToDate,
} from "../../helper/DateTimeTranslate";
import {
  Age,
  Foot,
  Football,
  Height,
  Jersey,
  logo_spain,
  star,
} from "../../assets/icons";
interface PlayerInfo_Props {
  data: Player_Info;
}
const cx = classNames.bind(styles);
const PlayerInfo = ({ data }: PlayerInfo_Props) => {
  const url_image = `https://img.uniscore.com/football/player/%7Bdecode${data.id}%7D/image/medium`;
  const url_image_club = `https://img.uniscore.com/football/team/$%7Bdecode${data.team.id}%7D/image/small`;
  const checkData = (data: any) => (!data ? "No Information" : data);

  return (
    <div className={cx("player_info_container")}>
      <div className={cx("player_info_row")}>
        <div className={cx("player_info_left")}>
          <div className={cx("player_info_content")}>
            <img
              src={url_image}
              alt=""
              className={cx("player_info_content_image")}
            />
            <div className={cx("player_info_content_info")}>
              <h1>{checkData(data.name)}</h1>
              <div className={cx("player_info_content_info_club")}>
                <img src={url_image_club} alt="" />
                <div className={cx("player_info_content_info_club_details")}>
                  <p>{checkData(data.team.name)}</p>
                  <span>
                    Contract until{" "}
                    {checkData(
                      convertTimestampToDate(data.contractUntilTimestamp)
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img src={star} alt="" className={cx("player_info_left_star")} />
        </div>
        <div className={cx("player_info_right")}>
          <ul className={cx("player_info_right_table")}>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Nationality
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={logo_spain} alt="" />
                <p>{checkData(data.nationality.name)}</p>
              </div>
            </li>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Date of birth
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={Age} alt="" />
                <div className={cx("player_info_right_table_items_content")}>
                  <p>
                    {checkData(
                      convertTimestampToDate(data.dateOfBirthTimestamp)
                    )}
                  </p>
                  <span>
                    {checkData(calculateAge(data.dateOfBirthTimestamp))} years
                    old
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Height
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={Height} alt="" />
                <p>{checkData(data.height)}</p>
              </div>
            </li>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Preferred foot
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={Foot} alt="" />
                <p>{checkData(data.preferredFoot)}</p>
              </div>
            </li>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Jersey number
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={Jersey} alt="" />
                <p>{checkData(data.team.jerseyNumber)}</p>
              </div>
            </li>
            <li>
              <span className={cx("player_info_right_table_title")}>
                Position
              </span>
              <div className={cx("player_info_right_table_items")}>
                <img src={Football} alt="" />
                <p>{checkData(data.position)}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
