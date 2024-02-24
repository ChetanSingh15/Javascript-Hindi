const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "c++ course",
        price: 999
    },
    {
        itemName: "app dev course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 3999
    },
]

const pricetoPay = shoppingCart.reduce( (acc , item) => acc+ item.price ,0)

console.log(pricetoPay);

