import { Box } from "@mui/joy";

import PipelineUI from "@features/UI";
import { PipelineToolbar, SubmitButton } from "@components";

function App() {
  return (
    <Box>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </Box>
  );
}

export default App;
