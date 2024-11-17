import { useState } from "react";
import { Position } from "reactflow";
import { Box, Input } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import {
  alignItemsCenterStyle,
  columnFlexBoxStyle,
  commonInputStyle,
  handleStyles,
} from "@utils/constants";

const TeamsNode = ({ id, data = {} }) => {
  const [teamId, setTeamId] = useState(data.teamId || "");
  const [message, setMessage] = useState(data.message || "");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "trigger",
      style: handleStyles,
    },
  ];

  const handleTeamIdChange = (e) => setTeamId(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Teams"
      handles={handles}
      styles={{ height: "auto", width: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={alignItemsCenterStyle}>
          <label>ID:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={teamId}
            onChange={handleTeamIdChange}
          />
        </Box>
        <Box sx={alignItemsCenterStyle}>
          <label>Msg:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
        </Box>
      </Box>
    </BaseNode>
  );
};

export default TeamsNode;
