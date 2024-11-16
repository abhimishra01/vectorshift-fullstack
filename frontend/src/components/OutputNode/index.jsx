import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const OutputNode = ({ id, data = {} }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "output",
    },
  ];

  const [currName, setCurrName] = useState(
    data.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);

    if (data.onChange) {
      data.onChange({ ...data, outputName: e.target.value });
    }
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);

    if (data.onChange) {
      data.onChange({ ...data, outputType: e.target.value });
    }
  };

  return (
    <BaseNode id={id} data={data} label="Output" handles={handles}>
      <div>
        <div>
          <label>
            Output:
            <output type="text" value={currName} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select value={outputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};

export default OutputNode;
