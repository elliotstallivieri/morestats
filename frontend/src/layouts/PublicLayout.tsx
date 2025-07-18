import { Outlet } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import NavBar from "../components/NavBar";

export default function PublicLayout() {
  const buttons: [string, () => void][] = [
    ["Players", () => (window.location.href = "/statistships/player")],
    ["Teams", () => (window.location.href = "/statistships/team")],
    ["Champions", () => (window.location.href = "/statistships/champion")],
  ];
  return (
    <div>
      <div className="statistships-welcome-header">
        <HomeButton />
        <NavBar buttons={buttons} />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
