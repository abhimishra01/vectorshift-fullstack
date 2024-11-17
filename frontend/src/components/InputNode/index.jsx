import { useState } from "react";
import { Position } from "reactflow";
import { Box, Input, Option, Select } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import {
  columnFlexBoxStyle,
  commonInputStyle,
  inputBoxStyle,
  selectStyle,
} from "@utils/constants";

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
    <BaseNode
      id={id}
      data={data}
      label="Input"
      handles={handles}
      styles={{ height: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={inputBoxStyle}>
          <label>Input:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </Box>
        <Box sx={selectStyle}>
          <label>Type:</label>
          <Select
            sx={commonInputStyle}
            value={inputType}
            onChange={handleTypeChange}
          >
            <Option value="Text">Text</Option>
            <Option value="File">File</Option>
          </Select>
        </Box>
      </Box>
    </BaseNode>
  );
};

export default InputNode;
