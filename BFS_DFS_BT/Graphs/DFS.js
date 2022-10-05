const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const DFS = (graph, root) => {
    console.log(root)

    for(let neighbor of graph[root])
        DFS(graph, neighbor)
}

DFS(graph, "a")