import data from "../data/playerInfo.json";
import playerStatistics from "../data/playerStatistics.json";
import { Skill } from "./Skills";
export interface Player_Info {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  team: {
    id: string;
    name: string;
    slug: string;
    jerseyNumber: number;
    sport: {
      name: string;
      slug: string;
    };
    tournament: {
      name: string;
      slug: string;
      category: {
        name: string;
        slug: string;
        id: string;
        sport: {
          name: string;
          slug: string;
        };
      };
      uniqueTournament: {
        name: string;
        slug: string;
        category: {
          name: string;
          slug: string;
          id: string;
          sport: {
            name: string;
            slug: string;
          };
        };
        id: string;
        displayInverseHomeAwayTeams: boolean;
      };
    };
    primaryUniqueTournament: {
      name: string;
      slug: string;
      category: {
        name: string;
        slug: string;
        id: string;
        flag: string;
        alpha2: string;
        sport: {
          name: string;
          slug: string;
        };
      };
    };
    country: {
      id: string;
      name: string;
    };
  };
  position: string;
  height: number;
  preferredFoot: string | null;
  dateOfBirthTimestamp: number;
  contractUntilTimestamp: number;
  proposedMarketValue: number;
  proposedMarketValueRaw: {
    value: number;
    currency: string;
  };
  nationality: {
    id: string;
    name: string;
  };
}

export interface Player_Model {
  id: string;
  name: string;
  teamId: string;
  eventId: string;
  isStarter: boolean;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  tackles: number;
  shotsOnTarget: number;
}

export interface Player_Gamme {
  player_id: number;
  player_name: string;
  player_nunmber: number;
  player_defense_score: number;
  player_skills: Skill[];
}

export const player_game: Player_Gamme[] = [
  {
    player_id: 1,
    player_name: "Ronaldo",
    player_nunmber: 9,
    player_defense_score: 9,
    player_skills: [
      { skill_id: 1, skill_name: "Neymar Rainbow Flick", skill_point: 6 },
      { skill_id: 2, skill_name: "El Tornado", skill_point: 6 },
      { skill_id: 3, skill_name: "Waka Waka", skill_point: 5 },
      { skill_id: 4, skill_name: "Sombrero Flick", skill_point: 5 },
      { skill_id: 5, skill_name: "Okocha Sombrero Flick", skill_point: 4 },
    ],
  },
];

export const playerStatistics_data: Player_Model[] =
  playerStatistics.players as Player_Model[];
export const data_player: Player_Info = data.data.player as Player_Info;
