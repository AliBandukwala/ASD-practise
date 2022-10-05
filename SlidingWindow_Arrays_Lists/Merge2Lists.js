class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

const mergeLists = (list1,list2) => {
    let dummyNode = new Node(-1)

    let result = dummyNode

    while(list1 && list2){
        if(list1.val > list2.val){
            dummyNode.next = new Node(list2.val)
            dummyNode = dummyNode.next
            list2 = list2.next
        }
        else if(list1.val < list2.val){
            dummyNode.next = new Node(list1.val)
            dummyNode = dummyNode.next
            list1 = list1.next
        }
        else{
            dummyNode.next = new Node(list1.val)
            dummyNode = dummyNode.next
            list1 = list1.next

            dummyNode.next = new Node(list2.val)
            dummyNode = dummyNode.next
            list2 = list2.next
        }
    }

    if(list1) dummyNode.next = list1
    if(list2) dummyNode.next = list2

    return result.next // head of dummyNode or sorted Linkedlist
}

let l1 = new Node(1)
l1.next = new Node(4)
l1.next.next = new Node(7)
l1.next.next.next = new Node(9)
l1.next.next.next.next = new Node(11)

let l2 = new Node(2)
l2.next = new Node(5)
l2.next.next = new Node(8)
l2.next.next.next = new Node(10)
l2.next.next.next.next = new Node(12)

const printList = (list) => {
    while(list){
        console.log(list.val)
        list = list.next
    }
}

console.log(printList(mergeLists(l1,l2)))

