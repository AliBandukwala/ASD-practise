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
                1
              /   \
            2      3
          /  \      \
         4    5      6
*/

const preOrder = (root) => {

    if(root === null) return 

    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

const inOrder = (root) => {
    if(root === null) return 

    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}

const postOrder = (root) => {
    if(root === null) return 

    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
}

console.log("Preorder:")
preOrder(a)
console.log("Inorder:")
inOrder(a)
console.log("Postorder:")
postOrder(a)



