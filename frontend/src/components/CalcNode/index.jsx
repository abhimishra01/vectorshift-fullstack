import { useState } from "react";
import { Position } from "reactflow";
import { Box, Option, Select } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import {
  alignItemsCenterStyle,
  commonInputStyle,
  handleStyles,
} from "@utils/constants";

const CalcNode = ({ id, data = {}, label }) => {
  const [operation, setOperation] = useState(data.operation || "add");
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "input1",
      style: handleStyles,
    },
    {
      type: "target",
      position: Position.Left,
      id: "input2",
      style: { top: "70%", ...handleStyles },
    },
    {
      type: "source",
      position: Position.Right,
      id: "output",
      style: handleStyles,
    },
  ];

  const handleOperationChange = (e) => setOperation(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Calc" handles={handles}>
      <Box
        sx={{
          ...alignItemsCenterStyle,
          justifyContent: "flex-start",
        }}
      >
        <label>Calc:</label>
        <Select
          sx={commonInputStyle}
          defaultValue={operation}
          onChange={handleOperationChange}
        >
          <Option value="add">Add</Option>
          <Option value="subtract">Subtract</Option>
          <Option value="multiply">Multiply</Option>
          <Option value="divide">Divide</Option>
        </Select>
      </Box>
    </BaseNode>
  );
};

export default CalcNode;
