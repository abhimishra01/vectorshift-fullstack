// TextNode.js
import { useState, useEffect } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [dynamicHandles, setDynamicHandles] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });

  const extractVariables = (text) => {
    const regex = /{{([^}]+)}}/g;
    const matches = [...text.matchAll(regex)];
    return matches.map((match) => match[1].trim());
  };

  useEffect(() => {
    const variables = extractVariables(currText);

    const newHandles = variables.map((variable, index) => ({
      type: "target",
      position: Position.Left,
      id: variable,
      style: {
        top: `${((index + 1) * 100) / (variables.length + 1)}%`,
        background: "#555",
      },
    }));

    setDynamicHandles(newHandles);

    const textLength = currText.length;
    const minHeight = Math.max(80, variables.length * 40);
    const heightFromText = Math.ceil(textLength / 30) * 20 + 60;
    const newHeight = Math.max(minHeight, heightFromText);
    const newWidth = Math.max(200, Math.min(400, textLength * 8));

    setNodeSize({ width: newWidth, height: newHeight });
  }, [currText]);

  const allHandles = [
    ...dynamicHandles,
    {
      type: "source",
      position: Position.Right,
      id: "output",
      style: { top: "50%" },
    },
  ];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      handles={allHandles}
      styles={{
        width: nodeSize.width,
        height: nodeSize.height,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ padding: "8px" }}>
        <textarea
          value={currText}
          onChange={handleTextChange}
          style={{
            width: "90%",
            height: `${nodeSize.height - 50}px`,
            resize: "none",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "4px",
          }}
        />
      </div>
    </BaseNode>
  );
};

export default TextNode;
