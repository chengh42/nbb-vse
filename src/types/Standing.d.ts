import {Team} from "./Team";

export type Standing = {
  id: string;
  nummer: string;
  version: string;
  gewijzigd: string;
  seizoen: string;
  soort: string;
  aantal_teams: number;
  stand: Array<Team>;
};
