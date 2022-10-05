/*
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.
*/

const graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}

const graphClone = (node) => {
    let visited = new Set()
    let clone = {}
}
