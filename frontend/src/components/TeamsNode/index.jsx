import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const TeamsNode = ({ id, data = {} }) => {
  const [teamId, setTeamId] = useState(data.teamId || "");
  const [message, setMessage] = useState(data.message || "");

  const handles = [
    { type: "target", position: Position.Left, id: "trigger" },
    { type: "source", position: Position.Right, id: "status" },
  ];

  const handleTeamIdChange = (e) => setTeamId(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Teams" handles={handles}>
      <div>
        <label>
          ID:
          <input type="text" value={teamId} onChange={handleTeamIdChange} />
        </label>
        <label>
          Msg:
          <input type="text" value={message} onChange={handleMessageChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default TeamsNode;
