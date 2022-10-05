class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/* 
               a1
              /   \
            b2     c3
           /  \      \
         d4    e5     f6
*/

const findMaxPathSum = (root) => {
    
    if(root === null) return 0

    max_single_path = Math.max(findMaxPathSum(root.left),findMaxPathSum(root.right)) + root.val,

    max_single_path_with_root = Math.max(root.val, max_single_path)

    max_all = Math.max(max_single_path_with_root, findMaxPathSum(root.left)+findMaxPathSum(root.right)+root.val)

    return max_all
}

console.log(findMaxPathSum(a)) //ans should be: 17