const findMaxPathSumMatrix = (mat) => {
    
    let res = -1
    for (let i = 1; i < mat.length; i++) {

        res = -1

        for (let j = 0; j < mat[0].length; j++) {

            if (j > 0 && j < mat[0].length) {
                mat[i][j] += Math.max(mat[i - 1][j - 1], Math.max(mat[i - 1][j], mat[i - 1][j + 1]))
            }

            else if (j === 0 ) {
                mat[i][j] += Math.max(mat[i - 1][j], mat[i - 1][j + 1])
            }

            else if (j === mat[0].length) {
                mat[i][j] += Math.max(mat[i - 1][j - 1], mat[i - 1][j])
            }

            res = Math.max(res, mat[i][j])
        }
    }

    return res
}

let mat = [[10, 10, 2, 0, 20, 4],
           [1, 0, 0, 30, 2, 5],
           [0, 10, 4, 0, 2, 0],
           [1, 0, 2, 20, 0, 4]];

findMaxPathSumMatrix(mat)
