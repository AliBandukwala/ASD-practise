const preOrder = [1,2,4,5,3,6]
const inOrder = [4,2,5,1,3,6]

class TreeNode {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const buildTree = (preArr, inArr) => {

    // safety check
    if(preArr=== null || preArr.length === 0 || inArr === null || inArr.length === 0) return null

    let rootValue = preArr[0] // 1st elem in preorder traversal is always root
    let root = new TreeNode(rootValue)
    let inorderRootIndex = inArr.indexOf(rootValue)
    root.left = buildTree(preArr.slice(1,inorderRootIndex+1), inArr.slice(0,inorderRootIndex))
    root.right = buildTree(preArr.slice(inorderRootIndex+1,preArr.length), inArr.slice(inorderRootIndex+1,inArr.length))

    return root
}

console.log(buildTree(preOrder, inOrder))