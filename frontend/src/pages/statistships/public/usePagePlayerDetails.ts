//import { useQuery } from '@tanstack/react-query';
import { getPlayerGameDataExample } from "../../../static_data/StatistshipData";
import { Game } from "../../../types/Game";
import { PlayerGameStats } from "../../../types/PlayerGameStats";
import { getGamesStats } from "../../../utils/calculators/getGamesStats";

interface usePagePlayerDetailsProps {
  playerId?: number;
  PlayerTeam?: string; // position in the game, e.g., 0 for top, 1 for jungle, etc.
  playerPosition?: number; // optional, if you want to filter by position
  event?: string;
}
// ad params for filtering the games : opponents, specific champ, etc.

function usePagePlayerDetails(
  options: Partial<usePagePlayerDetailsProps> = {}
): {
  playerStats: PlayerGameStats;
  gameCount: number;
} {
  const { playerId, PlayerTeam: playerTeam, playerPosition } = options;

  const gameData = getPlayerGameDataExample(); //TODO: replace with real API call

  const calculatedStats = getGamesStats(
    gameData as Game[],
    playerId || 0,
    playerTeam || "Riot",
    playerPosition || 0,
  );
  //console.log("--HOOK-- calculatedStats:", calculatedStats);

  return { playerStats: calculatedStats, gameCount: gameData.length };
}

export default usePagePlayerDetails;











// for later
/*  type Filters = {
    opponent?: string;
    champion?: string;
    competition?: string;
  };

  type State = {
    filters: Filters;
    filteredGames: Game[];
    winrate: number;
  };
  type Action =
    | { type: "SET_GAMES"; payload: Game[] }
    | { type: "SET_FILTERS"; payload: Filters };
*/
