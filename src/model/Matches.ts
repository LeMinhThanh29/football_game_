import data_matchList from "../data/matchList.json";
export type MatchStatus = 'FT' | 'AFT' | 'PS';  // FT: FullTime, AFT: AfterFullTime, PS: PenaltyShootout

export interface Event_Model {
  id: string;
  homeScore: Score;
  tournament: Tournament;
  homeTeam: Team;
  awayScore: Score;
  awayTeam: Team;
  status: Status;
  winnerCode: number;
  startTimestamp: number;
  stage_id: string;
}

interface Score {
  current: number;
  display: number;
  period1: number;
  period2: number;
  corner: number;
  yellow_card: number;
  red_card: number;
  overTime_score: number;
  penalty_score: number;
}

interface Tournament {
  id: string;
  priority: number;
  name: string;
  slug: string;
  category: Category;
  group_num: number;
}

interface Category {
  name: string;
  slug: string;
  id: string;
  flag: string;
}

interface Team {
  id: string;
  name: string;
  slug: string;
  shortName: string;
}

interface Status {
  code: number;
  description: string;
  type: string;
}
export const events: Event_Model[] = data_matchList.data
  .events as Event_Model[];
