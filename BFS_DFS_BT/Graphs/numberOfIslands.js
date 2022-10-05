// time complexity: O(rc) for r rows and c columns

const grid = [
    ["w", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"]
]

const islandCount = (grid) => {
    let count = 0
    const visited = new Set()

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(checkIfIsland(grid, r, c, visited) === true) count++
        }
    }

    return count
}

const checkIfIsland = (grid, r, c, visited) => {
    const rowInBound = r >= 0 && r < grid.length
    const colInBound = c >= 0 && c < grid[0].length
    if(!rowInBound || !colInBound) return false

    let pos = r + "," + c
    if(visited.has(pos)) return false
    visited.add(pos)

    if(grid[r][c] === "W") return false

    checkIfIsland(grid, r+1, c, visited)
    checkIfIsland(grid, r-1, c, visited)
    checkIfIsland(grid, r, c+1, visited)
    checkIfIsland(grid, r, c-1, visited)

    return true
}

console.log(islandCount(grid))