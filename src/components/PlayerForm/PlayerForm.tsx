import React from "react";
import styles from "./scss/PlayerForm.module.scss";
import classNames from "classnames/bind";
import { useForm, Resolver } from "react-hook-form";
import { Player_Gamme } from "../../model/Player";
import { random5Skills } from "../../model/Skills";
import { useContextStore } from "../../context/Context";
const cx = classNames.bind(styles);
type FormValues = {
  player_name: string;
  player_number: number;
};
const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.player_name && values.player_number ? values : {},
    errors: {
      ...(values.player_name
        ? {}
        : {
            player_name: {
              type: "required",
              message:
                "Please enter the required information for Player Name to proceed.",
            },
          }),
      ...(values.player_number
        ? {}
        : {
            player_number: {
              type: "required",
              message:
                "Please enter the required information for Player Number to proceed.",
            },
          }),
    },
  };
};
const PlayerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const context = useContextStore();
  const onSubmit = (data: FormValues) => {
    if (!context) {
      return;
    }
    const player_data_submit: Player_Gamme = {
      player_id: Math.random() * 100,
      player_name: data.player_name,
      player_nunmber: data.player_number,
      player_defense_score: Math.floor(Math.random() * 5) + 1,
      player_skills: random5Skills(),
    };
    return context.dispatch({
      type: "ADD_PLAYER",
      payload: player_data_submit,
    });
  };

  return (
    <div className={cx("player_form_container")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("form_column")}>
          <label>Player Name:</label>
          <div className={cx("form_column_input")}>
            <input {...register("player_name")} />
            {errors.player_name && (
              <p style={{ color: "red" }}>{errors.player_name.message}</p>
            )}
          </div>
        </div>
        <div className={cx("form_column")}>
          <label>Player Number:</label>
          <div className={cx("form_column_input")}>
            <input type="number" {...register("player_number")} />
            {errors.player_number && (
              <p style={{ color: "red" }}>{errors.player_number.message}</p>
            )}
          </div>
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;
