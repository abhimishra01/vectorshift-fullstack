// toolbar.js

import { Box } from "@mui/joy";

import { nodeTypes } from "@utils/constants";
import { Draggable } from "@components";

const PipelineToolbar = () => {
  return (
    <Box style={{ padding: "10px" }}>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {nodeTypes.map((nodeType, id) => (
          <Draggable key={id} type={nodeType.type} label={nodeType.label} />
        ))}
      </Box>
    </Box>
  );
};

export default PipelineToolbar;
