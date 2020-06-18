import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function StatTracker({ players, territories }) {
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
        {players.map((playerObj) => {
          return (
            <tr key={playerObj.playerName}>
              <td className="name-entry">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={playerObj.playerName}
                  style={{ borderRadius: "100%" }}
                />
                {playerObj.playerName}
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
