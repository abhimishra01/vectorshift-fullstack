// llmNode.js

import { Position } from "reactflow";
import { Box, Typography } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import { columnFlexBoxStyle } from "@utils/constants";

const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "system",
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: "prompt",
      style: { top: `${200 / 3}%` },
    },
    {
      type: "source",
      position: Position.Right,
      id: "response",
    },
  ];

  return (
    <BaseNode id={id} data={data} label="LLM" handles={handles}>
      <Box sx={columnFlexBoxStyle}>
        <Typography
          sx={{
            fontSize: "1rem",
          }}
        >
          This is LLM
        </Typography>
      </Box>
    </BaseNode>
  );
};

export default LLMNode;
