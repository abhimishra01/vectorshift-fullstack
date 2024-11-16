import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const CalcNode = ({ id, data = {}, label }) => {
  const [operation, setOperation] = useState(data.operation || "add");
  const handles = [
    { type: "target", position: Position.Left, id: "input1" },
    {
      type: "target",
      position: Position.Left,
      id: "input2",
      style: { top: "70%" },
    },
    { type: "source", position: Position.Right, id: "output" },
  ];

  const handleOperationChange = (e) => setOperation(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Calc" handles={handles}>
      <div>
        <label>
          Calc:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

export default CalcNode;
