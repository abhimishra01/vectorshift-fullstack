export const apiRoutes = {
  parse: "pipelines/parse",
  ping: "ping", // health-check route
};

export const nodeTypes = [
  {
    type: "customInput",
    label: "Input",
  },
  {
    type: "llm",
    label: "LLM",
  },
  {
    type: "customOutput",
    label: "Output",
  },
  {
    type: "text",
    label: "Text",
  },
  {
    type: "gmail",
    label: "Gmail",
  },
  {
    type: "slack",
    label: "Slack",
  },
  {
    type: "teams",
    label: "Teams",
  },
  {
    type: "calc",
    label: "Calc",
  },
  {
    type: "webhook",
    label: "Webhook",
  },
];

export const handleStyles = {
  background: "#fafafa",
  height: "10px",
  width: "10px",
  border: "1px solid #5A00ED",
  borderRadius: "50%",
};

export const inputBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

export const alignItemsCenterStyle = {
  display: "flex",
  alignItems: "center",
};

export const selectStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const columnFlexBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const commonInputStyle = {
  marginLeft: "0.5rem",
};

export const commonBoxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
