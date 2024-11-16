// BaseNode.js
import { Handle } from "reactflow";

const BaseNode = ({ id, data, label, handles, children, styles }) => {
  return (
    <div
      style={{
        width: 200,
        height: 80,
        border: "1px solid black",
        borderRadius: "8px",
        backgroundColor: "#fff",
        ...styles,
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
        }}
      >
        <span>{label}</span>
      </div>
      {children}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
