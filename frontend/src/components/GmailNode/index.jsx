import { useState } from "react";
import { Position } from "reactflow";
import { Box, Input } from "@mui/joy";

import { BaseNode } from "@components/nodes";
import {
  alignItemsCenterStyle,
  columnFlexBoxStyle,
  commonInputStyle,
} from "@utils/constants";

const GmailNode = ({ id, data = {} }) => {
  const [subject, setSubject] = useState(data.subject || "Pipeline Demo");
  const [recipient, setRecipient] = useState(
    data.recipient || "customers@vectorshift.ai"
  );

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "trigger",
    },
  ];

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Gmail"
      handles={handles}
      styles={{ height: "auto", width: "auto" }}
    >
      <Box sx={columnFlexBoxStyle}>
        <Box sx={alignItemsCenterStyle}>
          <label>To:</label>
          <Input
            sx={commonInputStyle}
            type="email"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </Box>
        <Box sx={alignItemsCenterStyle}>
          <label>Sub:</label>
          <Input
            sx={commonInputStyle}
            type="text"
            value={subject}
            onChange={handleSubjectChange}
          />
        </Box>
      </Box>
    </BaseNode>
  );
};

export default GmailNode;
