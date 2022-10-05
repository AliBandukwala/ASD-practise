// WRONG: needs improvement.

const findindexForThreeSum = (arr, target) => {

    let numberMap = {}

    let indexes = []

    for(let i = 0; i < arr.length; i++){
        numberMap[arr[i]] = i
    }

    for(let i = 0; i < arr.length; i++){
        let remainder = target - arr[i]

        if(findIndexesForTwoSum(arr, remainder, numberMap, indexes) === true) indexes.push(i)
    }

    return indexes
}

const findIndexesForTwoSum = (arr, target, numberMap, indexes) => {

    for(let i = 0; i < arr.length; i++){
        let remainder = target - arr[i]

        if(numberMap[remainder]){
            indexes.push(i)
            indexes.push(numberMap[remainder])
            return true 
        }
    }

    return false
}

console.log(findindexForThreeSum([1000,100,6,1,45,21,10], 1106)) //ans: [2,3,4]