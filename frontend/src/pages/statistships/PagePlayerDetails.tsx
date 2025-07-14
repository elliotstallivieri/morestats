import React from "react";
import HomeButton from "../../components/HomeButton";
import NavBar from "../../components/NavBar";
import { getPlayerDataExample } from "../../static_data/StatistshipData";
import usePagePlayerDetails from "./usePagePlayerDetails";

const PagePlayerDetails: React.FC = () => {
  const buttons: [string, () => void][] = [
    ["Players", () => (window.location.href = "/")],
    ["Teams", () => (window.location.href = "/morestats")],
    ["Champions", () => (window.location.href = "/statistships")],
  ];
  const player = getPlayerDataExample();
  //const {player} = usePlayer(playerId || ""); // for later use with real API call
  //console.log("--PAGE--Player data:", player);
  const { playerStats } = usePagePlayerDetails({
    playerId: player.id,
    PlayerTeam: player.team,
    playerPosition: player.position,
  });
  //console.log("--PAGE-- PLAYER STATS:", playerStats);
  return (
    <div className="statistships-welcome-root">
      <div className="statistships-welcome-header">
        <HomeButton />
        <NavBar buttons={buttons} />
      </div>
      <h1>{player.name}</h1>
      <div>
        <img src="\FAKER.webp" />
      </div>
      <div>
        <h2>Total Stats</h2>
        <p>Team: {player.team}</p>
        <p>Total Games: {playerStats.gameTotal}</p>
        <p>Total Wins: {playerStats.winTotal}</p>
        <p>Blue Side Games: {playerStats.blueSideTotal}</p>
        <p>Blue Side Wins: {playerStats.blueSideWinTotal}</p>
        <p>Red Side Games: {playerStats.gameTotal - playerStats.blueSideTotal}</p>
        <p>Red Side Wins: {playerStats.winTotal - playerStats.blueSideWinTotal}</p>
        <p>Total Kills: {playerStats.kda[0]}</p>
        <p>Total Deaths: {playerStats.kda[1]}</p>
        <p>Total Assists: {playerStats.kda[2]}</p>
        <p>Games with perfect KDA: {playerStats.perfectKDATotal}</p>
        <p>Total First Blood: {playerStats.firstBloodTotal}</p>
      </div>
      <div>
        <h2>Ratio</h2>
        <p>Average KDA : {playerStats.kda[0]} / {playerStats.kda[1]} / {playerStats.kda[2]}</p>
        <p>Win Rate: {playerStats.winRate}%</p>
        <p>Side Play Rate: {playerStats.blueSidePlayRate}% Blue - {playerStats.redSidePlayRate}% Red</p>
        {playerStats.blueSideTotal!=0 && <p>Blue Side Win Rate: {playerStats.blueSideWinRate}%</p>}
        {playerStats.redSidePlayRate!=0 && <p>Red Side Win Rate: {playerStats.redSideWinRate}%</p>}
        <p>Average Game Duration: {playerStats.averageGameDuration}</p>
        <p>Average Damage Share: {playerStats.damageShare}%</p>
        <p>First Blood Rate: {playerStats.firstBloodRate}%</p>
        <p>First to 6 Rate: {playerStats.firstTo6Rate}%</p>
        <p>Perfect KDA Rate: {playerStats.perfectKDARate}%</p>
      </div>
    </div>
  );
};

export default PagePlayerDetails;
