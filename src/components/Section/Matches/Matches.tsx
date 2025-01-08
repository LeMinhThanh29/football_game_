import React from "react";
import MatchesList from "../../Matches/MatchesList";
import { events } from "../../../model/Matches";

const Matches = () => {
  return (
    <section>
      <MatchesList matches={events} />
    </section>
  );
};

export default Matches;
