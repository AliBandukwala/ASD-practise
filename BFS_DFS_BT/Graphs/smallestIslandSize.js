const grid = [
    ["w", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"]
]

const smallestIslandSize = (grid) => {
    let smallestSize = Infinity
    const visited = new Set()

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            const size = checkIslandSizewithDFS(grid, r, c, visited)
            if(size > 0 && size < smallestSize) smallestSize = size
        }
    }

    return smallestSize
}

const checkIslandSizewithDFS = (grid, r, c, visited) => {
     const rowInBounds = 0 <= r && r < grid.length
     const colInBounds = 0 <= c && c < grid[0].length
     if(!rowInBounds || !colInBounds) return 0

     if(grid[r][c] === "W") return 0

     let pos = r + "," + c
     if(visited.has(pos)) return 0
     visited.add(pos)

     let size = 1
     size += checkIslandSizewithDFS(grid, r+1, c, visited)
     size += checkIslandSizewithDFS(grid, r-1, c, visited)
     size += checkIslandSizewithDFS(grid, r, c+1, visited)
     size += checkIslandSizewithDFS(grid, r, c-1, visited)

     return size
}

console.log(smallestIslandSize(grid))