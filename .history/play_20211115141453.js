

const array=["1","2","3","4","5"]

console.log(array.slice(0,3))


function printValues(...arr){
    for(let i of arr){
        console.log(i)
    }
}


printValues(1,2,3,4,5)