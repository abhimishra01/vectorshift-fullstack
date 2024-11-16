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
