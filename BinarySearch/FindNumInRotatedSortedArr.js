const BinarySearch = (arr, l, r, target) => {
    if(l > r) return -1

    let mid = Math.floor((l+r)/2)

    if(arr[mid] === target) return mid

    if(target > arr[mid]) return BinarySearch(arr, mid+1, r, target)

    return BinarySearch(arr, l, mid-1, target)
}

const findPivot = (arr, l, r) => {
    if(l > r) return -1

    let mid = Math.floor((l+r)/2)

    if(l < mid && arr[mid] > arr[mid+1]) return mid
    
    if(mid < r && arr[mid] < arr[mid-1]) return mid-1

    if(arr[l] >= arr[mid]) return findPivot(arr, l, mid-1)

    return findPivot(arr, mid+1, r)
}

const findTarget = (arr, target) => {
    let l = 0
    let r = arr.length - 1

    let pivot = findPivot(arr,l,r)

    if(arr[pivot] === target) return pivot

    if(target > arr[pivot]) return BinarySearch(arr, l, pivot-1, target)

    if(target < arr[pivot]) return BinarySearch(arr, pivot+1, r, target)

    return -1
}

let arr = [6,7,8,9,1,2,3,4,5]
console.log(findTarget(arr,2)) // ans: 5