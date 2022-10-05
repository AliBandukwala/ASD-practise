const findIndexsForTwoSum = (arr, target) => {
    let numberMap = {}
    let resultIndexes = []

    for(let i = 0; i < arr.length; i++){
        numberMap[arr[i]] = i
    }

    for(let i = 0; i < arr.length; i++){
        let remainder = target - arr[i]

        if(numberMap[remainder]){
            resultIndexes.push(i)
            resultIndexes.push(numberMap[remainder])
        }
    }

    return resultIndexes
}

console.log(findIndexsForTwoSum([1,55,77,13,2,99], 3)) //ans: [0,4]