import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const InputNode = ({ id, data = {} }) => {
  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: "input",
    },
  ];

  const [currName, setCurrName] = useState(
    data.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);

    if (data.onChange) {
      data.onChange({ ...data, inputName: e.target.value });
    }
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);

    if (data.onChange) {
      data.onChange({ ...data, inputType: e.target.value });
    }
  };

  return (
    <BaseNode id={id} data={data} label="Input" handles={handles}>
      <div>
        <div>
          <label>
            Input:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};

export default InputNode;
