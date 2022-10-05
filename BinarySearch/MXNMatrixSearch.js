// m rows x n cols
const matrix = [
    [1,   4,  7, 11, 15], 
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

const findElemInMatrix = (mat,target) => {
    let c = 0 // will loop till n-1 n columns
    let r = mat.length-1 // for m rows

    while(r >= 0 && c <= mat[0].length){
        if(mat[r][c] === target) return (r+1)+'x'+(c+1)

        if(target > mat[r][c]) c++

        else if(target < mat[r][c]) r--
    }

    return "-1"
}

console.log(findElemInMatrix(matrix,30)) //ans: 2x4