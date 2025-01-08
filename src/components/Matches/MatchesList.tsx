import React, { useMemo } from "react";
import styles from "./scss/MatchesList.module.scss";
import classNames from "classnames/bind";
import { Event_Model, MatchStatus } from "../../model/Matches";
import { convertTimestampToDayMonth } from "../../helper/DateTimeTranslate";
import { playerStatistics_data } from "../../model/Player";
import { calculatePlayerRating } from "../../helper/Calculate";
import { bench } from "../../assets/icons";
const cx = classNames.bind(styles);
interface Matches_Event_Model {
  matches: Event_Model[];
}
const MatchesList = (props: Matches_Event_Model) => {
  const { matches } = props;
  const checkStatus = (type: string): MatchStatus | undefined => {
    switch (type) {
      case "finished":
        return "FT";
      case "afterfullTime":
        return "AFT";
      case "penaltyshootout":
        return "PS";
      default:
        return undefined;
    }
  };

  const checkWinnerLoser = useMemo(
    () => (value_matches: Event_Model) => {
      const isHomeWinner =
        value_matches.homeScore.current > value_matches.awayScore.current;
      const isAwayWinner =
        value_matches.awayScore.current > value_matches.homeScore.current;

      return (
        <>
          <div
            className={cx("matches_list_td_result_ratio_item", {
              winner: isHomeWinner,
            })}
          >
            <p>{value_matches.homeScore.current}</p>
          </div>
          <div
            className={cx("matches_list_td_result_ratio_item", {
              winner: isAwayWinner,
            })}
          >
            <p>{value_matches.awayScore.current}</p>
          </div>
        </>
      );
    },
    []
  );
  const checkRatingScore = (ratingScore: number): string => {
    if (ratingScore >= 8) {
      return "good"; // Điểm từ 8 trở lên
    } else if (ratingScore >= 5) {
      return "middling"; // Điểm từ 5 đến 7
    } else {
      return "poor"; // Điểm dưới 5
    }
  };

  const player_inMatch = useMemo(
    () => (value_matches: Event_Model) => {
      const data = playerStatistics_data.find(
        (value_find) => value_find.eventId == value_matches.id
      );

      if (data === undefined) {
        return;
      }
      const result_rating = calculatePlayerRating(data);
      return (
        <div className={cx("player_inMatch")}>
          {data.isStarter ? (
            <p className={cx(checkRatingScore(result_rating))}>
              {result_rating}
            </p>
          ) : (
            <img src={bench} alt="" />
          )}
        </div>
      );
    },
    []
  );

  return (
    <div className={cx("matches_list_container")}>
      <h1>Matches</h1>
      <table className={cx("matches_list_container_table")}>
        <tbody className={cx("matches_list_container_table_body")}>
          {matches.map((value_matches, index_matches) => (
            <tr
              className={cx("matches_list_container_table_body_tr")}
              key={index_matches}
            >
              <td className={cx("matches_list_td_time")}>
                <p>
                  {convertTimestampToDayMonth(value_matches.startTimestamp)}
                </p>
                <span>{checkStatus(value_matches.status.type)}</span>
              </td>
              <td className={cx("matches_list_td_team")}>
                <div className={cx("matches_list_td_team_home")}>
                  <img
                    src={`https://img.uniscore.com/football/team/$%7Bdecode(${value_matches.homeTeam.id})%7D/image/small`}
                    alt=""
                  />
                  <p
                    className={cx("home", {
                      winner:
                        value_matches.homeScore.current >
                        value_matches.awayScore.current,
                    })}
                  >
                    {value_matches.homeTeam.name}
                  </p>
                </div>
                <div className={cx("matches_list_td_team_alway")}>
                  <img
                    src={`https://img.uniscore.com/football/team/$%7Bdecode(${value_matches.awayTeam.id})%7D/image/small`}
                    alt=""
                  />
                  <p
                    className={cx("away", {
                      winner:
                        value_matches.awayScore.current >
                        value_matches.homeScore.current,
                    })}
                  >
                    {value_matches.awayTeam.name}
                  </p>
                </div>
              </td>
              <td className={cx("matches_list_td_result")}>
                <div className={cx("matches_list_td_result_ratio")}>
                  <div className={cx("matches_list_td_result_ratio_result")}>
                    {checkWinnerLoser(value_matches)}
                  </div>

                  <div className={cx("matches_list_td_result_rating")}>
                    {player_inMatch(value_matches)}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesList;
