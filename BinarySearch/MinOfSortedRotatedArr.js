// minimum element in a sorted rotated array will be next to pivot
const findPivot = (arr, l, r) => {
    if(l > r) return -1

    if (l === r) return l

    let mid = Math.floor((l+r)/2)

    if(mid > l && arr[mid] > arr[mid+1]) return mid

    if(mid < r && arr[mid] < arr[mid-1]) return mid-1

    if(arr[l] > arr[mid]) return findPivot(arr, low, mid-1)

    return findPivot(arr, mid+1, r)
}

arr = [99,100,101,102,95,96,97,98]
console.log(findPivot(arr, 0, arr.length-1)+1) //min value is always next to pivot.