const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const BFS = (graph, root) => {
    const queue = [root]

    while(queue.length > 0){
        const currentNode = queue.shift()
        console.log(currentNode)
        
        for(let neighbor of graph[currentNode])
            queue.push(neighbor)
    }
}

BFS(graph, "a")