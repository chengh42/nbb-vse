import Image from "next/image";
import {Inter} from "next/font/google";
import LEAGUES from "../data/LEAGUES.json";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});
const leagues = LEAGUES["Vrouwen Senioren Landelijk"];

export default function Home() {
  const [league, setLeague] = useState(leagues[1]);

  const LeagueMenu = () => (
    <select
      className="text-lg rounded-lg p-4"
      value={league.id}
      onChange={(ev) => {
        const seletedLeagueId = Number(ev.target.value);
        setLeague(leagues.find(({id}) => seletedLeagueId === id));
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
