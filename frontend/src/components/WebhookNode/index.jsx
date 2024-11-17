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

const WebhookNode = ({ id, data = {} }) => {
  const [url, setUrl] = useState(data.url || "");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "trigger",
      style: handleStyles,
    },
  ];

  const handleUrlChange = (e) => setUrl(e.target.value);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Webhook"
      handles={handles}
      styles={{ height: "auto", width: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={alignItemsCenterStyle}>
          <label>URL:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={url}
            onChange={handleUrlChange}
          />
        </Box>
      </Box>
    </BaseNode>
  );
};

export default WebhookNode;
