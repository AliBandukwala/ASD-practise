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

const averageAtEachLevel = (root) => {
    if(root === null) return 0

    const queue = [root]
    const avgArr = []

    while(queue.length > 0){
        let sum = 0
        let size = queue.length

        for(let i = 0; i < size; i++){
            const currentNode = queue.shift()
            sum += currentNode.val

            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
    
        avgArr.push(sum/size)
    }

    return avgArr
}

console.log(averageAtEachLevel(a))