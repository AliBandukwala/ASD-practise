const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
}

const DFSHasPath = (graph, src, dst) => {
    if(src === dst) return true

    for(let neighbor of graph[src]){
        if(DFSHasPath(graph,neighbor,dst) === true)
            return true
    }
    
    return false
}

const BFSHasPath = (graph, src, dst) => {
    const queue = [src]

    while(queue.length > 0){
        const currentSrc = queue.shift()
        if(currentSrc === dst) return true
        for(let neighbor of graph[currentSrc]){
            queue.push(neighbor)
        }
    }

    return false
}

console.log("DFS:",DFSHasPath(graph, "j", "i"))
console.log("BFS:",BFSHasPath(graph, "h", "g"))