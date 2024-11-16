import { useState } from "react";
import { Position } from "reactflow";

import { BaseNode } from "@components/nodes";

const WebhookNode = ({ id, data = {} }) => {
  const [url, setUrl] = useState(data.url || "");

  const handles = [
    { type: "target", position: Position.Left, id: "trigger" },
    { type: "source", position: Position.Right, id: "status" },
  ];

  const handleUrlChange = (e) => setUrl(e.target.value);

  return (
    <BaseNode id={id} data={data} label="Webhook" handles={handles}>
      <div>
        <label>
          URL:
          <input type="text" value={url} onChange={handleUrlChange} />
        </label>
      </div>
    </BaseNode>
  );
};

export default WebhookNode;
