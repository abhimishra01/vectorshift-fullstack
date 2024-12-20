// BaseNode.js
import { Handle } from "reactflow";
import { Box, Typography } from "@mui/joy";

import { commonBoxShadow, handleStyles } from "@utils/constants";

const BaseNode = ({ id, data, label, handles, children, styles }) => {
  return (
    <Box
      sx={{
        width: 200,
        height: 80,
        border: "1px solid #33008C",
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "0.5rem",
        boxShadow: commonBoxShadow,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "#6A5ACD",
          boxShadow: "0 8px 16px rgba(106, 90, 205, 0.4)",
        },
        ...styles,
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.9rem",
          }}
        >
          {label}
        </Typography>
      </Box>
      {children}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, ...handleStyles }}
        />
      ))}
    </Box>
  );
};

export default BaseNode;
