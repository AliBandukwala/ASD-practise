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

const resultArr = []

const rightSideView = (root) => {
    resultArr.push(root.val)

    if(root.right){
        rightSideView(root.right) // use left for left view
    }

    return resultArr
}

console.log(rightSideView(a))