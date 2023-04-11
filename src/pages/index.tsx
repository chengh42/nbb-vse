import Image from "next/image";
import {Inter} from "next/font/google";
import LEAGUES from "../data/LEAGUES.json";
import {useState} from "react";
import {League} from "@/types/League";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const leagues: Array<League> = LEAGUES["Vrouwen Senioren Landelijk"];
  const [league, setLeague] = useState<League>(leagues[0]);

  const LeagueMenu = () => (
    <select
      className="text-lg rounded-lg p-4"
      value={league.id}
      onChange={(ev) => {
        const seletedLeagueId = Number(ev.target.value);
        const seletedLeague = leagues.find(({id}) => seletedLeagueId === id);
        if (seletedLeague) {
          setLeague(seletedLeague);
        } else {
          alert(`Cannot load league for unknown id ${seletedLeagueId}`);
        }
      }}
    >
      {leagues.map(({id, name}) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-3xl py-12">NBB VSE</h1>
      <LeagueMenu />
    </main>
  );
}
