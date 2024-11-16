// toolbar.js

import { nodeTypes } from "@utils/constants";
import { Draggable } from "@components";

const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {nodeTypes.map((nodeType, id) => (
          <Draggable key={id} type={nodeType.type} label={nodeType.label} />
        ))}
      </div>
    </div>
  );
};

export default PipelineToolbar;
