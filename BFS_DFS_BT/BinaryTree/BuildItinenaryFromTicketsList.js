const edges = [
    ["LA","NY"],
    ["JFK","LA"],
    ["NY","SF"],
    ["TX","DE"],
    ["SF","TX"]
]

const graphBuilder = (edges) => {
    const graph = {}

    for(let edge of edges){
        const [a,b] = edge
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
    }

    return graph
}

const ItnBuilder = (graph,source, result) => {

    if(source in graph && graph[source].length > 0)
    {
        console.log(source + "->" + graph[source][0])  
        ItnBuilder(graph, graph[source][0], result)
    }
      
    return result
}

console.log(ItnBuilder(graphBuilder(edges), "JFK", ""))