const findBuySellIndexes = (arr) => {
    let result = []

    let buyingIndex, max_profit= 0
    let sellingIndex = 1

    while(sellingIndex <= arr.length){
        if(arr[buyingIndex] < arr[sellingIndex]){
            let profit = arr[sellingIndex] - arr[buyingIndex]

            if(max_profit < profit) result = [buyingIndex, sellingIndex]
            
            max_profit = Math.max(max_profit, profit)

            
        }

        else buyingIndex = sellingIndex

        sellingIndex++
    }

    return result
}

let prices = [7,1,3,4,99,14]
console.log(findBuySellIndexes(prices)) //ans: [1,4]