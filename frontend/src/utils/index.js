export const formatNodesIntoPayload = (nodes) =>
  nodes.reduce((acc, node) => {
    acc.push({ id: node.id });
    return acc;
  }, []);

export const formatEdgesIntoPayload = (edges) =>
  edges.reduce((acc, edge) => {
    acc.push({ source: edge.source, target: edge.target });
    return acc;
  }, []);

export const generatePipelinePayload = (nodes, edges) => ({
  nodes: formatNodesIntoPayload(nodes),
  edges: formatEdgesIntoPayload(edges),
});
