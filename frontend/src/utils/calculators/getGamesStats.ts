import { Game } from "../../types/Game";
import { PlayerGameStats } from "../../types/PlayerGameStats";

export function getGamesStats(
  gameData: Game[],
  playerId: number,
  playerTeam: string,
  playerPosition: number
): PlayerGameStats {
  const gameCount = gameData.length;
  //console.log("gameCount: ", gameCount);
  if (gameCount === 0) {
    return {} as PlayerGameStats; // Return an empty object if no games are found
  } else {
    let gameStats: PlayerGameStats = {
      playerId: playerId,
      playerName: "",

      gameTotal: gameCount,
      winTotal: 0,
      blueSideTotal: 0,
      blueSideWinTotal: 0,
      kda: [0, 0, 0], // [kills, deaths, assists]
      totalGameDuration: 0, // in seconds
      firstBloodTotal: 0, // total first bloods taken by the player
      perfectKDATotal: 0,
      playedChampionsList: [],

      winRate: 0, // %
      blueSidePlayRate: 0,
      redSidePlayRate: 0,
      blueSideWinRate: 0,
      redSideWinRate: 0,
      averageGameDuration: "", // in seconds
      averageKDA: [],
      perfectKDARate: 0,
      damageShare: 0,
      firstBloodRate: 0,
      firstTo6Rate: 0,
      uniqueChampionsCount: 0,
      uniqueChampionsList: [],
    };
    let totalDamageShare = 0; // sum of all damage shares
    for (let i = 0; i < gameCount; i++) {
      const game = gameData[i];

      // find the player's team
      const playerTeamNumber = gameData[i].teamBlue == playerTeam ? 0 : 1;

      // count raw stats
      if (game.winner === (playerTeamNumber === 0)) {
        gameStats.winTotal += 1;
        if (game.teamBlue === playerTeam) {
          gameStats.blueSideTotal += 1;
          if (game.winner === true) {
            gameStats.blueSideWinTotal += 1;
          }
        }
      }
      gameStats.totalGameDuration += game.gameDuration;
      gameStats.kda[0] += game.kda[playerTeamNumber][playerPosition][0]; // kills
      gameStats.kda[1] += game.kda[playerTeamNumber][playerPosition][1]; // deaths
      gameStats.kda[2] += game.kda[playerTeamNumber][playerPosition][2]; // assists
      if (game.kda[playerTeamNumber][playerPosition][1] === 0) {
        gameStats.perfectKDATotal += 1;
      }
      let teamDamage = 0;
      for (let j = 0; j < 5; j++) {
        teamDamage += game.damageDealt[playerTeamNumber][j];
      }
      totalDamageShare +=
        game.damageDealt[playerTeamNumber][playerPosition] / teamDamage; // damage share
      teamDamage = game.damageDealt[playerTeamNumber].reduce(
        (sum, dmg) => sum + dmg,
        0
      );
      gameStats.playedChampionsList.push(
        game.champions[playerTeamNumber][playerPosition]
      );
    }

    // calulate other stats
    gameStats.winRate = Number(
      ((gameStats.winTotal / gameCount) * 100).toFixed(2)
    );
    gameStats.blueSidePlayRate = Number(
      ((gameStats.blueSideTotal / gameCount) * 100).toFixed(2)
    );
    gameStats.redSidePlayRate = Number(
      (100 - gameStats.blueSidePlayRate).toFixed(2)
    );
    gameStats.blueSideWinRate =
      gameStats.blueSideTotal === 0
        ? 0
        : Number(
            (
              (gameStats.blueSideWinTotal / gameStats.blueSideTotal) *
              100
            ).toFixed(2)
          );
    gameStats.averageKDA = [
      Number((gameStats.kda[0] / gameCount).toFixed(2)),
      Number((gameStats.kda[1] / gameCount).toFixed(2)),
      Number((gameStats.kda[2] / gameCount).toFixed(2)),
    ];
    gameStats.perfectKDARate = Number(
      ((gameStats.perfectKDATotal / gameCount) * 100).toFixed(2)
    );
    gameStats.damageShare = Number(
      ((totalDamageShare / gameCount) * 100).toFixed(2)
    ); // average damage share per game
    gameStats.uniqueChampionsList = Array.from(
      new Set(gameStats.playedChampionsList)
    );
    gameStats.uniqueChampionsCount = gameStats.uniqueChampionsList.length;

    // calculate average game duration and format it as "MM:SS"
    const averageGameDurationSeconds =
      (gameStats.totalGameDuration / gameCount) % 60;
    const averageGameDurationMinutes = Math.round(
      gameStats.totalGameDuration / gameCount / 60
    );
    gameStats.averageGameDuration =
      averageGameDurationMinutes.toString() +
      ":" +
      (averageGameDurationSeconds < 10 ? "0" : "") +
      averageGameDurationSeconds.toString();
    //console.log("averageGameDuration: ", gameStats.averageGameDuration);
    return gameStats;
  }
}
