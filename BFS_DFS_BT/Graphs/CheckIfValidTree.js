let n = 5

let edgeList = [
    [0,1],
    [0,2],
    [0,3],
    [1,4],
]

const graphBuilder = (list) => {
    let graph = {}

    for(let edge of list){
        let [a,b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
        
    return graph
}

const checkIfValid = (n, edges) => {
    if(n === 0 || n === 1) return true

    let graph = graphBuilder(edges)

    let visited = new Set()

    const dfs = (currentNode, parentNode) => {
        if(visited.has(currentNode)) return false

        visited.add(currentNode)

        for(let neighbor of graph[currentNode]){
            if(visited.has(neighbor) && neighbor != parentNode) return false // there is a cycle

            if(neighbor === parentNode) continue

            if(dfs(neighbor,currentNode) === false) return false
        }

        return true        
    }

    return dfs(0,-1) && (visited.size === n) // to check if all nodes are visited meaning same tree
}

console.log(checkIfValid(n,edgeList))