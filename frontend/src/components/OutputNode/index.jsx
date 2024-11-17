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
    <BaseNode
      id={id}
      data={data}
      label="Output"
      handles={handles}
      styles={{ height: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={inputBoxStyle}>
          <label>Output:</label>
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
            defaultValue={outputType}
            onChange={handleTypeChange}
            sx={{ marginLeft: "1rem" }}
          >
            <Option value="Text">Text</Option>
            <Option value="File">File</Option>
          </Select>
        </Box>
      </Box>
    </BaseNode>
  );
};

export default OutputNode;
