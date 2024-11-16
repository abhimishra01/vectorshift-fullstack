// llmNode.js

import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

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
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};

export default LLMNode;
