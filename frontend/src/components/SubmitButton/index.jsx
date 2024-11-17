// Submit

import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Box, Button } from "@mui/joy";

import { useStore } from "@store";
import { generatePipelinePayload } from "@utils";

const SubmitButton = () => {
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    isLoading: state.isLoading,
    pipelineData: state.pipelineData,
    parsePipelineData: state.parsePipelineData,
    error: state.error,
  });

  const { isLoading, nodes, edges, pipelineData, error, parsePipelineData } =
    useStore(selector, shallow);

  const handleSubmit = () => {
    if (nodes.length === 0 || edges.length === 0) {
      alert("Please generate nodes!");
      return;
    }

    const payload = generatePipelinePayload(nodes, edges);
    parsePipelineData(payload);
  };

  useEffect(() => {
    if (error === null) return;
    alert(error);
  }, [error]);

  useEffect(() => {
    if (pipelineData === null) return;
    alert(
      `No. of Nodes: ${pipelineData.num_nodes}\nNo. of Edges: ${
        pipelineData.num_edges
      }\nIs DAG: ${pipelineData.is_dag ? "Yes" : "No"}`
    );
  }, [pipelineData]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          backgroundColor: "#5045E5",
        }}
        onClick={handleSubmit}
        disabled={isLoading}
        loading={isLoading}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SubmitButton;
