
// partially Solved, needs improvement.

const findTargetWithBS = (arr, target) => {
    let l = 0
    let r = arr.length -1

    const val = BinarySearch(arr, l, r, target)

    if(val === -1) return BinarySearch(arr, l, r, target-1) + 1

    return val
}

const BinarySearch = (arr, l, r, target) => {
    if(l > r) return -1

    let mid = Math.floor((l+r)/2)

    if(target === arr[mid]) return mid
    
    if(target > arr[mid]) return BinarySearch(arr, mid+1, r, target)

    if(target < arr[mid]) return BinarySearch(arr, l, mid-1, target)

    return -1
}

let arr = [1,2,3,4,5,8,9,10]

console.log(findTargetWithBS(arr,7))