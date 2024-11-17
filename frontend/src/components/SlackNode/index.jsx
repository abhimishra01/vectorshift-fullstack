import { useState } from "react";
import { Position } from "reactflow";
import { Box, Input } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import {
  alignItemsCenterStyle,
  columnFlexBoxStyle,
  commonInputStyle,
} from "@utils/constants";

const SlackNode = ({ id, data = {} }) => {
  const [channel, setChannel] = useState(data.channel || "");
  const [message, setMessage] = useState(data.message || "");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "trigger",
    },
  ];

  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleChannelChange = (e) => setChannel(e.target.value);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Slack"
      handles={handles}
      styles={{ height: "auto", width: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={alignItemsCenterStyle}>
          <label>Text:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
        </Box>
        <Box sx={alignItemsCenterStyle}>
          <label>Dest:</label>
          {/* channel / person dm */}
          <Input
            sx={commonInputStyle}
            type="text"
            value={channel}
            onChange={handleChannelChange}
          />
        </Box>
      </Box>
    </BaseNode>
  );
};

export default SlackNode;
