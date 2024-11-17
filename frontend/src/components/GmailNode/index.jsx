import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const GmailNode = ({ id, data = {} }) => {
  const [subject, setSubject] = useState(data.subject || "Pipeline Demo");
  const [recipient, setRecipient] = useState(
    data.recipient || "customers@vectorshift.ai"
  );

  const handles = [{ type: "target", position: Position.Left, id: "trigger" }];

  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Gmail" handles={handles}>
      <div>
        <label>
          To:
          <input
            type="email"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </label>
        <label>
          Sub:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default GmailNode;
