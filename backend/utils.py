def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}  
    for edge in edges:
        source = edge["source"] 
        target = edge["target"]
        graph[source].append(target)

    visited = set()
    recursion_stack = set()

    def has_cycle(node):
        if node in recursion_stack: 
            return True
        if node in visited:  
            return False

        visited.add(node)
        recursion_stack.add(node)


        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True
        return False

    for node in graph:
        if node not in visited:
            if has_cycle(node):
                return False 

    return True
