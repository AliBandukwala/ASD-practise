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
const d = new Node(54)
const e = new Node(5)
const f = new Node(16)

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
         d54    e5     f16
*/

const BTMaxPathSum = (root) => {
    if(root === null) return -Infinity

    if(root.left === null && root.right === null) return root.val

    return root.val += Math.max(BTMaxPathSum(root.left),BTMaxPathSum(root.right))
}

console.log(BTMaxPathSum(a))