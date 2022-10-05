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

// using preorder DFS for serialising:
const serialise = (root) => {

    const result = []

    const dfsForSerialising = (root) => {
        if(root === null){ result.push("N"); return }
    
        // an eg. of pre-order traversal:
        result.push(root.val)
        dfsForSerialising(root.left)
        dfsForSerialising(root.right)
    }

    dfsForSerialising(root)
    console.log(result.toString())

    return result.toString() // returning a string of serialised BT
}

const deSerialise = (str) => {
    const arr = str.split(",")
    let i = 0

    const dfsForDeserialising = () => {
        if(arr[i] == "N") {i++ ; return null}

        let node = new Node(parseInt(arr[i]))
        i++
        node.left = dfsForDeserialising()
        node.right = dfsForDeserialising()

        return node
    }

    return dfsForDeserialising()
}

console.log(deSerialise(serialise(a)))
