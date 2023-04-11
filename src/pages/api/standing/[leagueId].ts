import type {NextApiRequest, NextApiResponse} from "next";
import {Standing} from "@/types/Standing";

async function fetchStanding(leagueId: number): Promise<Standing> {
  const url = `http://db.basketball.nl/db/json/stand.pl?cmp_ID=${leagueId}`;
  process.stdout.write(`[NBB API] REQUEST: fetching ${url} ...\n`);
  const response = await fetch(url, {}).then((res) => res.json());
  process.stdout.write(
    "[NBB API] RESPONSE: " + JSON.stringify(response) + "\n"
  );
  return response as Standing;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standing>
) {
  const {leagueId} = req.query;
  const standing = await fetchStanding(Number(leagueId));
  res.status(200).json(standing);
}
