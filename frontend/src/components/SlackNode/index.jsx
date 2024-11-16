import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const SlackNode = ({ id, data = {} }) => {
  const [channel, setChannel] = useState(data.channel || "");
  const [message, setMessage] = useState(data.message || "");

  const handles = [
    { type: "target", position: Position.Left, id: "trigger" },
    { type: "source", position: Position.Right, id: "status" },
  ];

  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleChannelChange = (e) => setChannel(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Slack" handles={handles}>
      <div>
        <label>
          Text
          <input type="text" value={message} onChange={handleMessageChange} />
        </label>
        <label>
          Dest:
          {/* channel / person dm */}
          <input type="text" value={channel} onChange={handleChannelChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default SlackNode;
