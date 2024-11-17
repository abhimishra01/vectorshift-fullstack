// Draggable

import { Box, Typography } from "@mui/joy";

import { commonBoxShadow } from "@utils/constants";

const Draggable = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      sx={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: commonBoxShadow,
      }}
      draggable
    >
      <Typography
        sx={{
          fontSize: "0.9rem",
          color: "#fff",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Draggable;
