import {useEffect, useState} from "react";
import Image from "next/image";
import {Inter} from "next/font/google";

import {League} from "@/types/League";
import {Standing} from "@/types/Standing";
import {Team as TeamProps} from "@/types/Team";

import LEAGUES from "../data/LEAGUES.json";
import Team from "@/components/Team";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

const LeagueBoard = ({
  isLoading,
  teams,
}: {
  isLoading: boolean;
  teams: TeamProps[] | undefined;
}): JSX.Element => {
  if (isLoading) {
    return <Loader />;
  }
  if (!teams) {
    return <p>Cannot load standing data for this league.</p>;
  }
  return (
    <div>
      {teams.map((team) => (
        <Team key={team.ID} {...team} />
      ))}
    </div>
  );
};

export default function Home() {
  const leagueGroupNames = Object.keys(LEAGUES);
  const [leagueGroupName, setLeagueGroupName] = useState(leagueGroupNames[0]);
  const leagues: Array<League> = LEAGUES[leagueGroupName];
  const [league, setLeague] = useState<League>(leagues[0]);
  const [standing, setStanding] = useState<Standing | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const LeagueGroupMenu = () => (
    <select
      className="text-lg rounded-lg p-4 m-2"
      value={leagueGroupName}
      onChange={(ev) => {
        setLeagueGroupName(ev.target.value);
        setLeague(LEAGUES[leagueGroupName][0]);
      }}
    >
      {leagueGroupNames.map((leagueGroupName) => (
        <option key={leagueGroupName} value={leagueGroupName}>
          {leagueGroupName}
        </option>
      ))}
    </select>
  );

  const LeagueMenu = () => (
    <select
      className="text-lg rounded-lg p-4 m-2"
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

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/standing/${league.id}`)
      .then((res) => res.json())
      .then((data) => {
        setStanding(data);
        setIsLoading(false);
      });
  }, [league]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <LeagueGroupMenu />
        <LeagueMenu />
        <LeagueBoard isLoading={isLoading} teams={standing?.stand} />
      </main>
    </>
  );
}
