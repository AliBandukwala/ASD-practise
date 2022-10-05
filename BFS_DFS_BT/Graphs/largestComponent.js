const graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}

largestComponentCount = (graph) => {
    const visited = new Set() // searching is O(1)
    let largest = 0

    for(let node in graph){
        const size = exploreWithDFS(graph, node, visited)
        if(size > largest) largest = size
    }

    return largest
}

const exploreWithDFS = (graph, node, visited) => {
    if(visited.has(String(node))) return 0

    visited.add(String(node))

    let size = 1

    for(let neighbor of graph[node]){
        size += exploreWithDFS(graph, neighbor, visited)
    }

    return size
}

console.log(largestComponentCount(graph))