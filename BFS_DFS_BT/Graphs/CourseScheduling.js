const graphBuilder = (arr) => {
    let graph = {}

    for(let edge of arr){
        let [a,b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

// another way to check for cycle in the graph (not recommended method tho!)
const hasCycleDFS = (currentNode, graph, visited, arrive, depart, result) => {
    arrive[currentNode]++
    visited.add(currentNode)


    for(let neighbor of graph[currentNode]){
        if(!visited.has(neighbor)){
            visited.add(neighbor)
            if(hasCycleDFS(neighbor, graph, visited, arrive, depart, result)) return true
        }
        else{
            if(depart[neighbor] === 0) return true
        }
    }

    depart[currentNode]++
    result.push(currentNode)
    return false
}

const findCourseSchedule = (numCourses, prerequisites) => {

    let graph = graphBuilder(prerequisites)

    let visited = new Set()
    let arrive = new Array(numCourses).fill(0)
    let depart = new Array(numCourses).fill(0)
    let result = []

    for(let node = 0; node < prerequisites.length; node++){
        if(!visited.has(node)){
            if(hasCycleDFS(node, graph, visited, arrive, depart, result)) return []
        }
    }

    return result
}