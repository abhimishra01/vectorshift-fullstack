// BaseNode.js
import { Box, Typography } from "@mui/joy";

import { commonBoxShadow } from "@utils/constants";
import { Handle } from "reactflow";

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
          backgroundColor: "black",
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
          style={{ ...handle.style }}
        />
      ))}
    </Box>
  );
};

export default BaseNode;
