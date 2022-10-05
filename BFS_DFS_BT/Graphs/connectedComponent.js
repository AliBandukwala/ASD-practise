const graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}

connectedComponentCount = (graph) => {
    let count = 0;
    const visited = new Set()

    for(let node in graph){
        if(exploreWithDFS(graph, node, visited) === true){
            count += 1
        }  
    }

    return count
}

const exploreWithDFS = (graph, node, visited) => {
    if(visited.has(String(node))) return false
    
    visited.add(String(node))

    for(let neighbor of graph[node]){
        exploreWithDFS(graph, neighbor, visited)
    }
    
    return true
}

console.log(connectedComponentCount(graph))