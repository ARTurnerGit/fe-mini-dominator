import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

function StatTracker({ players, playerToGo }) {
  return (
    <table className="stat-tracker">
      <thead>
        <tr>
          <th>Player</th>
          <th>Cards</th>
          <th>Territories</th>
          <th>Troops</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(players).map(([playerName, playerObj]) => {
          return (
            <tr key={playerName}>
              <td className="name-entry">
                {
                  <FontAwesomeIcon
                    icon={
                      playerObj.territories !== 0
                        ? faUserCircle
                        : faSkullCrossbones
                    }
                    className={playerName}
                    style={
                      playerToGo === playerName
                        ? { borderRadius: "100%" }
                        : { borderRadius: "100%", opacity: "40%" }
                    }
                  />
                }
                {playerName}
              </td>
              <td>{playerObj.cards}</td>
              <td>{playerObj.territories}</td>
              <td>{playerObj.troops}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatTracker;
