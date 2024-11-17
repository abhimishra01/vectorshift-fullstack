// toolbar.js

import { Box, Avatar } from "@mui/joy";

import { commonBoxShadow, nodeTypes } from "@utils/constants";
import { Draggable } from "@components";
import logo from "@assets/logo.png";

const PipelineToolbar = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        boxShadow: commonBoxShadow,
      }}
    >
      <Avatar
        alt="V"
        src={logo}
        size="sm"
        sx={{
          boxShadow: commonBoxShadow,
          transition: "all 0.3s ease",
          marginLeft: "10px",
          borderRadius: "",
          "&:hover": {
            borderColor: "#6A5ACD",
            boxShadow: "0 2px 13px rgba(106, 90, 205, 0.4)",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {nodeTypes.map((nodeType, id) => (
          <Draggable key={id} type={nodeType.type} label={nodeType.label} />
        ))}
      </Box>
    </Box>
  );
};

export default PipelineToolbar;
