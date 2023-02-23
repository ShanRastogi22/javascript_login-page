const array = [2,3,4,5,6,7];

function copyedArray (){
    const newArray = [];
    for( let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    console.log(newArray);

}

